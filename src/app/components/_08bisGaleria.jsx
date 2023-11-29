"use client"
import Image from 'next/image'
import fotos from '../constant'
import styles from '../styles/_08bisGaleria.module.css'
import { ChevronCompactLeftSvg, ChevronCompactRightSvg, CloseSvg, ExpandSvg } from '../assets/icons/Svg'
import { useRef, useState } from 'react'

export const _08bisGaleria = () => {

  const [actualPhotoIndex, setActualPhotoIndex] = useState(0)
  // const mainFoto = useRef(null)

  const fotosArray = Object.keys(fotos).sort((a, b) => a.localeCompare(b));

  const getBeforeIndex = (index) => {
    return index === 0 ? fotosArray.length - 1 : index - 1
  }
  const getAfterIndex = (index) => {
    return index === fotosArray.length - 1 ? 0 : index + 1
    }

  const handleClick = (direction) => {
    if(direction === "left") {
      setActualPhotoIndex(prev => getBeforeIndex(prev))
      } else {
        setActualPhotoIndex(prev => getAfterIndex(prev))
      }
  }

  return (
    <section className={styles.galery}>
      <h3 className={styles.title}  id="galeria">Galería</h3>
      <div className={styles.galery_container}>

        <div className={styles.sec_image}>
          <Image 
            className={styles.galery_image_op} 
            onClick={() => handleClick("left")}
            src={fotos[fotosArray[getBeforeIndex(actualPhotoIndex)]].src} 
            title={fotos[fotosArray[getBeforeIndex(actualPhotoIndex)]].title} 
            alt={fotos[fotosArray[getBeforeIndex(actualPhotoIndex)]].alt}
        />
        </div>
        
        <div 
          className={styles.principal_image} 
          // ref={mainFoto} 
          >
          <i className={styles.icon_container_left} onClick={() => handleClick("left")}><ChevronCompactLeftSvg /></i>
          <Image 
            key={actualPhotoIndex}
            className={styles.galery_image} 
            src={fotos[fotosArray[actualPhotoIndex]].src} 
            title={fotos[fotosArray[actualPhotoIndex]].title} 
            alt={fotos[fotosArray[actualPhotoIndex]].alt}
          />
          <i className={styles.icon_container_right} onClick={() => handleClick("right")}><ChevronCompactRightSvg /></i>
        </div>

        <div className={styles.sec_image}>
          <Image 
            className={styles.galery_image_op} 
            onClick={() => handleClick("right")}
            src={fotos[fotosArray[getAfterIndex(actualPhotoIndex)]].src} 
            title={fotos[fotosArray[getAfterIndex(actualPhotoIndex)]].title} 
            alt={fotos[fotosArray[getAfterIndex(actualPhotoIndex)]].alt}
          />
        </div>

      </div>
    </section>
  )
}
