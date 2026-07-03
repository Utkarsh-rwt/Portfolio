
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




 




const Skills = ()=>{

 

const [leetcodeRating, setLeetcodeRating] = useState(" fetching...")
const [codeforcesRating, setCodeforcesRating] = useState(" fetching...")
const [codechefRating, setCodechefRating] = useState(" fetching...")


useEffect(() => {
  async function fetchRatings() {
    try {
      const [lc, cf, cc] = await Promise.all([
        fetch("http://localhost:5000/leetcode/rating/utkarsh-rwt"),
        fetch("http://localhost:5000/codeforces/rating/utkarshrawat"),
        fetch("http://localhost:5000/codechef/rating/utkarshrawat"),
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
});

 return (
    <div className="mt-25">
    

         <section className="dsa border-t border-slate-200 bg-white  flex  ">
        <div className="mx-auto max-w-7.2xl ml-60 mr-4 px-4 py-14 flex-col   ">
            <div className="">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
              DSA
            </p>
            <h2 className="mt-3 text-3xl font-semibold">Data Structures & Algorithms</h2>
          </div>

          <div className="">
            <p className="text-base leading-7 text-slate-600">
              Strengthening problem-solving skills through competitive programming and algorithmic thinking.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
                <div className="mt-8 flex flex-wrap gap-8">

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



      <section className="webdev border-t border-slate-200 bg-white box-border flex "> 
        <div className="mx-auto max-w-7.2xl ml-60 mr-4 px-4 py-14 flex-col ">
            
          <div className="">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
              Web Dev
            </p>
            <h2 className="mt-3 text-3xl font-semibold">Web Development</h2>
          </div>

          <div className="">
            <p className="text-base leading-7 text-slate-600">
              Building responsive, modern, and scalable web applications using React, Tailwind CSS, Node.js, Express.js, and MongoDB.
            </p>    
          </div>

           <div className="mt-4 flex flex-col gap-3">

                <div className="flex gap-6">
  <SiHtml5 className="text-5xl  text-[#E34F26]" />
  <SiCss className="text-5xl text-[#1572B6]" />
  <SiJavascript className="text-5xl text-[#F7DF1E]" />
  <SiTypescript className="text-5xl text-[#3178C6]" />
  <SiPython className="text-5xl text-[#3776AB]" />
         </div>

         <div className="flex flex-wrap gap-6 text-5xl">
    <SiReact className="text-[#61DAFB]" />
    <SiTailwindcss className="text-[#06B6D4]" />
    <SiVite className="text-[#646CFF]" />
    <SiRedux className="text-[#764ABC]" />
    
       </div>

       
  <div className="flex flex-wrap   gap-6 text-5xl">
    <SiNodedotjs className="text-[#339933]" />
    <SiExpress />
    <SiFastapi className="text-[#009688]" />
    <SiFlask />
    
  </div>

  <div className="flex flex-wrap  gap-6 text-5xl">
  <SiDocker className="text-[#2496ED]" />
  <SiGithubactions className="text-[#2088FF]" />
  <SiGit className="text-[#F05032]" />
  <SiGithub />
  <SiLinux className="text-[#FCC624]" />
  <SiNginx className="text-[#009639]" />
  <SiPostman className="text-[#FF6C37]" />
  <SiVercel />
  <SiRender className="text-[#46E3B7]" />
</div>

 <div className="flex flex-wrap  gap-6 text-5xl">
    <SiMongodb className="text-[#47A248]" />
  <SiPostgresql className="text-[#336791]" />
  <SiMysql className="text-[#4479A1]" />
  <SiRedis className="text-[#DC382D]" />
 </div>

         
            </div>
       
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50/50 flex ">
        <div className="mx-auto flex max-w-6xl flex-col ml-60 gap-8 px-4 py-14 sm:px-6 lg:flex-row lg:px-8">
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

     
      <section className="sysdesign border-t border-b border-slate-200 bg-slate-50/50">
        <div className="mx-auto flex max-w-6xl ml-60 flex-col gap-8 px-4 py-14 sm:px-6 lg:flex-row lg:px-8">
          <div >
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
              AIML
            </p>
            <h2 className="mt-3 text-3xl font-semibold">Artificial Intelligence & Machine Learning</h2>
          </div>

          <div className>
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