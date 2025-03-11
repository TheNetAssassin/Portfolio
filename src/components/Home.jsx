import { motion } from "motion/react";

export default function Home(){
   
    return <div className="home" id="home"> 
    <motion.h1  initial={{opacity:0}}
   whileInView={{opacity:1}}  transition= {{ duration: "4" , type:"spring"}}>Hey...!</motion.h1>
    <motion.h3  initial={{opacity:0}}
   whileInView={{opacity:1}}  transition= {{ duration: "4" , type:"spring"}}>I'm a Web Developer</motion.h3>
   <a href="#aboutme"><i class="fa-solid fa-angle-down fa-bounce arrow"></i></a>
    </div>
}