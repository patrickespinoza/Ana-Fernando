import React from "react";
import { motion } from "framer-motion";

export default function Portada() {
  return (
    <section
      className="
        relative
        isolate
        min-h-[100svh]
        w-full
        overflow-hidden
        bg-[#FFFAFA]
      "
    >
      {/* =========================================
          IMAGEN DE PORTADA
      ========================================= */}
      <img
        src="/Portada.jpeg"
        alt="Ana Karen y Fernando"
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          object-center
        "
      />

      {/* =========================================
          DEGRADADO INFERIOR
          Solo oscurece donde estarán los nombres
      ========================================= */}
      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          h-[42%]
          bg-gradient-to-t
          from-[#62644F]/95
          via-[#787A62]/65
          via-55%
          to-transparent
        "
      />

      {/* Toque blush muy sutil */}
      <div
        className="
          pointer-events-none
          absolute
          -bottom-24
          -right-20
          h-72
          w-72
          rounded-full
          bg-[#D7A29A]/20
          blur-[90px]
        "
      />

      {/* =========================================
          MARCO FINO
      ========================================= */}
      <div
        className="
          pointer-events-none
          absolute
          inset-4
          z-10
          rounded-[2rem]
          border
          border-white/35

          sm:inset-7
          sm:rounded-[2.5rem]
        "
      />

      {/* =========================================
          NOMBRES Y FECHA
      ========================================= */}
      <div
        className="
          absolute
          inset-x-0
          bottom-0
          z-20
          flex
          justify-center
          px-6
          pb-12

          sm:pb-16
          md:pb-20
        "
      >
        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            w-full
            max-w-3xl
            text-center
          "
        >
          {/* Ornamento */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              duration: 1,
              delay: 0.3,
            }}
            className="
              mx-auto
              mb-5
              flex
              w-36
              items-center
              gap-3

              sm:w-44
            "
          >
            <span className="h-px flex-1 bg-[#F6CFC8]/70" />

            <span
              className="
                h-[5px]
                w-[5px]
                rotate-45
                bg-[#F6CFC8]
              "
            />

            <span className="h-px flex-1 bg-[#F6CFC8]/70" />
          </motion.div>

          {/* ANA KAREN */}
          <motion.h1
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.4,
            }}
            className="
              font-playfair
              text-[42px]
              font-normal
              leading-[0.95]
              tracking-[-0.025em]
              text-white
              drop-shadow-[0_3px_12px_rgba(0,0,0,0.35)]

              sm:text-6xl
              md:text-7xl
              lg:text-8xl
            "
          >
            Ana Karen
          </motion.h1>

          {/* & */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.7,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
              delay: 0.6,
            }}
            className="
              -my-1
              font-cursiveDancing
              text-4xl
              leading-none
              text-[#F6CFC8]
              drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)]

              sm:text-5xl
              md:text-6xl
            "
          >
            &
          </motion.div>

          {/* FERNANDO */}
          <motion.h1
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.7,
            }}
            className="
              font-playfair
              text-[42px]
              font-normal
              leading-[0.95]
              tracking-[-0.025em]
              text-white
              drop-shadow-[0_3px_12px_rgba(0,0,0,0.35)]

              sm:text-6xl
              md:text-7xl
              lg:text-8xl
            "
          >
            Fernando
          </motion.h1>

          {/* FECHA */}
          <motion.div
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.9,
            }}
            className="
              mt-6
              flex
              items-center
              justify-center
              gap-4

              sm:mt-7
              sm:gap-6
            "
          >
            <span
              className="
                h-px
                w-10
                bg-white/50

                sm:w-16
              "
            />

            <p
              className="
                whitespace-nowrap
                font-playfair
                text-[12px]
                tracking-[0.3em]
                text-white

                sm:text-sm
                sm:tracking-[0.4em]
              "
            >
              10 · OCTUBRE · 2026
            </p>

            <span
              className="
                h-px
                w-10
                bg-white/50

                sm:w-16
              "
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}