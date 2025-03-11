import {motion} from "motion/react";

export default function Cards(props){
    return  <motion.section  initial={{y : " 180px"}}
   whileInView={{y : "-10px"}}  transition= {{ duration: "0.9" , type:"spring"}}  onClick={() => props.handleClick(props.name)} className="card-sm" style={props.style}>
    <p className="card__text-sm">{props.url}</p>
    <h4 className="card__text-lg" >{props.name}</h4>
  </motion.section>
}