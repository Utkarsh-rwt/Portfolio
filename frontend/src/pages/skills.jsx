const skillSections = [
  {
    title: 'Web Dev',
    description: 'Building responsive, polished interfaces and reliable full-stack experiences.',
    items: ['React', 'Tailwind CSS', 'Vite', 'REST APIs'],
  },
  {
    title: 'System Design',
    description: 'Thinking through scalability, data flow, and durable architecture decisions.',
    items: ['Scalable APIs', 'Caching', 'Load balancing', 'Database design'],
  },
  {
    title: 'DSA',
    description: 'Practicing problem solving with strong fundamentals and efficient code.',
    items: ['Arrays', 'Graphs', 'Dynamic programming', 'Trees'],
  },
  {
    title: 'AIML',
    description: 'Exploring machine learning workflows, model evaluation, and applied AI ideas.',
    items: ['Python', 'Model training', 'Data analysis', 'Prompting'],
  },
]

const Skills = () => {
  return (
    <section className="min-h-screen bg-white text-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">
            Skills
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Four focused areas that shape my work.
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-600">
            A clean white layout keeps the attention on the content while each skill area stretches across the page.
          </p>
        </div>
      </div>

      <div className="border-t border-slate-200">
        {skillSections.map((section, index) => (
          <section
            key={section.title}
            className={`w-full ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}`}
          >
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-14 sm:px-6 lg:flex-row lg:items-start lg:px-8">
              <div className="lg:w-1/3">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
                  {section.title}
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                  {section.title}
                </h2>
              </div>

              <div className="lg:w-2/3">
                <p className="max-w-2xl text-base leading-7 text-slate-600">
                  {section.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  {section.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </section>
  )
}

export default Skills