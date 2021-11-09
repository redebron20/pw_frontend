import React from 'react'
import { useSelector } from 'react-redux'

const ProjectShow = ({ match }) => {

  const projectId = parseInt(match.params.projectId)
  const project = useSelector(state => state.projects[projectId])

  if (!project) {
    return (
      <section>
        <h2>Sorry, we could not find the project you wanted!</h2>
      </section>
    )
  }

  return (
    <div>
        <div className="project-wrapper">

            <div className="project-spot-one">
                <h4 className="project-title">{project.name}</h4> <br />
                <img src={project.image_url} alt= "image" className="project-img"/><br />
            </div>
                
            <div className="project-spot-two">
                <h5>Project Description:</h5>
                {project.description}<br />
            </div>

            <a href={project.github_url} target="_blank" ><img src="https://i.imgur.com/2Tqz4Yn.png" className="repo-button"/></a><br />

            <div>
              <h5>Video Demonstration</h5>
              <iframe width="560" height="315" src={project.demo_vid} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            </div>

        </div>
       
    </div>

  )
}

export default ProjectShow