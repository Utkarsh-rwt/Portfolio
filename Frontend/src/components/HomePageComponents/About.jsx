
import { AsciiArt } from "./../ui/ascii-art"
import asciipic from "../../assets/asciipic.png"
import ContactMe from "./ContactMe"

const About = () => {
	return (

		<div>
		

		<section className="w-full top-30  h-full flex items-center rounded-3xl border border-white bg-[#ffffff] p-8 shadow-xl shadow-stone-200/70 sm:p-10 lg:p-12  relative ">
           
              <AsciiArt
      src={asciipic}
      resolution={100}
      charset="blocks"
      color="#0"
	  inverted
      animated={false}
      className="mx-auto aspect-square w-full max-w-lg bg-neutral-950"  />

			<div className="flex gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start mt-12 ">
				<div>
					
					<h1 className="max-w-3xl text-4xl font-bold tracking-tight text-black sm:text-6xl lg:text-7xl">
						Hi, I'm Utkarsh Rawat Software Engineer focused on backend engineering...</h1>
					<p className="mt-6 max-w-2xl text-base leading-8 text-stone-700 sm:text-lg">
						I like turning ideas into working software. Whether it's designing a backend, connecting databases, 
						or building a clean frontend, I enjoy figuring out how all the pieces fit together.
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
							href="https://linkedin.com/in/utkarsh-rawat-68a409381"
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
							X
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


		 <ContactMe></ContactMe>
				
	     </div>
	)
}

export default About