import Project1 from "@/components/ProjectsPageContent/Project1";
import Project2 from "@/components/ProjectsPageContent/Project2";
import React from 'react'

const Projects = () => {
  return (
    <div className="mt-10 flex flex-col gap-10 px-4 sm:px-6 lg:mt-30 lg:gap-30 lg:px-0 lg:mr-40 lg:ml-40" >
  <Project1/>
  <Project2/>

</div>
  )
}

export default Projects