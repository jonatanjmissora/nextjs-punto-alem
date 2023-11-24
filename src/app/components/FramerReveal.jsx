"use client"
import {useRef} from "react"
import {useInView} from "framer-motion"

export const FramerReveal = ({children, className, options}) => {

    const ref = useRef(null)
    
    const amount = options.amount || "100";
    const margin = options.margin || "-100";
    const delay = options.delay || "0";
    const duration = options.duration || "1";
    const tag = options.tag || "div";

    const isInView = useInView(
      ref,
      {
        once: true,
        margin: `${margin}px`
    }

      )


    const translate = (from) => {
        if(from === "left") return `translateX(-${amount}px)`
        if(from === "right") return `translateX(${amount}px)`
        if(from === "top") return `translateY(-${amount}px)`
        if(from === "bottom") return `translateY(${amount}px)`
        if(from === "none") return `translateX(0px)`
    }
    const transition = `all ${duration}s ease ${delay}s`


    return (
        <>
            {tag === "div" 
               ? (<div
                className={className}
                ref={ref}
                style={{
                    transform: isInView ? "none" : translate(options.from),
                    opacity: isInView ? 1 : 0,
                    transition: transition
                }}
                >
                {children}
            </div>)
            : (<header
                className={className}
                ref={ref}
                style={{
                    transform: isInView ? "none" : translate(options.from),
                    opacity: isInView ? 1 : 0,
                    transition: transition
                }}
                >
                {children}
            </header>

            )
            }
        </>
    )
}