import { useState } from "react"
import Cards from "./Cards"
import projectsDetails from "./projectsDetails"
import { motion} from "motion/react";

export default function Projects(){

  const defaultStyle = {
    background: "linear-gradient(135deg, #8BC6EC 10%, #9599E2 90%),url('images/projectsbg.jpg')",
    backgroundAttachment:"fixed",
    backgroundSize: "cover"
  }

  const [isClicked, setClicked] = useState(false);

  const [project, setProject] = useState({
 title : "Discover my coding journey here..!",
  des : "Have done from basic website to advanced sites...",
 url:" ", style:defaultStyle});

  function handleClick(name){
    setClicked(true);
    projectsDetails.filter(project => {
        if(project.name === name) {
          setProject( {title : project.name ,
            des:project.des,
            url:project.url,
            style:project.style
          }
          )
        }
    })

    }

    return <div className="main" id="projects" style={project.style}>
    <motion.h2 initial={{x : " 200px"}}
   whileInView={{x : "0px"}} transition= {{ duration: "1.5" , type:"spring"}}  className="projectheading">Projects</motion.h2>
  <motion.div initial={{x : "-150px"}}
   whileInView={{x : "0px"}} transition= {{ duration: "1.0" , type:"spring"}}  className="card-lg__container" >
    <p className="card__text-sm">{project.title}</p>
    <p className="card__text-md">{project.des}</p>
     {isClicked  && <a href={"https://" +project.url} className="card__btn">Discover Site</a> }
  </motion.div>

  <div className="card-sm__container">

  { projectsDetails.map((project,index) => {
     return <Cards key={index} handleClick={handleClick} style={project.style} url={project.url} name={project.name}  />
  })}

    </div>
    </div>
}