
import { useState,useEffect } from "react";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
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
  SiSpring,
  SiDocker,
  SiGithubactions,
  SiGit,
  SiGithub,
  SiLinux,
  SiPostman,
  SiNginx,
  SiVercel,
  SiMysql,
  SiRedis,
  SiLeetcode,
  SiCodeforces,
  SiCodechef,
  SiRender
  

  
 
} from "react-icons/si";

import { FaJava } from "react-icons/fa6";
import { Cable, Database, Table2, Workflow } from "lucide-react";






 const Skill = ({ icon, name }) => (
  <div className="group flex min-w-24 flex-col items-center gap-2 rounded-2xl border border-white/80 bg-white/65 px-4 py-3 shadow-[0_8px_22px_rgba(28,25,23,0.1),0_1px_3px_rgba(255,255,255,0.9)_inset] backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:border-white hover:bg-white/80 hover:shadow-[0_14px_30px_rgba(28,25,23,0.15),0_1px_4px_rgba(255,255,255,0.95)_inset]">
    <span className="transition-transform duration-300 group-hover:scale-110">
      {icon}
    </span>
    <span className="text-sm font-medium text-zinc-400">{name}</span>
  </div>
);

const RatingChart = ({ title, points, color }) => {
  const visiblePoints = points.slice(-24);
  if (visiblePoints.length < 2) return null;

  const ratings = visiblePoints.map((point) => point.rating);
  const minimum = Math.min(...ratings);
  const maximum = Math.max(...ratings);
  const range = Math.max(maximum - minimum, 1);
  const coordinates = visiblePoints.map((point, index) => ({
    x: (index / (visiblePoints.length - 1)) * 300,
    y: 92 - ((point.rating - minimum) / range) * 72,
  }));
  const line = coordinates.map(({ x, y }) => `${x},${y}`).join(" ");

  return (
    <div className="w-full max-w-xs rounded-2xl border border-white/80 bg-white/65 p-4 shadow-[0_8px_22px_rgba(28,25,23,0.1),0_1px_3px_rgba(255,255,255,0.9)_inset] backdrop-blur-xl">
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-semibold text-slate-800">{title} history</p>
        <span className="text-xs text-slate-500">{visiblePoints.length} contests</span>
      </div>
      <svg viewBox="0 0 300 110" className="mt-3 h-28 w-full overflow-visible" role="img" aria-label={`${title} rating history`}>
        <line x1="0" y1="92" x2="300" y2="92" stroke="#cbd5e1" strokeWidth="1" />
        <polyline points={line} fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        {coordinates.map(({ x, y }, index) => (
          <circle key={`${visiblePoints[index].label}-${index}`} cx={x} cy={y} r="4" fill={color} />
        ))}
      </svg>
      <div className="flex justify-between text-[11px] text-slate-400">
        <span>{visiblePoints[0].label}</span>
        <span>{visiblePoints[visiblePoints.length - 1].label}</span>
      </div>
    </div>
  );
};

const Skills = ()=>{
 
  const backendUrl = '';
  

const [leetcodeRating, setLeetcodeRating] = useState(" fetching...")
const [codeforcesRating, setCodeforcesRating] = useState(" fetching...")
const [codechefRating, setCodechefRating] = useState(" fetching...")
const [codeforcesHistory, setCodeforcesHistory] = useState([])
const [codechefHistory, setCodechefHistory] = useState([])


useEffect(() => {
  async function fetchRatings() {
    const fetchRating = async (url) => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const data = await response.json();
        if (data.rating == null) {
          throw new Error("Rating was not included in the response");
        }

        return data.rating;
      } catch (err) {
        console.error(`Unable to fetch rating from ${url}:`, err);
        return "Unavailable";
      }
    };

    const [leetcode, codeforces, codechef, codeforcesHistoryData, codechefHistoryData] = await Promise.all([
      fetchRating(`${backendUrl}/leetcode/rating/utkarsh-rwt`),
      fetchRating(`${backendUrl}/codeforces/rating/utkarshrawat`),
      fetchRating(`${backendUrl}/codechef/rating/utkarshrawat`),
      fetchRatingHistory(`${backendUrl}/codeforces/rating-history/utkarshrawat`),
      fetchRatingHistory(`${backendUrl}/codechef/rating-history/utkarshrawat`),
    ]);

    setLeetcodeRating(leetcode);
    setCodeforcesRating(codeforces);
    setCodechefRating(codechef);
    setCodeforcesHistory(codeforcesHistoryData);
    setCodechefHistory(codechefHistoryData);
  }

  async function fetchRatingHistory(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`Request failed with status ${response.status}`);
      const data = await response.json();
      if (!Array.isArray(data)) throw new Error("Rating history was not included in the response");
      return data;
    } catch (err) {
      console.error(`Unable to fetch rating history from ${url}:`, err);
      return [];
    }
  }

  fetchRatings();
},[backendUrl]);


 return (


    <div className="mt-25">
    

         <section className="border-t border-slate-200 bg-white  flex  " id="dsa">
        <div className="mx-auto w-full max-w-7.2xl px-4 py-14 sm:px-6 lg:ml-60 lg:px-0 ">
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

            <div className="mt-6">
                <div className="mt-4 flex flex-wrap gap-8">

  <a
    href="https://leetcode.com/u/utkarsh-rwt/"
    target="_blank"
    rel="noreferrer"
    className="group flex items-center gap-3 rounded-xl border border-white/80 bg-white/65 px-5 py-3 shadow-[0_8px_22px_rgba(28,25,23,0.1),0_1px_3px_rgba(255,255,255,0.9)_inset] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-white hover:bg-white/80 hover:shadow-[0_14px_30px_rgba(28,25,23,0.15),0_1px_4px_rgba(255,255,255,0.95)_inset]"
  >
    <SiLeetcode className="text-3xl text-[#FFA116] transition-transform duration-300 group-hover:scale-110" />
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
    className="group flex items-center gap-3 rounded-xl border border-white/80 bg-white/65 px-5 py-3 shadow-[0_8px_22px_rgba(28,25,23,0.1),0_1px_3px_rgba(255,255,255,0.9)_inset] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-white hover:bg-white/80 hover:shadow-[0_14px_30px_rgba(28,25,23,0.15),0_1px_4px_rgba(255,255,255,0.95)_inset]"
  >
    <SiCodeforces className="text-3xl text-[#1F8ACB] transition-transform duration-300 group-hover:scale-110" />
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
    className="group flex items-center gap-3 rounded-xl border border-white/80 bg-white/65 px-5 py-3 shadow-[0_8px_22px_rgba(28,25,23,0.1),0_1px_3px_rgba(255,255,255,0.9)_inset] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-white hover:bg-white/80 hover:shadow-[0_14px_30px_rgba(28,25,23,0.15),0_1px_4px_rgba(255,255,255,0.95)_inset]"
  >
    <SiCodechef className="text-3xl text-[#5B4638] transition-transform duration-300 group-hover:scale-110" />
    <div>
      <p className="font-semibold">CodeChef</p>
      <p className="text-sm text-slate-500">utkarshrawat</p>
      <p className="text-sm text-slate-800">Rating:{codechefRating}</p>

    </div>
  </a>

                </div>
                <div className="mt-8 grid max-w-2xl gap-4 sm:grid-cols-2">
                  <RatingChart title="Codeforces" points={codeforcesHistory} color="#1F8ACB" />
                  <RatingChart title="CodeChef" points={codechefHistory} color="#8B5E3C" />
                </div>
               
            </div>

            
            
          </div>
        </div>
       
      </section>


      <section className=" border-t border-slate-200 bg-white box-border flex"  id="webdev" > 
        <div className="mx-auto w-full max-w-7.2xl px-4 py-14 sm:px-6 lg:ml-60 lg:px-0 flex-col ">
            
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
    icon={<FaJava className="text-5xl text-[#E76F00]" />}
    name="Java"
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
</div>

<div className="flex flex-wrap gap-8 mt-4">
  <Skill icon={<SiSpring className="text-5xl text-[#6DB33F]" />} name="Spring" />
  <Skill icon={<SiNodedotjs className="text-5xl text-[#339933]" />} name="Node.js" />
  <Skill icon={<SiExpress className="text-5xl" />} name="Express.js" />
  <Skill icon={<Cable className="h-12 w-12 text-[#2563eb]" />} name="JDBC" />
  <Skill icon={<Workflow className="h-12 w-12 text-[#16a34a]" />} name="Spring AOP" />
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
  <Skill icon={<SiPostgresql className="text-5xl text-[#336791]" />} name="PostgreSQL" />
  <Skill icon={<Database className="h-12 w-12 text-[#336791]" />} name="SQL" />
  <Skill icon={<Table2 className="h-12 w-12 text-[#6b7280]" />} name="H2" />
  {/* <Skill icon={<SiMysql className="text-5xl text-[#4479A1]" />} name="MySQL" /> */}
  {/* <Skill icon={<SiRedis className="text-5xl text-[#DC382D]" />} name="Redis" /> */}
</div>

        </div>
      </section>

      <section className=" border-t border-slate-200 bg-slate-50/50 flex " id="ai-ml">
        <div className="mx-auto w-full max-w-7.2xl px-4 py-14 sm:px-6 lg:ml-60 lg:px-0 ">
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
        <div className="mx-auto w-full max-w-7.2xl px-4 py-14 sm:px-6 lg:ml-60 lg:px-0 ">
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
