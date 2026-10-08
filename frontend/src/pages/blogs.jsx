import { Link } from 'react-router-dom'

const Blogs = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-20 pt-8 sm:px-6 sm:pt-14 lg:px-8">
      <header className="flex min-h-[32vh] items-end border-y border-stone-200 py-10 sm:py-14 lg:py-16">
        <h1 className="max-w-none font-mono text-5xl font-bold uppercase tracking-[0.06em] text-stone-950 sm:text-7xl lg:text-8xl">
          engineering-notes
        </h1>
      </header>

      <nav aria-label="Blog posts" className="divide-y divide-stone-200">
        <Link
          className="block py-8 transition-colors hover:bg-stone-50 sm:px-4 sm:py-10"
          to="/blogs/blog1"
        >
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">
            <span>Blog 01</span>
            <span className="text-stone-300">/</span>
            <time dateTime="2026-10-08">October 8, 2026</time>
            <span className="text-stone-300">/</span>
            <span>Spring Boot</span>
            <span className="text-stone-300">/</span>
            <span>JSP</span>
          </div>
          <h2 className="mt-4 max-w-3xl text-2xl font-bold tracking-tight text-stone-950 sm:text-4xl">
            When Spring Boot JSP works with Maven but not IntelliJ IDEA
          </h2>
        </Link>
      </nav>
    </section>
  )
}

export default Blogs
