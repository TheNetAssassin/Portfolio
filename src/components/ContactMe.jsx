import Smicons from "./Smicons.jsx";
import { motion} from "motion/react";

export default function ContactMe(){
    return <motion.div initial={{x : "-800px"}}
   whileInView={{x : "0px"}} transition= {{ duration: "2 " , type:"spring"}} className="contactme" id="contactme">
      <h2>Wanna Stay in Contact</h2>
      <h4>Get in Touch</h4>
      <div className="social-container gradient-style">

  <ul className="social-icons">

  <Smicons class="facebook" iconName="Facebook" />
  <Smicons class="instagram" iconName="Instagram" />
  <Smicons class="twitter" iconName="Twitter" />

  </ul>
   </div>
     </motion.div>
}