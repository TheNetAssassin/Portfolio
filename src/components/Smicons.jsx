import {motion} from "motion/react";

export default function Smicons(props){
   return <motion.li initial={{opacity:0}}
   whileInView={{opacity:1}}  transition= {{ duration: "4" , delay:"0.3" , type:"spring"}}  >
   <a href={"https://www." + props.class +  ".com"} className={props.class}>
     <i className={"fa-brands fa-" + props.class}></i>
     <span className="tooltip">{props.iconName}</span>
   </a>
 </motion.li>
}