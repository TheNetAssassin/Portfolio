import {motion } from "motion/react";

export default function Footer(){
    return <footer>
        <motion.p initial={{x : " 800px"}}
   whileInView={{x : "0px"}} transition= {{ duration: "2 " , type:"spring"}}>Copyright ©{new Date().getFullYear()}TheNetAssassin</motion.p>
    </footer>
}