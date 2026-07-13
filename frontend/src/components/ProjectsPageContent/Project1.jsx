import React from 'react'
import gitviewsmap from "../../assets/gitviewsmap.png"

const Project1 = () => {
 
      return (
 <div className="overflow-hidden border-2 border-black bg-white">

  {/* Image */}
  <img
    src={gitviewsmap}
    alt="GitViewsMap"
    className="h-52 w-full object-cover border-b-2 border-black"
  />

  {/* Header */}
  <div className="border-b-2 border-black px-5 py-3">
    <h2 className="text-2xl font-bold">
      GitViewsMap
    </h2>

    <p className="mt-1 text-sm text-zinc-500">
      GitHub Analytics Platform
    </p>
  </div>

  

  {/* Content */}
  <div className="space-y-5 px-5 py-5">

    <p className="text-sm leading-7 text-zinc-600">
      GitHub analytics platform that visualizes visitor
      locations and generates dynamic SVG profile badges.
    </p>
    

    <div>
      <p className="mb-2 font-semibold">
        Stack
      </p>

      <div className="flex flex-wrap gap-2">

        {[
          
          "Node",
          "Express",
          "MongoDB",
          "Leaflet",
        ].map((tech) => (
          <span
            key={tech}
            className="border border-black px-2 py-1 text-xs"
          >
            {tech}
          </span>
        ))}

      </div>
    </div>

    <div>
      <p className="mb-2 font-semibold">
        Learnings 
      </p>

    <ul className="space-y-1 text-sm text-zinc-600">
  <li>• Understood how GitHub's Camo proxy affects image requests and caching.</li>
  <li>• Learned to use Morgan for tracking and debugging server requests.</li>
  <li>• Learned to design MongoDB schemas based on application requirements.</li>
  <li>• Learned how to keep Render services active using UptimeRobot.</li>
  <li>• Learned the difference between public and private IP addresses, and why only public IPs can be used for geolocation.</li>
</ul>
    </div>

    <div className="flex gap-3 pt-2">

      <button className="border-2 border-black bg-black px-4 py-2 text-sm text-white hover:bg-white hover:text-black transition">
        GitHub
      </button>

      <button className="border-2 border-black px-4 py-2 text-sm hover:bg-black hover:text-white transition">
        Live Demo
      </button>

    </div>

  </div>

</div>
  );
  
  
}

export default Project1