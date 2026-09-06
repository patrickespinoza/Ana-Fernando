import React from "react";
import { motion } from "framer-motion";

const Novios = () => {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-[#FFFAFA]
        px-5
        py-20

        sm:px-8
        sm:py-24

        md:py-28
      "
    >
      {/* Decoración superior izquierda */}
      <div
        className="
          absolute
          -left-16
          -top-16
          h-44
          w-44
          rounded-full
          bg-[#F6CFC8]/35
          blur-3xl
        "
      />

      {/* Decoración inferior derecha */}
      <div
        className="
          absolute
          -bottom-20
          -right-16
          h-52
          w-52
          rounded-full
          bg-[#969988]/30
          blur-3xl
        "
      />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-5xl
          text-center
        "
      >
        {/* Encabezado */}
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.35em" }}
          whileInView={{ opacity: 1, letterSpacing: "0.22em" }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="
            text-[11px]
            font-medium
            uppercase
            tracking-[0.22em]
            text-[#787A62]

            sm:text-xs
          "
        >
          Con la bendición de nuestros padres
        </motion.p>

        {/* Separador */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          viewport={{ once: true }}
          className="
            mx-auto
            mt-5
            flex
            max-w-[240px]
            items-center
            justify-center
            gap-3
          "
        >
          <div className="h-px flex-1 bg-[#D7A29A]/60" />

          <span className="text-lg text-[#D7A29A]">♥</span>

          <div className="h-px flex-1 bg-[#D7A29A]/60" />
        </motion.div>

        {/* Nombres de los novios */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.25 }}
          viewport={{ once: true }}
          className="mt-8"
        >
          <h1
            className="
              font-playfair
              text-4xl
              font-normal
              leading-tight
              text-[#292929]

              sm:text-5xl
              md:text-6xl
            "
          >
            Ana Karen
          </h1>

          <p
            className="
              my-2
              font-[DancingScript]
              text-5xl
              font-normal
              text-[#D7A29A]

              sm:text-6xl
            "
          >
            &
          </p>

          <h1
            className="
              font-playfair
              text-4xl
              font-normal
              leading-tight
              text-[#292929]

              sm:text-5xl
              md:text-6xl
            "
          >
            Fernando
          </h1>
        </motion.div>

        {/* Texto secundario */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.45 }}
          viewport={{ once: true }}
          className="
            mx-auto
            mt-8
            max-w-xl
            font-[DancingScript]
            text-2xl
            leading-relaxed
            text-[#787A62]

            sm:text-3xl
          "
        >
          Hoy celebramos nuestro amor acompañados de quienes nos dieron la vida
          y nos enseñaron a amar.
        </motion.p>

        {/* Tarjetas Padres */}
        <div
          className="
            mt-14
            grid
            grid-cols-1
            gap-6

            md:grid-cols-2
            md:gap-8
          "
        >
          {/* Padres del novio */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="
              relative
              overflow-hidden
              rounded-[2rem]
              bg-[#969988]
              px-7
              py-10
              shadow-[0_18px_45px_rgba(120,122,98,0.16)]

              sm:px-10
              sm:py-12
            "
          >
            {/* detalle decorativo */}
            <div
              className="
                absolute
                -right-10
                -top-10
                h-32
                w-32
                rounded-full
                bg-white/10
              "
            />

            <div className="relative z-10">
              <div
                className="
                  mx-auto
                  mb-5
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  bg-[#FFFAFA]/80
                  text-xl
                  text-[#787A62]
                "
              >
                ❦
              </div>

              <h2
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-[#FFFAFA]

                  sm:text-sm
                "
              >
                Padres del Novio
              </h2>

              <div
                className="
                  mx-auto
                  my-6
                  h-px
                  w-16
                  bg-[#FFFAFA]/40
                "
              />

              <p
                className="
                  font-playfair
                  text-xl
                  leading-relaxed
                  text-white

                  sm:text-2xl
                "
              >
                Dimas Manuel Nicanor
              </p>

              <p
                className="
                  mt-3
                  font-playfair
                  text-xl
                  leading-relaxed
                  text-white

                  sm:text-2xl
                "
              >
                Nicolasa Patiño Martinez
              </p>
            </div>
          </motion.div>

          {/* Padres de la novia */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.65 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="
              relative
              overflow-hidden
              rounded-[2rem]
              bg-[#F6CFC8]
              px-7
              py-10
              shadow-[0_18px_45px_rgba(215,162,154,0.18)]

              sm:px-10
              sm:py-12
            "
          >
            {/* detalle decorativo */}
            <div
              className="
                absolute
                -left-10
                -bottom-10
                h-32
                w-32
                rounded-full
                bg-white/20
              "
            />

            <div className="relative z-10">
              <div
                className="
                  mx-auto
                  mb-5
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  bg-[#FFFAFA]/80
                  text-xl
                  text-[#D7A29A]
                "
              >
                ❦
              </div>

              <h2
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-[#787A62]

                  sm:text-sm
                "
              >
                Padres de la Novia
              </h2>

              <div
                className="
                  mx-auto
                  my-6
                  h-px
                  w-16
                  bg-[#787A62]/30
                "
              />

              <p
                className="
                  font-playfair
                  text-xl
                  leading-relaxed
                  text-[#292929]

                  sm:text-2xl
                "
              >
                José Manuel Ulloa Alcocer
              </p>

              <p
                className="
                  mt-3
                  font-playfair
                  text-xl
                  leading-relaxed
                  text-[#292929]

                  sm:text-2xl
                "
              >
                Nelly Lugardo Nario
              </p>
            </div>
          </motion.div>
        </div>

        {/* Frase final */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <p
            className="
              font-[DancingScript]
              text-3xl
              leading-relaxed
              text-[#787A62]

              sm:text-4xl
            "
          >
            Gracias por ser parte
            <br />
            de nuestra historia
          </p>

          <span
            className="
              mt-4
              inline-block
              text-2xl
              text-[#D7A29A]
            "
          >
            ♥
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Novios;