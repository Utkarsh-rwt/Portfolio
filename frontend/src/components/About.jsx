const About = () => {
	return (
		<section className="w-full  rounded-3xl border border-stone-200 bg-[#fcfcfc] p-8 shadow-xl shadow-stone-200/70 sm:p-10 lg:p-12 ">
			<div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start mt-12">
				<div>
					
					<h1 className="max-w-3xl text-4xl font-bold tracking-tight text-black sm:text-6xl lg:text-7xl">
						Hi, I&apos;Utkarsh Rawat Passionate about building software that solves real-world problems...
					</h1>
					<p className="mt-6 max-w-2xl text-base leading-8 text-stone-700 sm:text-lg">
						I create clean, responsive websites with React and Tailwind CSS, with focus on
						simple user flows, strong visual hierarchy, and polished interactions. This
						homepage is the place to introduce yourself, show your socials, and give people
						a quick way to open your resume.
					</p>

					<div className="mt-8 flex flex-wrap gap-3">
						<a
							href="https://github.com/utkarsh-rwt"
							target="_blank"
							rel="noreferrer"
							className="rounded-full border border-stone-300 bg-white px-5 py-3 text-sm font-semibold text-black transition hover:border-stone-400 hover:bg-stone-90"
						>
						
							GitHub
						</a>
						<a
							href="https://linkedin.com/in/your-handle"
							target="_blank"
							rel="noreferrer"
							className="rounded-full border border-stone-300 bg-white px-5 py-3 text-sm font-semibold text-black transition hover:border-stone-400 hover:bg-stone-90"
						>
							LinkedIn
						</a>
						<a
							href="https://x.com/your-handle"
							target="_blank"
							rel="noreferrer"
							className="rounded-full border border-stone-300 bg-white px-5 py-3 text-sm font-semibold text-black transition hover:border-stone-400 hover:bg-stone-50"
						>
							X / Twitter
						</a>
						<a
							href="/resume.pdf"
							className="rounded-full border border-stone-300 bg-[#fffaf0] px-5 py-3 text-sm font-semibold text-black transition hover:bg-[#f7f0e2]"
						>
							Resume
						</a>
					</div>

				
				</div>

				
		
						
				
			</div>
		</section>
	)
}

export default About