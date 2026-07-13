import React from 'react'
import gitviewsmap from "../../assets/gitviewsmap.png"

const Project1 = () => {
 
      return (
  <div className="flex flex-col md:flex-row bg-white overflow-hidden ">

    {/* Left Image */}
    <div className="md:w-2/5">
      <img
        src={gitviewsmap}
        alt="GitViewsMap"
        className="w-full h-full object-cover md:min-h-105 rounded-sm "
      />
    </div>

    {/* Right Content */}
    <div className="md:w-3/5 flex flex-col">

      {/* Header */}
      <div className=" px-6 py-1 mt-2">
        <h2 className="text-3xl font-bold">
          GitViewsMap
        </h2>

        <p className="text-zinc-500 mt-1">
          GitHub Analytics Platform
        </p>

        <p className="mt-5 text-zinc-700 leading-7">
          GitViewsMap is a GitHub analytics platform that generates
          dynamic SVG badges while visualizing visitor locations on an
          interactive world map using IP-based geolocation.
        </p>
      </div>

      {/* Stack */}
      <div className=" px-6 py-1">
        <h3 className="font-bold text-lg mb-3">
          Tech Stack
        </h3>

        <div className="flex flex-wrap gap-3">
          {["Node.js", "Express", "MongoDB", "Leaflet"].map((tech) => (
            <span
              key={tech}
              className="border border-black px-3 py-1 text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Learnings */}
      <div className="flex-1 px-6 py-1">
        <h3 className="font-bold text-lg mb-3">
          Learnings
        </h3>

        <ul className="space-y-2 text-zinc-700">
          <li>• Understood how GitHub's Camo proxy affects image requests and caching.</li> 
          <li>• Learned to use Morgan for tracking and debugging server requests.</li> 
          <li>• Learned to design MongoDB schemas based on application requirements.</li>
           <li>• Learned how to keep Render services active using UptimeRobot.</li> 
           <li>• Learned the difference between public and private IP addresses</li> and why only public IPs can be used for geolocation.
        </ul>
      </div>
      <div className="flex-1 px-6 py-1 mb-3">
        <h3 className="font-bold text-lg ">
          More
        </h3>
        <p>Got 10 users as per now and 200+ unique visits count of users </p>
        
      </div>

      {/* Buttons */}
      <div className="px-6 py-1 flex gap-4 mb-1">
        <button className="border-2 border-black bg-black text-white px-5 py-2 hover:bg-white hover:text-black transition">
          GitHub
        </button>

        <button className="border-2 border-black px-5 py-2 hover:bg-black hover:text-white transition">
          Live Demo
        </button>
      </div>

    </div>

  </div>
);
  
  
}

export default Project1