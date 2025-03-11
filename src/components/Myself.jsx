import { motion } from "motion/react";

export default function Myself(){

    return <motion.div initial={{x : " -800px"}}
   whileInView={{x : "0px"}} transition= {{ duration: "2 " , type:"spring"}} className="aboutme" id="aboutme" >
    <h2>Myself</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tellus urna, pulvinar eu varius non, pulvinar non risus. Aliquam semper porta justo, sed consequat nibh. Quisque vel gravida tortor, vitae lobortis metus. Pellentesque massa leo, porttitor vitae lectus sit amet, vulputate tincidunt nulla. Aliquam sollicitudin condimentum metus vel bibendum. Ut urna lectus, consectetur non sollicitudin vel, maximus at lectus. Nulla cursus risus ut dolor finibus</p>
    </motion.div>
}