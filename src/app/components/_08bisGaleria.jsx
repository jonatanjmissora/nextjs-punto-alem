"use client"

import Image from 'next/image'
import fotos from '../constant'
import styles from '../styles/_08bisGaleria.module.css'
import { ChevronCompactLeftSvg, ChevronCompactRightSvg, CloseSvg, ExpandSvg } from '../assets/icons/Svg'
import { useRef, useState } from 'react'
import { SearchParamsContext } from 'next/dist/shared/lib/hooks-client-context.shared-runtime'

export const _08bisGaleria = () => {

  const [actualPhotoIndex, setActualPhotoIndex] = useState(0)
  const [showBig, setShowBig] = useState(false)
  const mainFoto = useRef(null)

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

  const toggleBig = () => {
    setShowBig(prev => !prev);
    if (showBig) {
      mainFoto.current.dataset.expand = true;
    } else {
      mainFoto.current.dataset.expand = false;
    }
  }

  return (
    <section className={styles.galery}>

      <div className={styles.galery_container}>

        <div className={styles.sec_image}>

          <i className={styles.icon_container_left} onClick={() => handleClick("left")}><ChevronCompactLeftSvg /></i>
          <Image 
            className={styles.galery_image_op} 
            onClick={() => handleClick("left")}
            src={fotos[fotosArray[getBeforeIndex(actualPhotoIndex)]].src} 
            title={fotos[fotosArray[getBeforeIndex(actualPhotoIndex)]].title} 
            alt={fotos[fotosArray[getBeforeIndex(actualPhotoIndex)]].alt}
        />
        </div>

        <div className={styles.principal_image} ref={mainFoto}>
          {showBig
            ? <i className={styles.icon_container_expand} onClick={toggleBig}><ExpandSvg /></i>
            : <i className={styles.icon_container_close} onClick={toggleBig}><CloseSvg /></i>
          }

          <Image 
            className={styles.galery_image} 
            src={fotos[fotosArray[actualPhotoIndex]].src} 
            title={fotos[fotosArray[actualPhotoIndex]].title} 
            alt={fotos[fotosArray[actualPhotoIndex]].alt}
          />
        </div>

        <div className={styles.sec_image}>

          <i className={styles.icon_container_right} onClick={() => handleClick("right")}><ChevronCompactRightSvg /></i>
          <Image 
            className={styles.galery_image_op} 
            onClick={() => handleClick("right")}
            src={fotos[fotosArray[getAfterIndex(actualPhotoIndex)]].src} 
            title={fotos[fotosArray[getAfterIndex(actualPhotoIndex)]].title} 
            alt={fotos[fotosArray[getAfterIndex(actualPhotoIndex)]].alt}
          />
        </div>

{/* 
        <div className={styles.fake_foto}></div>

        <Image 
          className={styles.galery_image_op} 
          onClick={() => handleClick("left")}
          src={fotos[fotosArray[getBeforeIndex(actualPhotoIndex)]].src} 
          title={fotos[fotosArray[getBeforeIndex(actualPhotoIndex)]].title} 
          alt={fotos[fotosArray[getBeforeIndex(actualPhotoIndex)]].alt}
        />

        <div className={styles.principal_image}>
          <i className={styles.icon_container} onClick={() => handleClick("left")}><ChevronCompactLeftSvg /></i>
          <Image 
            className={styles.galery_image} 
            src={fotos[fotosArray[actualPhotoIndex]].src} 
            title={fotos[fotosArray[actualPhotoIndex]].title} 
            alt={fotos[fotosArray[actualPhotoIndex]].alt}
          />
          <i className={styles.icon_container} onClick={() => handleClick("right")}><ChevronCompactRightSvg /></i>
        </div>

        <Image 
          className={styles.galery_image_op} 
          onClick={() => handleClick("right")}
          src={fotos[fotosArray[getAfterIndex(actualPhotoIndex)]].src} 
          title={fotos[fotosArray[getAfterIndex(actualPhotoIndex)]].title} 
          alt={fotos[fotosArray[getAfterIndex(actualPhotoIndex)]].alt}
        />

        <div className={styles.fake_foto}></div> */}

      </div>
    </section>
  )
}
