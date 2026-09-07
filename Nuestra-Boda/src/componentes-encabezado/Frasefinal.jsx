import React from "react";
import { motion } from "framer-motion";

const FraseSeparacion = () => {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-[#787A62]
        px-5
        py-24

        sm:px-8
        sm:py-28

        md:py-32
      "
    >
      {/* GLOW SUPERIOR */}
      <div
        className="
          pointer-events-none
          absolute
          -top-20
          left-1/2
          h-64
          w-64
          -translate-x-1/2
          rounded-full
          bg-[#F6CFC8]/20
          blur-3xl
        "
      />

      {/* GLOW INFERIOR */}
      <div
        className="
          pointer-events-none
          absolute
          -bottom-24
          -right-12
          h-72
          w-72
          rounded-full
          bg-[#969988]/25
          blur-3xl
        "
      />

      {/* LÍNEAS DECORATIVAS LATERALES */}
      <div
        className="
          pointer-events-none
          absolute
          left-5
          top-1/2
          hidden
          h-px
          w-24
          -translate-y-1/2
          bg-[#F6CFC8]/35

          md:block
          lg:left-12
          lg:w-36
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-5
          top-1/2
          hidden
          h-px
          w-24
          -translate-y-1/2
          bg-[#F6CFC8]/35

          md:block
          lg:right-12
          lg:w-36
        "
      />

      <motion.div
        initial={{
          opacity: 0,
          y: 35,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
        viewport={{
          once: true,
          amount: 0.3,
        }}
        className="
          relative
          z-10
          mx-auto
          flex
          w-full
          max-w-5xl
          flex-col
          items-center
          text-center
        "
      >
        {/* ICONO SUPERIOR */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{
            once: true,
          }}
          className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-full
            border
            border-[#F6CFC8]/40
            bg-[#F6CFC8]/10
            text-xl
            text-[#F6CFC8]
            backdrop-blur-sm
          "
        >
          ♥
        </motion.div>

        {/* SEPARADOR */}
        <motion.div
          initial={{
            scaleX: 0,
          }}
          whileInView={{
            scaleX: 1,
          }}
          transition={{
            duration: 0.9,
            delay: 0.15,
          }}
          viewport={{
            once: true,
          }}
          className="
            mt-6
            flex
            w-52
            items-center
            gap-3
          "
        >
          <span className="h-px flex-1 bg-[#F6CFC8]/45" />

          <span className="h-[6px] w-[6px] rotate-45 border border-[#D7A29A]" />

          <span className="h-px flex-1 bg-[#F6CFC8]/45" />
        </motion.div>

        {/* FRASE */}
        <motion.blockquote
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.25,
          }}
          viewport={{
            once: true,
          }}
          className="
            mt-9
            max-w-4xl
            font-playfair
            text-3xl
            font-normal
            leading-[1.45]
            text-[#FFFAFA]

            sm:text-4xl
            sm:leading-[1.5]

            md:text-5xl
            md:leading-[1.45]
          "
        >
          “Será un honor compartir contigo
          <span
            className="
              mx-2
              font-cursiveDancing
              text-[#FFFAFA]
            "
          >
            uno de los momentos
          </span>
          más importantes de nuestra historia”
        </motion.blockquote>

        {/* FIRMA / DETALLE */}
        <motion.p
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.5,
          }}
          viewport={{
            once: true,
          }}
          className="
            mt-8
            font-cursiveDancing
            text-3xl
            text-[#FFFAFA]

            sm:text-4xl
          "
        >
          Ana Karen & Fernando
        </motion.p>

        {/* SEPARADOR INFERIOR */}
        <motion.div
          initial={{
            scaleX: 0,
          }}
          whileInView={{
            scaleX: 1,
          }}
          transition={{
            duration: 0.9,
            delay: 0.65,
          }}
          viewport={{
            once: true,
          }}
          className="
            mt-7
            flex
            w-40
            items-center
            gap-3
          "
        >
          <span className="h-px flex-1 bg-[#F6CFC8]/35" />

          <span className="text-sm text-[#F6CFC8]">❦</span>

          <span className="h-px flex-1 bg-[#F6CFC8]/35" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FraseSeparacion;