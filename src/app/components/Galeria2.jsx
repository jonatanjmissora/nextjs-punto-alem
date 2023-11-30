"use client"
import Image from 'next/image'
import fotos from '../constant'
import styles from '../styles/Galeria2.module.css'
import { useRef, useState } from 'react'

export const Galeria2 = () => {

  const [actualPhotoIndex, setActualPhotoIndex] = useState("01")
  // const mainFoto = useRef(null)

  const fotosArray = Object.keys(fotos).sort((a, b) => a.localeCompare(b));
  const half = Math.ceil(fotosArray.length / 2);    

  const leftSideArray = fotosArray.slice(0, half-1)
  const rightSideArray = fotosArray.slice(half)

  return (
    <section className={styles.galery} id="galeria">
      <h3 className={styles.title}>Opcion 2</h3>
      <div className={styles.galery_container}>

        <div className={styles.left_side}>
          {leftSideArray.map(fotoIndex => {
            return <Image 
                      onClick={() => setActualPhotoIndex(fotoIndex)}
                      key={fotoIndex}
                      className={fotoIndex === actualPhotoIndex ? styles.mini_image_selected : styles.mini_image}
                      src={fotos[fotoIndex].src} 
                      title={fotos[fotoIndex].title} 
                      alt={fotos[fotoIndex].alt}
                    />
          })}
        </div>
        
        <div 
          className={styles.principal_image} 
          // ref={mainFoto} 
          >
          <Image 
            key={actualPhotoIndex}
            className={styles.galery_image} 
            src={fotos[actualPhotoIndex].src} 
            title={fotos[actualPhotoIndex].title} 
            alt={fotos[actualPhotoIndex].alt}
          />
        </div>

        <div className={styles.right_side}>
          {rightSideArray.map(fotoIndex => {
            return <Image 
                      onClick={() => setActualPhotoIndex(fotoIndex)}
                      key={fotoIndex}
                      className={fotoIndex === actualPhotoIndex ? styles.mini_image_selected : styles.mini_image}
                      src={fotos[fotoIndex].src} 
                      title={fotos[fotoIndex].title} 
                      alt={fotos[fotoIndex].alt}
                    />
          })}
        </div>

      </div>
    </section>
  )
}
