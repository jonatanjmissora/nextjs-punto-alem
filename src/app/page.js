"use client"
import Lenis from '@studio-freight/lenis'

import { _02Hero } from './components/_02Hero'
import { _03Description } from './components/_03Description'
import { _04Nosotros } from './components/_04Nosotros'
import { _05Sociales } from './components/_05Sociales'
import { _06Corporativos } from './components/_06Corporativos'
import { _07Exclusivos } from './components/_07Exclusivos'
import { _08Catering } from './components/_08Catering'
import { _08bisGaleria } from './components/_08bisGaleria'
import { _09Contacto } from './components/_09Contacto'
import { useEffect } from 'react'

export default function Home() {

  useEffect(() => {


    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      direction: "vertical", // vertical, horizontal
      gestureDirection: "vertical", // vertical, horizontal, both
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false
    })


    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }


    requestAnimationFrame(raf)
  }, [])


  return (
    <main>
      <_02Hero />
      <_03Description />
      <_04Nosotros />
      <_05Sociales />
      <_06Corporativos />
      <_07Exclusivos />
      <_08Catering />
      <_09Contacto />
    </main>
  )
}
