import { Link } from 'react-router-dom'

const CodeBlock = ({ children }) => (
  <pre className="overflow-x-auto rounded-2xl border border-stone-800 bg-stone-950 p-4 text-sm leading-7 text-stone-200 shadow-xl shadow-stone-200/40 sm:p-6">
    <code>{children}</code>
  </pre>
)

const BlogPost = () => {
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
          Why my Spring Boot JSP worked in the terminal but not in IntelliJ
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600 sm:text-xl">
          The controller was fine. The difference was the web application structure created by the way the app was launched.
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
              While learning <strong className="font-semibold text-stone-950">Spring Boot with JSP</strong>, I ran into an issue that took much longer to debug than it should have. The application worked when I ran the packaged application from the terminal, but the same application returned a 404 Whitelabel Error Page when I ran the main class directly from IntelliJ IDEA.
            </p>
            <p className="mt-5">At first, I thought the problem was my controller. It was not.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold tracking-tight text-stone-950 sm:text-3xl">The setup</h2>
            <p className="mt-4">The project used Spring Web, JSP, embedded Tomcat 11, Java 25, and IntelliJ IDEA. The important files looked like this:</p>
            <CodeBlock>{`src/
└── main/
    ├── java/
    │   └── com/utkarsh/SpringBootWebIntro/
    │       ├── SpringBootWebIntroApplication.java
    │       └── HomeController.java
    ├── resources/
    │   └── application.properties
    └── webapp/
        └── index.jsp`}</CodeBlock>
            <p className="mt-5">The controller was straightforward:</p>
            <CodeBlock>{`@Controller
public class HomeController {

    @GetMapping("/")
    public String home() {
        return "index";
    }
}`}</CodeBlock>
            <p className="mt-5">And the view resolver was configured in <code className="rounded bg-stone-100 px-1.5 py-0.5 text-[0.95em] text-stone-950">application.properties</code>:</p>
            <CodeBlock>{`spring.mvc.view.prefix=/
spring.mvc.view.suffix=.jsp`}</CodeBlock>
            <p className="mt-5">So Spring should turn <code className="rounded bg-stone-100 px-1.5 py-0.5 text-[0.95em] text-stone-950">index</code> into <code className="rounded bg-stone-100 px-1.5 py-0.5 text-[0.95em] text-stone-950">/index.jsp</code>.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold tracking-tight text-stone-950 sm:text-3xl">The first useful clue</h2>
            <p className="mt-4">When I ran the application from IntelliJ, Tomcat started successfully and the request reached the controller. I verified that by printing a message from the method.</p>
            <p className="mt-5">Then I changed the endpoint temporarily:</p>
            <CodeBlock>{`@GetMapping("/")
@ResponseBody
public String home() {
    return "Hello World";
}`}</CodeBlock>
            <p className="mt-5">This worked. That small experiment proved the request mapping and controller were healthy. The failure only appeared when Spring tried to resolve a JSP view.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold tracking-tight text-stone-950 sm:text-3xl">IntelliJ versus the packaged WAR</h2>
            <p className="mt-4">I then built the application using Maven. Because JSP expects a web application layout, I configured the project with WAR packaging:</p>
            <CodeBlock>{`<packaging>war</packaging>`}</CodeBlock>
            <p className="mt-5">After running:</p>
            <CodeBlock>{`./mvnw clean package -DskipTests
java -jar target/SpringBootWebIntro-0.0.1-SNAPSHOT.war`}</CodeBlock>
            <p className="mt-5">the JSP worked. The meaningful difference was not the controller or the port. Maven had packaged <code className="rounded bg-stone-100 px-1.5 py-0.5 text-[0.95em] text-stone-950">src/main/webapp</code> as part of the web application, giving embedded Tomcat the structure it expected.</p>
            <div className="mt-6 border-l-4 border-[#e7b94c] bg-[#fff8e7] px-5 py-4 text-stone-800">
              <strong className="font-semibold text-stone-950">The key distinction:</strong> Java classes are compiled onto the runtime classpath, while JSP files are web application resources that depend on the servlet container and webapp layout.
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold tracking-tight text-stone-950 sm:text-3xl">Why the return values behave differently</h2>
            <p className="mt-4">With <code className="rounded bg-stone-100 px-1.5 py-0.5 text-[0.95em] text-stone-950">@ResponseBody</code>, Spring sends the returned string directly as the HTTP response. With a normal controller method, <code className="rounded bg-stone-100 px-1.5 py-0.5 text-[0.95em] text-stone-950">"index"</code> is a view name. The resolver adds the prefix and suffix, and the servlet container locates and compiles <code className="rounded bg-stone-100 px-1.5 py-0.5 text-[0.95em] text-stone-950">index.jsp</code>.</p>
            <p className="mt-5">Those are two different paths:</p>
            <CodeBlock>{`@ResponseBody
    -> direct HTTP response

return "index"
    -> view resolver
    -> index.jsp
    -> JSP compilation
    -> HTTP response`}</CodeBlock>
          </section>

          <section>
            <h2 className="text-2xl font-bold tracking-tight text-stone-950 sm:text-3xl">The takeaway</h2>
            <p className="mt-4">The most useful lesson was to isolate the failing layer before changing configuration randomly. Testing a plain response proved that the controller worked. Comparing IntelliJ with the Maven-built WAR then exposed the real difference: how the application was packaged and launched.</p>
            <p className="mt-5">For a JSP-based Spring Boot application, keep the JSP under <code className="rounded bg-stone-100 px-1.5 py-0.5 text-[0.95em] text-stone-950">src/main/webapp</code>, use WAR packaging, and run the packaged artifact when you need the same web resource layout used in production.</p>
            <p className="mt-5">You do not need to install Tomcat separately. The WAR can still run with Spring Boot's embedded Tomcat setup.</p>
          </section>
        </div>

        <aside className="hidden lg:block">
          <div className="sticky top-32 border-l border-stone-200 pl-5 text-sm text-stone-500">
            <p className="font-semibold uppercase tracking-[0.16em] text-stone-950">In this post</p>
            <ol className="mt-4 space-y-3 leading-6">
              <li>The setup</li>
              <li>The first useful clue</li>
              <li>IntelliJ versus the packaged WAR</li>
              <li>Why return values differ</li>
              <li>The takeaway</li>
            </ol>
          </div>
        </aside>
      </div>
    </article>
  )
}

const Blogs = () => {
  return (
    <section className="mx-auto max-w-5xl px-4 pb-20 pt-8 sm:px-6 sm:pt-14 lg:px-8">
      <header className="border-b border-stone-200 pb-10 sm:pb-14">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">Writing</p>
        <h1 className="mt-5 max-w-3xl text-4xl font-bold tracking-tight text-stone-950 sm:text-6xl sm:leading-[1.05]">
          Notes from building and debugging software
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600 sm:text-xl">
          Practical lessons, debugging notes, and things I learn while making software.
        </p>
      </header>

      <div className="divide-y divide-stone-200">
        <article className="py-8 first:pt-10 sm:py-10">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">
            <span>Spring Boot</span>
            <span className="text-stone-300">/</span>
            <span>JSP</span>
            <span className="text-stone-300">/</span>
            <span>Debugging notes</span>
          </div>
          <h2 className="mt-4 max-w-3xl text-2xl font-bold tracking-tight text-stone-950 sm:text-4xl">
            <Link className="transition-colors hover:text-stone-600" to="/blogs/spring-boot-jsp-intellij">
              Why my Spring Boot JSP worked in the terminal but not in IntelliJ
            </Link>
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-stone-600 sm:text-lg">
            The controller was fine. The difference was the web application structure created by the way the app was launched.
          </p>
          <Link
            className="mt-6 inline-flex text-sm font-semibold text-stone-950 underline decoration-stone-300 underline-offset-4 transition-colors hover:decoration-stone-950"
            to="/blogs/spring-boot-jsp-intellij"
          >
            Read article
          </Link>
        </article>
      </div>
    </section>
  )
}

export { BlogPost }
export default Blogs