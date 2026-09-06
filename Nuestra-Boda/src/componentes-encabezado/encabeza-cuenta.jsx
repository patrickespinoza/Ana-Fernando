import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CuentaRegresiva = () => {
  const fechaEvento = new Date("2026-10-10T17:00:00");

  const calcularTiempo = () => {
    const ahora = new Date();
    const diferencia = fechaEvento - ahora;

    if (diferencia <= 0) {
      return {
        dias: 0,
        horas: 0,
        minutos: 0,
        segundos: 0,
        terminado: true,
      };
    }

    return {
      dias: Math.floor(diferencia / (1000 * 60 * 60 * 24)),
      horas: Math.floor(
        (diferencia / (1000 * 60 * 60)) % 24
      ),
      minutos: Math.floor(
        (diferencia / (1000 * 60)) % 60
      ),
      segundos: Math.floor(
        (diferencia / 1000) % 60
      ),
      terminado: false,
    };
  };

  const [tiempo, setTiempo] = useState(calcularTiempo());

  useEffect(() => {
    const intervalo = setInterval(() => {
      setTiempo(calcularTiempo());
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  const bloques = [
    {
      valor: tiempo.dias,
      texto: "Días",
      color: "bg-[#787A62]",
    },
    {
      valor: tiempo.horas,
      texto: "Horas",
      color: "bg-[#969988]",
    },
    {
      valor: tiempo.minutos,
      texto: "Minutos",
      color: "bg-[#D7A29A]",
    },
    {
      valor: tiempo.segundos,
      texto: "Segundos",
      color: "bg-[#F6CFC8]",
      textoOscuro: true,
    },
  ];

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
      {/* DECORACIONES */}
      <div
        className="
          absolute
          -left-20
          top-12
          h-56
          w-56
          rounded-full
          bg-[#F6CFC8]/30
          blur-3xl
        "
      />

      <div
        className="
          absolute
          -right-20
          bottom-10
          h-56
          w-56
          rounded-full
          bg-[#969988]/25
          blur-3xl
        "
      />

      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-5xl
          text-center
        "
      >
        {/* ENCABEZADO */}
        <motion.p
          initial={{
            opacity: 0,
            letterSpacing: "0.4em",
          }}
          whileInView={{
            opacity: 1,
            letterSpacing: "0.25em",
          }}
          transition={{
            duration: 1,
          }}
          viewport={{
            once: true,
          }}
          className="
            text-xs
            font-semibold
            uppercase
            tracking-[0.25em]
            text-[#D7A29A]

            sm:text-sm
          "
        >
          Cada vez falta menos
        </motion.p>

        <motion.h1
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
            delay: 0.15,
          }}
          viewport={{
            once: true,
          }}
          className="
            mt-4
            font-playfair
            text-4xl
            font-normal
            text-[#292929]

            sm:text-5xl
            md:text-6xl
          "
        >
          Cuenta Regresiva
        </motion.h1>

        {/* Separador */}
        <motion.div
          initial={{
            scaleX: 0,
          }}
          whileInView={{
            scaleX: 1,
          }}
          transition={{
            duration: 0.9,
            delay: 0.3,
          }}
          viewport={{
            once: true,
          }}
          className="
            mx-auto
            mt-6
            flex
            w-52
            items-center
            gap-3
          "
        >
          <div className="h-px flex-1 bg-[#D7A29A]/60" />

          <span className="text-xl text-[#D7A29A]">♥</span>

          <div className="h-px flex-1 bg-[#D7A29A]/60" />
        </motion.div>

        {/* FECHA */}
        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.4,
          }}
          viewport={{
            once: true,
          }}
          className="
            mt-7
            font-[DancingScript]
            text-2xl
            text-[#787A62]

            sm:text-3xl
          "
        >
          Sábado 10 de octubre de 2026 
        </motion.p>

        {/* CONTADOR */}
        {!tiempo.terminado ? (
          <div
            className="
              mx-auto
              mt-12
              grid
              max-w-4xl
              grid-cols-2
              gap-4

              sm:gap-6

              md:grid-cols-4
            "
          >
            {bloques.map((bloque, index) => (
              <motion.div
                key={bloque.texto}
                initial={{
                  opacity: 0,
                  y: 35,
                  scale: 0.95,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.15 * index,
                }}
                viewport={{
                  once: true,
                }}
                whileHover={{
                  y: -6,
                  scale: 1.02,
                }}
                className={`
                  relative
                  overflow-hidden
                  rounded-[2rem]
                  px-4
                  py-8
                  shadow-[0_15px_40px_rgba(0,0,0,0.10)]

                  sm:py-10

                  ${bloque.color}
                `}
              >
                {/* brillo */}
                <div
                  className="
                    absolute
                    -right-8
                    -top-8
                    h-24
                    w-24
                    rounded-full
                    bg-white/10
                  "
                />

                <div className="relative z-10">
                  <p
                    className={`
                      font-playfair
                      text-5xl
                      leading-none

                      sm:text-6xl

                      ${
                        bloque.textoOscuro
                          ? "text-[#292929]"
                          : "text-white"
                      }
                    `}
                  >
                    {String(bloque.valor).padStart(2, "0")}
                  </p>

                  <p
                    className={`
                      mt-4
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.25em]

                      sm:text-xs

                      ${
                        bloque.textoOscuro
                          ? "text-[#787A62]"
                          : "text-white/80"
                      }
                    `}
                  >
                    {bloque.texto}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
            }}
            className="
              mx-auto
              mt-12
              max-w-xl
              rounded-[2rem]
              bg-[#787A62]
              px-8
              py-12
              text-white
              shadow-[0_15px_40px_rgba(0,0,0,0.12)]
            "
          >
            <p
              className="
                font-playfair
                text-3xl

                sm:text-4xl
              "
            >
              ¡Llegó el gran día!
            </p>

            <p
              className="
                mt-4
                font-[DancingScript]
                text-2xl
                text-[#F6CFC8]

                sm:text-3xl
              "
            >
              Ana Karen & Fernando
            </p>
          </motion.div>
        )}

        {/* FRASE FINAL */}
        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.8,
          }}
          viewport={{
            once: true,
          }}
          className="
            mt-12
            font-[DancingScript]
            text-3xl
            leading-relaxed
            text-[#D7A29A]

            sm:text-4xl
          "
        >
          Contamos los días para celebrar contigo
        </motion.p>
      </motion.div>
    </section>
  );
};

export default CuentaRegresiva;