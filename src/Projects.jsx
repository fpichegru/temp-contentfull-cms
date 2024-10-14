import { useFetchProject } from "./fetchProjects"


export default function Projects() {

  const{projects , isLoading} = useFetchProject()


  if(isLoading){

    return (
        <section className="projects">
            <h2>Loading...</h2>
        </section>
    )
  }
  

  return (
    <section className="projects">
        <div className="title">
            <h2>Projects</h2>
            <div className="title-underline"></div>
        </div>
        <div className="projects-center">
            {projects.map( (project) =>{

                const{id, url, img ,title} = project
                return (
               
                    <a
                      href={url}
                      target="__blank"
                      rel="noreferrer"
                      className="project"
                    >
                      <img src={img} className="img" alt={title} />
                      <h5 className="">{title}</h5>
                    </a>
                
                );
            })}
           
        </div>
    </section>
  )
}