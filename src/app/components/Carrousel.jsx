'use client'

import foto11 from '../assets/foto_1_1.jpg'
import foto14 from '../assets/foto_1_4.jpg'
import foto15 from '../assets/foto_1_5.jpg'
import foto16 from '../assets/foto_1_6.jpg'
import foto17 from '../assets/foto_1_7.jpg'

import foto41 from '../assets/foto_4_1.jpg'
import foto42 from '../assets/foto_4_2.jpg'

import foto51 from '../assets/foto_5_1.jpg'
import foto52 from '../assets/foto_5_2.jpg'
import foto53 from '../assets/foto_5_3.jpg'
import foto54 from '../assets/foto_5_4.jpg'

import foto71 from '../assets/foto_7_1.jpg'
import foto72 from '../assets/foto_7_2.jpg'
import foto73 from '../assets/foto_7_3.jpg'
import foto74 from '../assets/foto_7_4.jpg'
import foto75 from '../assets/foto_7_5.jpg'
import foto76 from '../assets/foto_7_6.jpg'

import foto101 from '../assets/foto_10_1.jpg'
import foto102 from '../assets/foto_10_2.jpg'

import styles from '../styles/Carrousel.module.css'
import { ChevronRightSvg } from '../assets/icons/Svg'
import { useState } from 'react'
import Image from 'next/image'

export const Carrousel = ({ category, width, height, index }) => {
  const [actualIndex, setActualIndex] = useState(index)

  const images = {
    foto1: [foto11, foto14, foto15, foto16, foto17],
    foto2: [foto11, foto14, foto15, foto16, foto17],
    foto3: [foto11, foto14, foto15, foto16, foto17],
    foto4: [foto41, foto42],
    foto5: [foto51, foto52, foto53, foto54],
    foto6: [foto51, foto52, foto53, foto54],
    foto7: [foto71, foto72, foto73, foto74, foto75, foto76],
    foto8: [foto71, foto72, foto73, foto74, foto75, foto76],
    foto9: [foto71, foto72, foto73, foto74, foto75, foto76],
    foto10: [foto101, foto102],
    foto11: [foto51, foto52, foto53, foto54],
    foto12: [foto11, foto14, foto15, foto16, foto17]
  }

  const handleClick = () => {
    const maxIndex = images[category].length - 1
    const nextIndex = actualIndex + 1 > maxIndex ? 0 : actualIndex + 1
    setActualIndex(nextIndex)
  }

  const imageContainerStyles = {
    width: `${width}`,
    height: `${height}`,
    position: 'relative'
  }

  const specialFotos = ['foto4', 'foto6', 'foto11']
  const shortFotos = ['foto8', 'foto9', 'foto10']

  const setHeight = () => {
    if (specialFotos.includes(category)) return '70vh'
    if (shortFotos.includes(category)) return '35vh'
    return '55vh'
  }

  const imageContainerFullStyles = {
    width: '100%',
    height: setHeight(),
    position: 'relative'
  }

  return (
    <div style={window.innerWidth > 720 ? imageContainerStyles : imageContainerFullStyles} className={styles.image_container}>
      <Image className={styles.image} src={images[category][actualIndex]} alt="imagen del hero" loading="lazy"/>
      <span className={styles.chevron} onClick={handleClick}><ChevronRightSvg /></span>
    </div>
  )
}
