import React from "react";
import { motion } from "framer-motion";

const Celebracion = () => {
  const ubicacion =
    "https://maps.app.goo.gl/tNnfrmMNsPkVtcgJ9";

  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-[#787A62]
        px-5
        py-20

        sm:px-8
        sm:py-24

        md:py-28
      "
    >
      {/* Decoraciones de fondo */}
      <div
        className="
          absolute
          -left-16
          top-10
          h-52
          w-52
          rounded-full
          bg-[#969988]/30
          blur-3xl
        "
      />

      <div
        className="
          absolute
          -right-16
          bottom-10
          h-56
          w-56
          rounded-full
          bg-[#D7A29A]/20
          blur-3xl
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          w-full
          max-w-5xl
          flex-col
          items-center
        "
      >
        {/* TÍTULO */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p
            className="
              text-xs
              font-medium
              uppercase
              tracking-[0.32em]
              text-[#F6CFC8]

              sm:text-sm
            "
          >
            Nuestra Celebración
          </p>

          <div
            className="
              mx-auto
              mt-5
              flex
              w-52
              items-center
              gap-3
            "
          >
            <div className="h-px flex-1 bg-[#F6CFC8]/60" />

            <span className="text-[#F6CFC8]">♥</span>

            <div className="h-px flex-1 bg-[#F6CFC8]/60" />
          </div>
        </motion.div>

        {/* FECHA */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15 }}
          viewport={{ once: true }}
          className="
            mb-12
            mt-10
            text-center
          "
        >
          <p
            className="
              text-sm
              font-medium
              uppercase
              tracking-[0.4em]
              text-[#FFFAFA]

              sm:text-base
            "
          >
            Sábado
          </p>

          <h1
            className="
              mt-3
              font-playfair
              text-7xl
              font-normal
              leading-none
              text-[#FFFAFA]

              sm:text-8xl
              md:text-9xl
            "
          >
            10
          </h1>

          <p
            className="
              mt-4
              font-playfair
              text-xl
              uppercase
              tracking-[0.2em]
              text-[#F6CFC8]

              sm:text-2xl
            "
          >
            Octubre · 2026
          </p>
        </motion.div>

        {/* TARJETA PRINCIPAL */}
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="
            relative
            w-full
            max-w-2xl
            overflow-hidden
            rounded-[2.5rem]
            bg-[#FFFAFA]
            px-7
            py-12
            text-center
            shadow-[0_20px_60px_rgba(0,0,0,0.18)]

            sm:px-12
            sm:py-14
          "
        >
          {/* brillo suave */}
          <div
            className="
              absolute
              -right-16
              -top-20
              h-52
              w-52
              rounded-full
              bg-[#F6CFC8]/35
              blur-3xl
            "
          />

          <div
            className="
              absolute
              -bottom-20
              -left-16
              h-52
              w-52
              rounded-full
              bg-[#969988]/20
              blur-3xl
            "
          />

          <div className="relative z-10">
            {/* ícono decorativo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              viewport={{ once: true }}
              className="
                mx-auto
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-full
                bg-[#F6CFC8]
                text-2xl
                text-[#787A62]
              "
            >
              ❦
            </motion.div>

            <p
              className="
                mt-6
                text-xs
                uppercase
                tracking-[0.3em]
                text-[#D7A29A]

                sm:text-sm
              "
            >
              Acompáñanos a celebrar
            </p>

            <h2
              className="
                mt-4
                font-playfair
                text-3xl
                font-normal
                text-[#292929]

                sm:text-4xl
                md:text-5xl
              "
            >
              Jardín “La Piedra”
            </h2>

            <div
              className="
                mx-auto
                my-7
                flex
                max-w-[220px]
                items-center
                gap-3
              "
            >
              <div className="h-px flex-1 bg-[#D7A29A]/50" />

              <span className="text-[#D7A29A]">♥</span>

              <div className="h-px flex-1 bg-[#D7A29A]/50" />
            </div>

            {/* HORA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              viewport={{ once: true }}
              className="mt-4"
            >
              <p
                className="
                  text-xs
                  font-medium
                  uppercase
                  tracking-[0.3em]
                  text-[#787A62]
                "
              >
                Hora
              </p>

              <p
                className="
                  mt-2
                  font-[DancingScript]
                  text-4xl
                  text-[#D7A29A]

                  sm:text-5xl
                "
              >
                5:00 p.m.
              </p>
            </motion.div>

            {/* FECHA COMPLETA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.65 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <p
                className="
                  text-xs
                  font-medium
                  uppercase
                  tracking-[0.3em]
                  text-[#787A62]
                "
              >
                Fecha
              </p>

              <p
                className="
                  mt-3
                  font-playfair
                  text-lg
                  text-[#292929]

                  sm:text-xl
                "
              >
                Sábado 10 de octubre de 2026
              </p>
            </motion.div>

            {/* BOTÓN */}
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.75 }}
              viewport={{ once: true }}
              href={ubicacion}
              target="_blank"
              rel="noreferrer"
              className="
                mx-auto
                mt-10
                inline-flex
                items-center
                justify-center
                gap-3
                rounded-full
                bg-[#787A62]
                px-8
                py-4
                text-sm
                font-medium
                uppercase
                tracking-[0.12em]
                text-white
                shadow-[0_10px_30px_rgba(120,122,98,0.25)]
                transition
                duration-300

                hover:-translate-y-1
                hover:bg-[#969988]

                sm:px-10
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21s6-5.4 6-11a6 6 0 1 0-12 0c0 5.6 6 11 6 11Z"
                />
                <circle cx="12" cy="10" r="2.2" />
              </svg>

              Ver ubicación
            </motion.a>
          </div>
        </motion.div>

        {/* FRASE FINAL */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          viewport={{ once: true }}
          className="
            mt-10
            text-center
            font-[DancingScript]
            text-3xl
            leading-relaxed
            text-[#FFFAFA]

            sm:text-4xl
          "
        >
          Será un honor compartir este día contigo
        </motion.p>
      </div>
    </section>
  );
};

export default Celebracion;