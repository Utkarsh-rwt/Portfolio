
import portfolio from "../../assets/portfolio.png";

const Project2 = () => {
  return (
    <div className="flex flex-col md:flex-row bg-white overflow-hidden">

      {/* Left Image */}
      <div className="md:w-2/5">
        <img
          src={portfolio}
          alt="Portfolio Website"
          className="w-full h-full object-cover md:min-h-105 rounded-sm"
        />
      </div>

      {/* Right Content */}
      <div className="md:w-3/5 flex flex-col">

        {/* Header */}
        <div className="px-6 py-1 mt-2">
          <h2 className="text-3xl font-bold">
            Developer Portfolio
          </h2>

          <p className="text-zinc-500 mt-1">
            Personal Portfolio Website
          </p>

          <p className="mt-5 text-zinc-700 leading-7">
            A responsive portfolio showcasing my projects, technical skills,
            competitive programming profiles, and experience. Designed with a
            minimal aesthetic and smooth user interactions to highlight my work
            as a full-stack developer.
          </p>
        </div>

        {/* Stack */}
        <div className="px-6 py-1">
          <h3 className="font-bold text-lg mb-3">
            Tech Stack
          </h3>

          <div className="flex flex-wrap gap-3">
            {[
              "React",
              "Vite",
              "Tailwind CSS",
              "JavaScript",
              "React Icons",
            ].map((tech) => (
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
            <ul className="space-y-2 text-zinc-700">
  <li>• Explored modern React UI components and layout patterns.</li>
  <li>• Learned the fundamentals of CORS and browser security policies.</li>
  <li>• Explored webpage parsing while fetching CodeChef profile data.</li>
  <li>• Understood how Vite securely injects environment variables into the browser.</li>
  <li>• Learned the execution sequence of Express middleware and Morgan logging.</li>
</ul>
          </ul>
        </div>

        {/* More */}
        <div className="flex-1 px-6 py-1 mb-3">
          <h3 className="font-bold text-lg">
            More
          </h3>

          <p>
            Features responsive design, project showcase, skills section,
            competitive programming profiles, and direct links to GitHub,
            LinkedIn, and live projects.
          </p>
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
};

export default Project2;