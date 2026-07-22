
import { AsciiArt } from "../ui/ascii-art"
import asciipic from "../../assets/asciipic.png"
import ContactMe from "./ContactMe"

const About = () => {
	return (

		<div>
		

		<section className="relative mx-auto mt-4 grid w-full grid-cols-1 items-start gap-6 rounded-3xl border border-white bg-[#ffffff] p-3 shadow-xl shadow-stone-200/70 sm:mt-10 sm:gap-8 sm:p-8 lg:mt-15 lg:grid-cols-[minmax(420px,520px)_1fr] lg:items-center lg:gap-10 lg:p-12 ">
           
			<AsciiArt
      src={asciipic}
      resolution={100}
      charset="blocks"
      color="#fffff"
	  inverted		
      animated={false}
			className="mx-auto aspect-square w-full max-w-xs bg-neutral-950 sm:max-w-md lg:mx-auto lg:max-w-130"  />

			<div className="flex flex-col gap-8 text-center lg:mt-0 lg:pr-2 lg:text-left ">
				<div className="mx-auto max-w-2xl lg:mx-0">
					
					<h1 className="mx-auto max-w-3xl text-3xl font-bold tracking-tight text-black sm:text-5xl lg:text-7xl">
						Hi, I'm Utkarsh Rawat CSE student at IIIT Una focused on backend engineering...</h1>
					<p className="mt-5 max-w-2xl text-sm leading-7 text-stone-700 sm:text-base sm:leading-8 lg:text-lg">
						I like turning ideas into working software. Whether it's designing a backend, connecting databases, 
						or building a clean frontend, I enjoy figuring out how all the pieces fit together.
					</p>

					<div className="mt-7 flex flex-wrap justify-center gap-3 lg:justify-start">
						<a
							href="https://github.com/utkarsh-rwt"
							target="_blank"
							rel="noreferrer"
							className="rounded-full border border-stone-300 bg-white px-4 py-2.5 text-sm font-semibold text-black transition hover:border-stone-400 hover:bg-stone-90 sm:px-5 sm:py-3"
						>
						
							GitHub
						</a>
						<a
							href="https://linkedin.com/in/utkarsh-rawat-68a409381"
							target="_blank"
							rel="noreferrer"
							className="rounded-full border border-stone-300 bg-white px-4 py-2.5 text-sm font-semibold text-black transition hover:border-stone-400 hover:bg-stone-90 sm:px-5 sm:py-3"
						>
							LinkedIn
						</a>
						<a
							href="https://x.com/debugomega"
							target="_blank"
							rel="noreferrer"
							className="rounded-full border border-stone-300 bg-white px-4 py-2.5 text-sm font-semibold text-black transition hover:border-stone-400 hover:bg-stone-50 sm:px-5 sm:py-3"
						>
							X
						</a>
						<a
							href="/resume.pdf"
							className="rounded-full border border-stone-300 bg-[#fffaf0] px-4 py-2.5 text-sm font-semibold text-black transition hover:bg-[#f7f0e2] sm:px-5 sm:py-3"
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