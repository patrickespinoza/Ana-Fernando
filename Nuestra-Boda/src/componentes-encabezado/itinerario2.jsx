import React from "react";
import { motion } from "framer-motion";

const Itinerario2 = () => {
  const eventos = [
    {
      titulo: "Recepción",
      hora: "5:00 pm",
      fondo: "#F6CFC8",
      texto: "#292929",
      acento: "#D7A29A",
      icono: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.35"
          className="h-8 w-8 sm:h-9 sm:w-9"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 3h8M9 3v4.5a3 3 0 0 0 6 0V3M12 10.5V21M8.5 21h7"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 8.5c0 3.5 2.7 6.5 6 6.5s6-3 6-6.5"
          />
        </svg>
      ),
    },
    {
      titulo: "Ceremonia Civil",
      hora: "5:30 pm",
      fondo: "#969988",
      texto: "#FFFAFA",
      acento: "#F6CFC8",
      icono: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.35"
          className="h-8 w-8 sm:h-9 sm:w-9"
        >
          <circle cx="9" cy="12" r="4.5" />
          <circle cx="15" cy="12" r="4.5" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 8.5c1.2-2.2 2.7-3.6 4.5-4.5"
          />
        </svg>
      ),
    },
    {
      titulo: "Fotos",
      hora: "6:30 pm",
      fondo: "#D7A29A",
      texto: "#FFFAFA",
      acento: "#F6CFC8",
      icono: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.35"
          className="h-8 w-8 sm:h-9 sm:w-9"
        >
          <rect x="3" y="6" width="18" height="13" rx="2" />
          <path d="M8 6l1.5-2h5L16 6" />
          <circle cx="12" cy="12.5" r="3.2" />
        </svg>
      ),
    },
    {
      titulo: "Fiesta",
      hora: "7:00 pm",
      fondo: "#787A62",
      texto: "#FFFAFA",
      acento: "#F6CFC8",
      icono: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.35"
          className="h-8 w-8 sm:h-9 sm:w-9"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 18c2-3 3-7 3-12l6-2v8"
          />
          <circle cx="7" cy="18" r="2.5" />
          <circle cx="16" cy="14" r="2.5" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 5l1-2m15 3 1-2M3 10H1m21 0h-2"
          />
        </svg>
      ),
    },
  ];

  return (
    <section
      className="
        relative
        isolate
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
      {/* DECORACIONES */}

      <div
        className="
          pointer-events-none
          absolute
          -left-24
          top-10
          h-72
          w-72
          rounded-full
          bg-[#F6CFC8]/30
          blur-[100px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-24
          bottom-12
          h-80
          w-80
          rounded-full
          bg-[#969988]/25
          blur-[110px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[34%]
          h-56
          w-56
          -translate-x-1/2
          rounded-full
          bg-[#D7A29A]/10
          blur-[100px]
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-6xl
        "
      >
        {/* ENCABEZADO */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center"
        >
          <p
            className="
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.45em]
              text-[#D7A29A]

              sm:text-xs
            "
          >
            Nuestro día
          </p>

          <h2
            className="
              mt-4
              font-playfair
              text-4xl
              font-normal
              tracking-[-0.03em]
              text-[#292929]

              sm:text-5xl
              md:text-6xl
            "
          >
            Itinerario
          </h2>

          <div
            className="
              mx-auto
              mt-6
              flex
              w-44
              items-center
              gap-3
            "
          >
            <span className="h-px flex-1 bg-[#D7A29A]/50" />

            <span
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                border
                border-[#D7A29A]/40
                text-xs
                text-[#D7A29A]
              "
            >
              ♥
            </span>

            <span className="h-px flex-1 bg-[#D7A29A]/50" />
          </div>

          <p
            className="
              mx-auto
              mt-5
              max-w-xl
              font-cursiveDancing
              text-2xl
              leading-relaxed
              text-[#787A62]

              sm:text-3xl
            "
          >
            Cada instante fue pensado para celebrar nuestro amor
          </p>
        </motion.div>

        {/* TIMELINE */}

        <div
          className="
            relative
            mx-auto
            mt-14
            max-w-5xl

            sm:mt-18
            md:mt-20
          "
        >
          {/* Línea vertical desktop */}

          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-0
              hidden
              h-full
              w-px
              -translate-x-1/2
              bg-gradient-to-b
              from-[#D7A29A]/10
              via-[#969988]/55
              to-[#D7A29A]/10

              md:block
            "
          />

          {/* Línea móvil */}

          <div
            className="
              pointer-events-none
              absolute
              left-[27px]
              top-0
              h-full
              w-px
              bg-gradient-to-b
              from-[#D7A29A]/20
              via-[#969988]/55
              to-[#D7A29A]/20

              md:hidden
            "
          />

          <div className="space-y-9 md:space-y-14">
            {eventos.map((evento, index) => {
              const izquierda = index % 2 === 0;

              return (
                <motion.div
                  key={evento.titulo}
                  initial={{
                    opacity: 0,
                    y: 35,
                    scale: 0.97,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  viewport={{
                    once: true,
                    amount: 0.25,
                  }}
                  className="
                    relative
                    grid
                    grid-cols-[56px_1fr]
                    items-center
                    gap-4

                    md:grid-cols-[1fr_90px_1fr]
                    md:gap-7
                  "
                >
                  {/* LADO IZQUIERDO DESKTOP */}

                  <div className="hidden md:block">
                    {izquierda && (
                      <motion.div
                        whileHover={{ y: -6 }}
                        transition={{ duration: 0.25 }}
                        className="
                          ml-auto
                          max-w-[360px]
                        "
                      >
                        <EventoCard evento={evento} alineacion="right" />
                      </motion.div>
                    )}
                  </div>

                  {/* NODO CENTRAL */}

                  <div
                    className="
                      relative
                      z-10
                      flex
                      justify-center
                    "
                  >
                    <motion.div
                      whileHover={{
                        scale: 1.08,
                        rotate: 3,
                      }}
                      transition={{
                        duration: 0.25,
                      }}
                      className="
                        relative
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-full
                        border-[5px]
                        border-[#FFFAFA]
                        shadow-[0_10px_30px_rgba(60,60,50,0.15)]

                        md:h-[70px]
                        md:w-[70px]
                      "
                      style={{
                        backgroundColor: evento.fondo,
                        color: evento.texto,
                      }}
                    >
                      {evento.icono}

                      <span
                        className="
                          pointer-events-none
                          absolute
                          inset-[-8px]
                          rounded-full
                          border
                          border-[#D7A29A]/15
                        "
                      />
                    </motion.div>
                  </div>

                  {/* LADO DERECHO / MOBILE */}

                  <div>
                    <div className={izquierda ? "md:hidden" : ""}>
                      <motion.div
                        whileHover={{ y: -6 }}
                        transition={{ duration: 0.25 }}
                        className="
                          max-w-[360px]
                          md:mr-auto
                        "
                      >
                        <EventoCard evento={evento} alineacion="left" />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CIERRE */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.3,
          }}
          viewport={{ once: true }}
          className="
            mt-16
            text-center

            sm:mt-20
          "
        >
          <div
            className="
              mx-auto
              flex
              w-44
              items-center
              gap-3
            "
          >
            <span className="h-px flex-1 bg-[#969988]/40" />

            <span className="text-[#D7A29A]">
              ❦
            </span>

            <span className="h-px flex-1 bg-[#969988]/40" />
          </div>

          <p
            className="
              mt-6
              font-cursiveDancing
              text-3xl
              text-[#787A62]

              sm:text-4xl
            "
          >
            Nos encantará vivir cada momento contigo
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const EventoCard = ({ evento, alineacion }) => {
  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-[2rem]
        border
        border-white/50
        p-[1px]
        shadow-[0_18px_55px_rgba(55,55,45,0.12)]
      "
    >
      {/* marco exterior */}

      <div
        className="
          relative
          overflow-hidden
          rounded-[1.95rem]
          px-6
          py-6

          sm:px-7
          sm:py-7
        "
        style={{
          backgroundColor: evento.fondo,
          color: evento.texto,
        }}
      >
        {/* cristal */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-br
            from-white/25
            via-transparent
            to-black/[0.04]
          "
        />

        {/* brillo */}

        <div
          className="
            pointer-events-none
            absolute
            -right-14
            -top-14
            h-36
            w-36
            rounded-full
            bg-white/20
            blur-3xl
          "
        />

        {/* decoración */}

        <div
          className="
            pointer-events-none
            absolute
            bottom-4
            right-5
            h-12
            w-12
            rounded-full
            border
            border-white/10
          "
        />

        <div
          className={`
            relative
            z-10

            ${
              alineacion === "right"
                ? "md:text-right"
                : "text-left"
            }
          `}
        >
          <div
            className={`
              flex
              items-center
              gap-3

              ${
                alineacion === "right"
                  ? "md:flex-row-reverse"
                  : ""
              }
            `}
          >
            <span
              className="
                inline-block
                h-[6px]
                w-[6px]
                rotate-45
              "
              style={{
                backgroundColor: evento.acento,
              }}
            />

            <p
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.32em]

                sm:text-[11px]
              "
              style={{
                color: evento.acento,
              }}
            >
              {evento.hora}
            </p>
          </div>

          <h3
            className="
              mt-3
              font-playfair
              text-2xl
              font-normal

              sm:text-3xl
            "
          >
            {evento.titulo}
          </h3>

          <div
            className={`
              mt-4
              h-px
              w-12
              bg-current
              opacity-25

              ${
                alineacion === "right"
                  ? "md:ml-auto"
                  : ""
              }
            `}
          />

          <p
            className="
              mt-4
              text-[11px]
              uppercase
              tracking-[0.2em]
              opacity-70
            "
          >
            {String(indexLabel(evento.titulo)).padStart(2, "0")}
          </p>
        </div>
      </div>
    </div>
  );
};

const indexLabel = (titulo) => {
  const orden = {
    Recepción: 1,
    "Ceremonia Civil": 2,
    Fotos: 3,
    Fiesta: 4,
  };

  return orden[titulo] || 1;
};

export default Itinerario2;