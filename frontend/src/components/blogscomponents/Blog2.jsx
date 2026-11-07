const FlowStep = ({ number, title, children }) => (
  <div className="relative rounded-xl border border-stone-200 bg-white p-4 shadow-sm sm:p-5">
    <span className="mb-3 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#fff4d6] text-xs font-bold text-stone-800">
      {number}
    </span>
    <h3 className="font-semibold text-stone-950">{title}</h3>
    <p className="mt-1 text-sm leading-6 text-stone-600">{children}</p>
  </div>
)

const Blog2 = () => {
  return (
    <article className="mx-auto max-w-5xl px-4 pb-20 pt-8 sm:px-6 sm:pt-14 lg:px-8">
      <header className="border-b border-stone-200 pb-10 sm:pb-14">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">
          <span>Java Web</span>
          <span className="text-stone-300">/</span>
          <span>Servlets</span>
          <span className="text-stone-300">/</span>
          <span>Foundations</span>
        </div>
        <h1 className="mt-6 max-w-4xl text-4xl font-bold tracking-tight text-stone-950 sm:text-6xl sm:leading-[1.05]">
          Before Spring Web: Understanding the Servlet Foundation
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600 sm:text-xl">
          Start at Java’s network layer, then follow the abstractions that lead from a socket to a Spring Web controller.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 text-sm text-stone-500">
          <span className="rounded-full bg-stone-100 px-3 py-1.5">A theory-first guide</span>
          <span className="rounded-full bg-[#fff4d6] px-3 py-1.5">java.net → Servlet → Tomcat → Spring Web</span>
        </div>
      </header>

      <div className="grid gap-12 pt-10 lg:grid-cols-[minmax(0,1fr)_200px] lg:gap-16">
        <div className="min-w-0 space-y-10 text-[1.05rem] leading-8 text-stone-700">
          <section>
            <p>
              The easiest way to understand Spring Web is to build the picture from the bottom up. First, Java can communicate over a network. Then the Servlet API defines how Java web components receive requests. Tomcat implements that Servlet environment, and Spring Web builds a more convenient request-routing model on top.
            </p>
            <p className="mt-5">Each layer addresses a different problem. Keeping them in this order makes it easier to see what Spring adds—and what is still handled by the layers beneath it.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold tracking-tight text-stone-950 sm:text-3xl">Java networking: the starting point</h2>
            <p className="mt-4">A browser does not call a Java method when someone visits a URL. It sends an HTTP message over a network connection. For a Java program to receive network traffic, something must open a port, accept connections, and read bytes. Java’s <code className="rounded bg-stone-100 px-1.5 py-0.5 text-[0.95em] text-stone-950">java.net</code> APIs provide low-level building blocks such as sockets for this kind of communication.</p>
            <p className="mt-5">A socket only gives the program a channel to exchange data. It does not automatically understand HTTP. A hand-built server would have to keep running, parse request lines and headers, read parameters and bodies, distinguish methods, coordinate concurrent clients, and construct valid responses with status codes and headers.</p>
            <p className="mt-5">A socket is therefore a useful starting point, but it leaves a lot of work for every application. One program would need to interpret HTTP and manage connections in its own way, while another would have to solve the same problems again. To move beyond that repetition, Java web applications needed a shared contract between network handling and application code.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold tracking-tight text-stone-950 sm:text-3xl">The Servlet API: a shared contract</h2>
            <p className="mt-4">A Servlet is a Java component designed to handle requests and produce responses within a Servlet environment. Rather than reading raw network bytes, it receives structured request and response objects. The request exposes information such as the path, HTTP method, headers, parameters, and body; the response gives the application a standard way to set output and status.</p>
            <p className="mt-5">The important idea is the contract, not a particular server. The Servlet API describes how web components participate in request handling and lifecycle management. It does not, by itself, open a port or receive a browser connection. A runtime that implements the contract must do that work and call the Servlet.</p>
            <p className="mt-5">This contract also defines who controls the flow. The application supplies a Servlet, while a runtime creates and initializes it, calls it when a matching request arrives, and eventually destroys it. That arrangement is inversion of control: the runtime calls application code at the appropriate time. But an API contract alone cannot accept a browser connection; it still needs a server that implements it.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold tracking-tight text-stone-950 sm:text-3xl">Tomcat: the server that runs Servlets</h2>
            <p className="mt-4">Tomcat is a server and Servlet container. It listens for network traffic, understands HTTP, maps a request to the right web application and Servlet, creates the request and response objects, and manages Servlet lifecycle calls. The Servlet does not listen on port 8080; Tomcat does, then invokes the Servlet when its mapping matches.</p>
            <p className="mt-5">A Servlet container generally reuses a Servlet instance for many requests. Initialization is for setup, request handling occurs repeatedly, and destruction happens when the application is stopped or unloaded. Since requests can arrive concurrently, Servlet code must avoid unsafe shared mutable state.</p>
            <p className="mt-5">So the Servlet API describes the agreement, and Tomcat puts that agreement to work. It accepts the HTTP request, prepares Java request and response objects, then invokes the Servlet mapped to the requested path. The Servlet can now focus on the application’s behavior instead of opening sockets or parsing raw HTTP.</p>

            <h2 className="mt-10 text-2xl font-bold tracking-tight text-stone-950 sm:text-3xl">Spring Web: a higher-level way to handle requests</h2>
            <p className="mt-4">A traditional Servlet application can map different paths to different Servlet classes. As the application grows, each class can repeat input handling, validation, business-logic selection, response formatting, and error handling. Spring Web addresses that next layer of repetition. Through Spring MVC, it keeps the Servlet foundation but adds a routing and application model above it.</p>
            <p className="mt-5">Tomcat calls Spring’s central <strong className="font-semibold text-stone-950">DispatcherServlet</strong>. It consults Spring’s request mappings, selects the matching controller method, and coordinates the result. Controllers express endpoints; Spring handles common web mechanics such as parameter binding and response conversion.</p>
            <p className="mt-5">The browser still does not call a controller directly. It sends HTTP; Tomcat receives it; DispatcherServlet routes it; then Spring calls the controller. Spring Boot can start an embedded Tomcat for convenience, but it does not remove these underlying layers.</p>

            <p className="mt-8">Here is that progression as a request flow, from the network boundary inward:</p>

            <figure className="my-7 rounded-2xl border border-stone-200 bg-stone-50 p-4 sm:p-6">
              <figcaption className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-stone-500">From Java networking to Spring Web</figcaption>
              <div className="grid gap-3 sm:grid-cols-2">
                <FlowStep number="1" title="java.net socket">Provides a network connection for sending and receiving bytes.</FlowStep>
                <FlowStep number="2" title="HTTP server">Interprets those bytes as an HTTP request and accepts connections continuously.</FlowStep>
                <FlowStep number="3" title="Servlet contract">Defines request, response, lifecycle, and how Java web components are invoked.</FlowStep>
                <FlowStep number="4" title="Tomcat container">Implements the contract, maps the request, and calls the configured Servlet.</FlowStep>
                <FlowStep number="5" title="Spring DispatcherServlet">Routes through Spring MVC mappings to the appropriate controller.</FlowStep>
                <FlowStep number="6" title="Controller and response">Application logic runs; the result travels back through Tomcat as HTTP.</FlowStep>
              </div>
              <div className="mt-4 rounded-lg bg-stone-900 px-4 py-3 text-center font-mono text-xs leading-6 text-stone-100 sm:text-sm">
                java.net <span className="text-amber-300">→</span> Servlet API <span className="text-amber-300">→</span> Tomcat <span className="text-amber-300">→</span> Spring Web <span className="text-amber-300">→</span> Controller
              </div>
            </figure>
            <p>The arrows show how each layer builds on the previous one. The request comes from a client and the response returns to it; the application developer usually works near the controller end, while the earlier layers provide the network and web runtime.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold tracking-tight text-stone-950 sm:text-3xl">Where Spring Boot fits</h2>
            <p className="mt-4">In older deployment styles, a web application could be packaged as a WAR and placed into a separately installed Tomcat. Spring Boot commonly packages an embedded server with the application instead. Running the application starts both the Java application and its embedded Tomcat.</p>
            <p className="mt-5">The packaging and startup experience changes, while the underlying ideas remain: Tomcat receives HTTP, the Servlet container manages the Servlet environment, and Spring MVC routes through DispatcherServlet. Boot makes the server easier to launch; it does not make the Servlet foundation disappear.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold tracking-tight text-stone-950 sm:text-3xl">A useful mental model</h2>
            <p className="mt-4">Seen as one progression, each layer removes work from the one above it. Java’s network APIs provide the low-level communication; the Servlet API gives web components a shared request and response contract; Tomcat implements that contract and manages the runtime; Spring Web then routes requests through DispatcherServlet to controllers.</p>
            <p className="mt-5">Once this chain is clear, annotations such as request mappings feel less magical. They describe routing inside Spring MVC, while the server, HTTP handling, and Servlet container continue to provide the foundation underneath.</p>
          </section>
        </div>

        <aside className="hidden lg:block">
          <div className="sticky top-32 border-l border-stone-200 pl-5 text-sm text-stone-500">
            <p className="font-semibold uppercase tracking-[0.16em] text-stone-950">In this post</p>
            <ol className="mt-4 space-y-3 leading-6">
              <li>Java networking</li>
              <li>The Servlet contract</li>
              <li>Tomcat as container</li>
              <li>Spring Web routing</li>
              <li>Where Spring Boot fits</li>
            </ol>
          </div>
        </aside>
      </div>
    </article>
  )
}

export default Blog2
