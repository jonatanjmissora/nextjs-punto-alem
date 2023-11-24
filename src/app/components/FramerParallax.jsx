"use client"
import Image from "next/image"
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import fotos from "../constant";
import styles from '../styles/FramerParallax.module.css'

export const FramerParallax = ({fotoIndex}) => {


    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start end", "end start"]
    });


  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
 
    return (
        <div className={styles.container}   >
          <div className={styles.wrapper} ref={ref} >
            <motion.div className={styles.image_container} style={{ y}} >
              <Image 
                className={styles.image2} 
                src={fotos[fotoIndex].foto} 
                height="350" 
                alt={fotos[fotoIndex].alt}
                title={fotos[fotoIndex].title}
              />
            </motion.div>
           </div>
        </div>
    )
}



