import {motion } from "motion/react";

export default function Footer(){
    return <footer>
        <motion.p initial={{x : " 250px"}}
   whileInView={{x : "0px"}} transition= {{ duration: "1.5" , type:"spring"}}>Copyright ©{new Date().getFullYear()}TheNetAssassin</motion.p>
    </footer>
}