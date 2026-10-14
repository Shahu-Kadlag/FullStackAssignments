"use client"
import { motion, useScroll, useTransform } from 'framer-motion'
import { ReactNode, useRef } from 'react'

export function FadeIn({ children, delay = 0, className = "" }: { children: ReactNode, delay?: number, className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function ParallaxHero({ children, bgImage }: { children: ReactNode, bgImage: string }) {
  const ref = useRef(null)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 1000], [0, 300])
  const opacity = useTransform(scrollY, [0, 600], [1, 0])

  return (
    <div ref={ref} className="relative overflow-hidden w-full min-h-[90vh] flex items-center justify-center bg-offwhite">
        <motion.div
            style={{ y, opacity }}
            className="absolute inset-0 z-0 origin-top"
        >
            <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/80 to-offwhite z-10"></div>
            <motion.img
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
                src={bgImage}
                className="w-full h-full object-cover opacity-50"
                alt="Agricultural Landscape"
            />
        </motion.div>
        <div className="relative z-20 w-full">
            {children}
        </div>
    </div>
  )
}
