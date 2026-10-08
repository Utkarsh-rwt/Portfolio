const CodeBlock = ({ children }) => (
  <pre className="overflow-x-auto rounded-xl border border-stone-800 bg-[#171717] p-5 font-mono text-[0.9rem] leading-7 text-stone-100 shadow-lg shadow-stone-300/30 sm:p-6">
    <code className="whitespace-pre">{children}</code>
  </pre>
)

const Blog1 = () => {
  return (
    <article className="mx-auto max-w-5xl px-4 pb-20 pt-8 sm:px-6 sm:pt-14 lg:px-8">
      <header className="border-b border-stone-200 pb-10 sm:pb-14">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">
          <span>Spring Boot</span>
          <span className="text-stone-300">/</span>
          <span>JSP</span>
          <span className="text-stone-300">/</span>
          <span>Debugging notes</span>
        </div>
        <h1 className="mt-6 max-w-4xl text-4xl font-bold tracking-tight text-stone-950 sm:text-6xl sm:leading-[1.05]">
          When Spring Boot JSP works with Maven but not IntelliJ IDEA
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600 sm:text-xl">
          The controller was being called successfully. The difference was the runtime environment created by the way the application was launched.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 text-sm text-stone-500">
          <span className="rounded-full bg-stone-100 px-3 py-1.5">A debugging lesson</span>
          <span className="rounded-full bg-[#fff4d6] px-3 py-1.5">Spring Boot 4.1.1</span>
          <span className="rounded-full bg-stone-100 px-3 py-1.5">Java 25</span>
        </div>
      </header>

      <div className="grid gap-12 pt-10 lg:grid-cols-[minmax(0,1fr)_200px] lg:gap-16">
        <div className="min-w-0 space-y-10 text-[1.05rem] leading-8 text-stone-700">
          <section>
            <p>
              While working on a <strong className="font-semibold text-stone-950">Spring Boot application with JSP</strong>, I encountered a confusing difference between two launch methods. Running the application with Maven worked as expected: the controller was invoked and the JSP rendered correctly. Launching the same application directly from IntelliJ IDEA invoked the controller, but the JSP was not rendered.
            </p>
            <p className="mt-5">The source code had not changed. The important difference was the execution path.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold tracking-tight text-stone-950 sm:text-3xl">The two execution paths</h2>
            <p className="mt-4">With Maven, the application was started through the project build configuration and the Spring Boot Maven Plugin:</p>
            <CodeBlock>{`pom.xml
   -> Maven dependency resolution
   -> Spring Boot Maven Plugin
   -> Application`}</CodeBlock>
            <p className="mt-5">The IntelliJ run configuration followed a different path:</p>
            <CodeBlock>{`IntelliJ IDEA
   -> IDE module configuration
   -> Java process
   -> Application`}</CodeBlock>
            <p className="mt-5">Both methods start the same application, but they do not necessarily provide an identical runtime environment.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold tracking-tight text-stone-950 sm:text-3xl">Why the runtime classpath matters</h2>
            <p className="mt-4">The runtime classpath is the collection of compiled classes, libraries, and resources available to the application while it is running. A JSP application typically needs more than application classes alone:</p>
            <CodeBlock>{`target/classes
Spring MVC
Spring Core
Embedded Tomcat
Tomcat Jasper
JSP libraries
Web application resources`}</CodeBlock>
            <p className="mt-5">Maven constructs its runtime classpath from the dependencies and plugins declared in the project. IntelliJ constructs its classpath from the IDE module and run configuration. In most projects those environments are effectively equivalent, but JSP rendering is sensitive to differences in servlet-container setup, web resources, and JSP engine availability.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold tracking-tight text-stone-950 sm:text-3xl">The controller was not the problem</h2>
            <p className="mt-4">The request reached the controller successfully. That narrowed the failure to the stage after the controller returned its logical view name:</p>
            <CodeBlock>{`Browser
   -> Tomcat
   -> Spring MVC
   -> Controller
   -> return "index"
   -> JSP view resolution
   -> index.jsp
   -> HTTP response`}</CodeBlock>
            <p className="mt-5">A useful diagnostic was to return a plain response temporarily:</p>
            <CodeBlock>{`@Controller
public class HomeController {

    @GetMapping("/")
    @ResponseBody
    public String home() {
        return "Hello World";
    }
}`}</CodeBlock>
            <p className="mt-5">That response worked from IntelliJ, confirming that the request mapping, embedded server, and controller were healthy. The failure only appeared when Spring had to resolve and process a JSP view.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold tracking-tight text-stone-950 sm:text-3xl">The project configuration</h2>
            <p className="mt-4">The project used Spring MVC and Tomcat Jasper:</p>
            <CodeBlock>{`<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-webmvc</artifactId>
</dependency>

<dependency>
    <groupId>org.apache.tomcat</groupId>
    <artifactId>tomcat-jasper</artifactId>
    <version>11.0.25</version>
</dependency>`}</CodeBlock>
            <p className="mt-5">The view resolver was configured in <code className="rounded bg-stone-100 px-1.5 py-0.5 text-[0.95em] text-stone-950">application.properties</code>:</p>
            <CodeBlock>{`spring.mvc.view.prefix=/
spring.mvc.view.suffix=.jsp`}</CodeBlock>
            <p className="mt-5">With a normal controller method, returning <code className="rounded bg-stone-100 px-1.5 py-0.5 text-[0.95em] text-stone-950">index</code> tells Spring to resolve <code className="rounded bg-stone-100 px-1.5 py-0.5 text-[0.95em] text-stone-950">/index.jsp</code>. That is a different execution path from returning text directly with <code className="rounded bg-stone-100 px-1.5 py-0.5 text-[0.95em] text-stone-950">@ResponseBody</code>.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold tracking-tight text-stone-950 sm:text-3xl">What I tried, and what worked</h2>
            <p className="mt-4">I tested changing the project packaging from WAR to JAR:</p>
            <CodeBlock>{`<packaging>war</packaging>`}</CodeBlock>
            <p className="mt-5">The change did not resolve the issue when the application was still launched directly from IntelliJ. I also reviewed the IntelliJ run configuration and its classpath settings, but the behavior remained unchanged.</p>
            <p className="mt-5">Since Maven execution was already working, I used the Spring Boot Maven goal directly from IntelliJ:</p>
            <CodeBlock>{`Maven
  -> SpringBootWebIntro
  -> Plugins
  -> spring-boot
  -> spring-boot:run`}</CodeBlock>
            <p className="mt-5">This is equivalent to running:</p>
            <CodeBlock>{`./mvnw spring-boot:run`}</CodeBlock>
            <p className="mt-5">The JSP rendered correctly because IntelliJ was now using the same Maven-based execution path that had already been verified to work.</p>
            <div className="mt-6 border-l-4 border-[#e7b94c] bg-[#fff8e7] px-5 py-4 text-stone-800">
              <strong className="font-semibold text-stone-950">The key distinction:</strong> the source code was the same, but Maven and IntelliJ were assembling and launching the application with different runtime environments.
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold tracking-tight text-stone-950 sm:text-3xl">The broader lesson</h2>
            <p className="mt-4">When an application works through Maven but not when launched directly from an IDE, the source code is not automatically the culprit. Compare the execution environments before changing controllers or adding dependencies:</p>
            <ul className="mt-5 list-disc space-y-2 pl-6">
              <li>Runtime classpaths and dependency resolution</li>
              <li>IDE module configuration and resource directories</li>
              <li>Servlet-container and JSP-engine availability</li>
              <li>Packaging, web resources, and run configurations</li>
              <li>Maven execution versus direct IDE execution</li>
            </ul>
            <p className="mt-5">The fastest diagnosis came from isolating the failing layer. A plain response confirmed that the controller worked; comparing the launch methods showed that JSP rendering depended on the runtime environment beyond the controller itself.</p>
            <p className="mt-5">When the Maven path is known to work, running <code className="rounded bg-stone-100 px-1.5 py-0.5 text-[0.95em] text-stone-950">spring-boot:run</code> from IntelliJ is a practical way to keep development behavior consistent with the project configuration.</p>
          </section>
        </div>

        <aside className="hidden lg:block">
          <div className="sticky top-32 border-l border-stone-200 pl-5 text-sm text-stone-500">
            <p className="font-semibold uppercase tracking-[0.16em] text-stone-950">In this post</p>
            <ol className="mt-4 space-y-3 leading-6">
              <li>The two execution paths</li>
              <li>Why the runtime classpath matters</li>
              <li>The controller was not the problem</li>
              <li>The project configuration</li>
              <li>What I tried, and what worked</li>
              <li>The broader lesson</li>
            </ol>
          </div>
        </aside>
      </div>
    </article>
  )
}

export default Blog1
