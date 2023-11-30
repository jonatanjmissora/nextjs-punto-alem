"use client"
import Image from 'next/image'
import fotos from '../constant'
import styles from '../styles/Galeria3.module.css'
import { useState } from 'react'

export const Galeria3 = () => {

  const [actualPhotoIndex, setActualPhotoIndex] = useState("01")

  const fotosArray = Object.keys(fotos).sort((a, b) => a.localeCompare(b));

  return (
    <section className={styles.galery} id="galeria">
      <h3 className={styles.title}>Opcion 3</h3>
      <div className={styles.galery_container}>
        
        <div 
          className={styles.principal_image} 
          >
          <Image 
            key={actualPhotoIndex}
            className={styles.galery_image} 
            src={fotos[actualPhotoIndex].src} 
            title={fotos[actualPhotoIndex].title} 
            alt={fotos[actualPhotoIndex].alt}
          />
        </div>

        <div className={styles.bottom}>
          {fotosArray.map(fotoIndex => {
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
