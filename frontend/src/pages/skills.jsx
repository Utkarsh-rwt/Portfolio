
import { useState,useEffect } from "react";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiVite,
  SiNodedotjs,
  SiExpress,
  SiFastapi,
  SiFlask,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiGithubactions,
  SiGit,
  SiGithub,
  SiLinux,
  SiPostman,
  SiNginx,
  SiRedux,
  SiVercel,
  SiMysql,
  SiRedis,
  SiLeetcode,
  SiCodeforces,
  SiCodechef,
  SiRender
  

  
 
} from "react-icons/si";






 const Skill = ({ icon, name }) => (
  <div className="flex flex-col items-center gap-2 transition-transform duration-300 hover:-translate-y-2 hover:scale-110">
    {icon}
    <span className="text-sm font-medium text-zinc-400">{name}</span>
  </div>
);





const Skills = ()=>{
 
  const PORT= import.meta.env.VITE_BACKEND_PORT;
  

const [leetcodeRating, setLeetcodeRating] = useState(" fetching...")
const [codeforcesRating, setCodeforcesRating] = useState(" fetching...")
const [codechefRating, setCodechefRating] = useState(" fetching...")


useEffect(() => {
  async function fetchRatings() {

      console.log(PORT);
    try {
      const [lc, cf, cc] = await Promise.all([
        fetch(`http://localhost:${PORT}/leetcode/rating/utkarsh-rwt`),
        fetch(`http://localhost:${PORT}/codeforces/rating/utkarshrawat`),
        fetch(`http://localhost:${PORT}/codechef/rating/utkarshrawat`),
      ]);
     
      const leetcode = await lc.json();
      const codeforces = await cf.json();
      const codechef = await cc.json();

      setLeetcodeRating(leetcode.rating);
      setCodeforcesRating(codeforces.rating);
      setCodechefRating(codechef.rating);
    } catch (err) {
      console.error(err);
    }
    

  }

  fetchRatings();
},[]);


 return (


    <div className="mt-25">
    

         <section className="border-t border-slate-200 bg-white  flex  " id="dsa">
        <div className="mx-auto max-w-7.2xl ml-60  px-4 py-14 ">
            <div className="">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
              DSA
            </p>
            <h2 className="mt-3 text-3xl font-semibold">Data Structures & Algorithms</h2>
          </div>

          <div >
            <p className="text-base leading-7 text-slate-600">
              Strengthening problem-solving skills through competitive programming and algorithmic thinking.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
                <div className="mt-4 flex flex-wrap gap-8">

  <a
    href="https://leetcode.com/u/utkarsh-rwt/"
    target="_blank"
    rel="noreferrer"
    className="flex items-center gap-3 rounded-xl border border-slate-200 px-5 py-3 transition hover:border-slate-400"
  >
    <SiLeetcode className="text-3xl text-[#FFA116]" />
    <div>
      <p className="font-semibold">LeetCode</p>
       <p className="text-sm text-slate-500">utkarsh-rwt</p>
      <p className="text-sm text-slate-800">Rating:{leetcodeRating}</p>
    </div>
  </a>

  <a
    href="https://codeforces.com/profile/utkarshrawat"
    target="_blank"
    rel="noreferrer"
    className="flex items-center gap-3 rounded-xl border border-slate-200 px-5 py-3 transition hover:border-slate-400"
  >
    <SiCodeforces className="text-3xl text-[#1F8ACB]" />
    <div>
      <p className="font-semibold">Codeforces</p>
      <p className="text-sm text-slate-500">utkarshrawat</p>
       <p className="text-sm text-slate-800">Rating:{codeforcesRating}</p>
    </div>
  </a>

  <a
    href="https://www.codechef.com/users/utkarshrawat"
    target="_blank"
    rel="noreferrer"
    className="flex items-center gap-3 rounded-xl border border-slate-200 px-5 py-3 transition hover:border-slate-400"
  >
    <SiCodechef className="text-3xl text-[#5B4638]" />
    <div>
      <p className="font-semibold">CodeChef</p>
      <p className="text-sm text-slate-500">utkarshrawat</p>
      <p className="text-sm text-slate-800">Rating:{codechefRating}</p>

    </div>
  </a>

</div>
               
            </div>

            
            
          </div>
        </div>
       
      </section>


      <section className=" border-t border-slate-200 bg-white box-border flex"  id="webdev" > 
        <div className="mx-auto max-w-7.2xl ml-60  px-4 py-14 flex-col ">
            
          <div className="">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
              Web Dev
            </p>
            <h2 className="mt-3 text-3xl font-semibold">Web Development</h2>
          </div>

          <div className="">
            <p className="text-base leading-7 text-slate-600">
              Building modern, and scalable web applications using React, Tailwind CSS, Node.js, Express.js, and MongoDB.
            </p>    
          </div>

           <div className="flex flex-wrap mt-5 gap-8">
  <Skill
    icon={<SiHtml5 className="text-5xl text-[#E34F26]" />}
    name="HTML5"
  />
  <Skill
    icon={<SiCss className="text-5xl text-[#1572B6]" />}
    name="CSS3"
  />
  <Skill
    icon={<SiJavascript className="text-5xl text-[#F7DF1E]" />}
    name="JavaScript"
  />
  <Skill
    icon={<SiTypescript className="text-5xl text-[#3178C6]" />}
    name="TypeScript"
  />
  {/* <Skill
    icon={<SiPython className="text-5xl text-[#3776AB]" />}
    name="Python"
  /> */}

</div>

<div className="flex flex-wrap gap-8 mt-4">
  <Skill icon={<SiReact className="text-5xl text-[#61DAFB]" />} name="React" />
  <Skill icon={<SiTailwindcss className="text-5xl text-[#06B6D4]" />} name="Tailwind CSS" />
  <Skill icon={<SiVite className="text-5xl text-[#646CFF]" />} name="Vite" />
  <Skill icon={<SiRedux className="text-5xl text-[#764ABC]" />} name="Redux" />
</div>

<div className="flex flex-wrap gap-8 mt-4">
  <Skill icon={<SiNodedotjs className="text-5xl text-[#339933]" />} name="Node.js" />
  <Skill icon={<SiExpress className="text-5xl" />} name="Express.js" />
  {/* <Skill icon={<SiFastapi className="text-5xl text-[#009688]" />} name="FastAPI" /> */}
  {/* <Skill icon={<SiFlask className="text-5xl" />} name="Flask" /> */}
</div>

<div className="flex flex-wrap gap-8 mt-4">
  {/* <Skill icon={<SiDocker className="text-5xl text-[#2496ED]" />} name="Docker" /> */}
  <Skill icon={<SiGithubactions className="text-5xl text-[#2088FF]" />} name="GitHub Actions" />
  <Skill icon={<SiGit className="text-5xl text-[#F05032]" />} name="Git" />
  <Skill icon={<SiGithub className="text-5xl" />} name="GitHub" />
  <Skill icon={<SiLinux className="text-5xl text-[#FCC624]" />} name="Linux" />
  {/* <Skill icon={<SiNginx className="text-5xl text-[#009639]" />} name="Nginx" /> */}
  <Skill icon={<SiPostman className="text-5xl text-[#FF6C37]" />} name="Postman" />
  <Skill icon={<SiVercel className="text-5xl" />} name="Vercel" />
  <Skill icon={<SiRender className="text-5xl text-[#46E3B7]" />} name="Render" />
</div>

<div className="flex flex-wrap gap-8 mt-4">
  <Skill icon={<SiMongodb className="text-5xl text-[#47A248]" />} name="MongoDB" />
  {/* <Skill icon={<SiPostgresql className="text-5xl text-[#336791]" />} name="PostgreSQL" /> */}
  {/* <Skill icon={<SiMysql className="text-5xl text-[#4479A1]" />} name="MySQL" /> */}
  {/* <Skill icon={<SiRedis className="text-5xl text-[#DC382D]" />} name="Redis" /> */}
</div>
       
        </div>
      </section>

      <section className=" border-t border-slate-200 bg-slate-50/50 flex " id="ai-ml">
        <div className="mx-auto  max-w-7.2xl ml-60  px-4 py-14 ">
          <div >
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
              System Design
            </p>
            <h2 className="mt-3 text-3xl font-semibold">System Design</h2>
          </div>

          <div >
            <p className="text-base leading-7 text-slate-600">
              Learning scalable architectures, efficient backend systems, API design, caching strategies, and database optimization.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
            
                
            
            </div>
          </div>
        </div>
      </section>

     
      <section className="border-t border-b border-slate-200 bg-slate-50/50" id="sysdesign">
        <div className="mx-auto  max-w-7.2xl ml-60 px-4 py-14 ">
          <div >
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
              AIML
            </p>
            <h2 className="mt-3 text-3xl font-semibold">Artificial Intelligence & Machine Learning</h2>
          </div>

          <div >
            <p className="text-base leading-7 text-slate-600">
              Exploring machine learning concepts, model development, data analysis, and AI-powered applications.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              
             
            </div>
          </div>
        </div>
      </section>
    

    </div>
  )
}

export default Skills;