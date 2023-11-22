"use client"
import {useRef} from "react"
import {useInView} from "framer-motion"


export const FramerReveal = ({children, className, options}) => {


    const ref = useRef(null)
    const isInView = useInView(
      ref,
      {
        once: true,
        margin: "-60px"
    }

      )


    const translate = (from) => {
        if(from === "left") return `translateX(-${amount}px)`
        if(from === "right") return `translateX(${amount}px)`
        if(from === "top") return `translateY(-${amount}px)`
        if(from === "bottom") return `translateY(${amount}px)`
        if(from === "none") return `translateX(0px)`
    }
    const amount = options.amount || 100;
    const transition = `all 1s ease ${options.delay}s`


    return (
        <div
           className={className}
           ref={ref}
           style={{
               transform: isInView ? "none" : translate(options.from),
                opacity: isInView ? 1 : 0,
                transition: transition
            }}
        >
            {children}
        </div>
    )
}