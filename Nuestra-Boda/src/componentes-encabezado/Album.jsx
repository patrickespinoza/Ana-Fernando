import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/* =========================================
   ÁLBUM COMPARTIDO — ANA KAREN & FERNANDO
========================================= */

const palette = {
  dark: "#292929",
  text: "#555555",
  white: "#FFFAFA",

  softRose: "#D7A29A",
  blush: "#F6CFC8",
  eucalyptus: "#969988",
  olive: "#787A62",
};

const albumCode = "MXat19tb26";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* =========================================
   ORNAMENTO
========================================= */

function CornerOrnament({ className = "" }) {
  return (
    <svg
      viewBox="0 0 90 90"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M5 85V30C5 16.2 16.2 5 30 5h55"
        stroke="currentColor"
        strokeWidth="1"
      />

      <path
        d="M15 72V34c0-10.5 8.5-19 19-19h38"
        stroke="currentColor"
        strokeWidth="0.65"
      />

      <path
        d="M30 5C30 18.8 18.8 30 5 30"
        stroke="currentColor"
        strokeWidth="0.75"
      />

      <circle cx="15" cy="15" r="2" fill="currentColor" />
    </svg>
  );
}

/* =========================================
   RAMA BOTÁNICA
========================================= */

function BotanicalBranch({ className = "" }) {
  return (
    <svg
      viewBox="0 0 150 260"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M76 252C80 192 78 130 71 12"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />

      <path
        d="M76 205C54 192 41 174 35 151"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
      />

      <path
        d="M75 167C97 153 109 133 113 109"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
      />

      <path
        d="M73 123C53 110 43 93 39 72"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
      />

      <path
        d="M72 83C91 71 101 53 103 34"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
      />

      <path
        d="M35 151C49 150 60 158 67 173C52 172 41 165 35 151Z"
        stroke="currentColor"
        strokeWidth="0.7"
      />

      <path
        d="M113 109C99 109 88 117 80 132C96 131 107 123 113 109Z"
        stroke="currentColor"
        strokeWidth="0.7"
      />

      <path
        d="M39 72C53 73 63 81 69 95C54 94 44 86 39 72Z"
        stroke="currentColor"
        strokeWidth="0.7"
      />

      <path
        d="M103 34C90 35 80 42 74 55C88 54 98 47 103 34Z"
        stroke="currentColor"
        strokeWidth="0.7"
      />
    </svg>
  );
}

/* =========================================
   SEPARADOR
========================================= */

function DecorativeDivider({ compact = false }) {
  return (
    <div className="flex items-center justify-center gap-3">
      <span
        className={compact ? "h-px w-8 sm:w-12" : "h-px w-10 sm:w-16"}
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(215,162,154,0.8))",
        }}
      />

      <span
        className="h-[6px] w-[6px] rotate-45 border"
        style={{
          borderColor: palette.softRose,
        }}
      />

      <span
        className={compact ? "h-px w-8 sm:w-12" : "h-px w-10 sm:w-16"}
        style={{
          background:
            "linear-gradient(to left, transparent, rgba(215,162,154,0.8))",
        }}
      />
    </div>
  );
}

/* =========================================
   ICONOS
========================================= */

function CameraIcon({ className = "h-5 w-5" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M5 7h3l1.5-2h5L16 7h3a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2Z" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
    >
      <path d="M12 3v12" />
      <path d="m7 10 5 5 5-5" />
      <path d="M5 21h14" />
    </svg>
  );
}

function CopyIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
    >
      <rect x="8" y="8" width="11" height="11" rx="1.5" />
      <path d="M16 8V5.5A1.5 1.5 0 0 0 14.5 4h-10A1.5 1.5 0 0 0 3 5.5v10A1.5 1.5 0 0 0 4.5 17H8" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
    >
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      className="h-5 w-5"
    >
      <path d="m6 6 12 12" />
      <path d="M18 6 6 18" />
    </svg>
  );
}

/* =========================================
   COMPONENTE
========================================= */

const Album = () => {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!open) return;

    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  const copyAlbumCode = async () => {
    try {
      await navigator.clipboard.writeText(albumCode);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1800);
    } catch (error) {
      console.error("No se pudo copiar el código:", error);
    }
  };

  return (
    <>
      {/* =========================================
          SECCIÓN PRINCIPAL
      ========================================= */}

      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: true,
          amount: 0.15,
        }}
        className="
          relative
          flex
          min-h-[680px]
          w-full
          items-center
          justify-center
          overflow-hidden
          bg-[#FFFAFA]
          px-5
          py-24

          sm:px-8
          sm:py-28

          lg:px-12
          lg:py-32
        "
      >
        {/* FONDOS DECORATIVOS */}

        <div
          className="
            pointer-events-none
            absolute
            -left-24
            top-10
            h-64
            w-64
            rounded-full
            bg-[#F6CFC8]/35
            blur-3xl
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -right-20
            bottom-0
            h-72
            w-72
            rounded-full
            bg-[#969988]/25
            blur-3xl
          "
        />

        {/* MARCOS */}

        <div
          className="
            pointer-events-none
            absolute
            inset-5
            rounded-[2.5rem]
            border
            border-[#D7A29A]/25

            sm:inset-8
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            inset-[28px]
            rounded-[2.1rem]
            border
            border-[#969988]/15

            sm:inset-[38px]
          "
        />

        {/* ORNAMENTOS */}

        <CornerOrnament
          className="
            pointer-events-none
            absolute
            left-7
            top-7
            h-16
            w-16
            text-[#D7A29A]/35

            sm:left-10
            sm:top-10
            sm:h-20
            sm:w-20
          "
        />

        <CornerOrnament
          className="
            pointer-events-none
            absolute
            right-7
            top-7
            h-16
            w-16
            rotate-90
            text-[#D7A29A]/35

            sm:right-10
            sm:top-10
            sm:h-20
            sm:w-20
          "
        />

        <CornerOrnament
          className="
            pointer-events-none
            absolute
            bottom-7
            left-7
            h-16
            w-16
            -rotate-90
            text-[#969988]/35

            sm:bottom-10
            sm:left-10
            sm:h-20
            sm:w-20
          "
        />

        <CornerOrnament
          className="
            pointer-events-none
            absolute
            bottom-7
            right-7
            h-16
            w-16
            rotate-180
            text-[#969988]/35

            sm:bottom-10
            sm:right-10
            sm:h-20
            sm:w-20
          "
        />

        <BotanicalBranch
          className="
            pointer-events-none
            absolute
            -bottom-14
            -left-10
            h-[250px]
            w-[145px]
            -rotate-12
            text-[#969988]/15

            sm:h-[310px]
            sm:w-[180px]
          "
        />

        <BotanicalBranch
          className="
            pointer-events-none
            absolute
            -right-10
            -top-14
            h-[250px]
            w-[145px]
            rotate-[168deg]
            text-[#D7A29A]/12

            sm:h-[310px]
            sm:w-[180px]
          "
        />

        {/* CONTENIDO */}

        <div
          className="
            relative
            z-10
            mx-auto
            flex
            w-full
            max-w-4xl
            flex-col
            items-center
            text-center
          "
        >
          {/* ICONO */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
            }}
            viewport={{ once: true }}
            className="
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-full
              bg-[#F6CFC8]
              text-[#787A62]
              shadow-[0_10px_30px_rgba(215,162,154,0.2)]

              sm:h-20
              sm:w-20
            "
          >
            <CameraIcon className="h-7 w-7 sm:h-8 sm:w-8" />
          </motion.div>

          {/* SUBTÍTULO */}

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.08,
            }}
            className="
              mt-7
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.4em]
              text-[#D7A29A]

              sm:text-[10px]
            "
          >
            Recuerdos compartidos
          </motion.p>

          <div className="mt-5">
            <DecorativeDivider />
          </div>

          {/* TITULO */}

          <motion.h2
            initial={{
              opacity: 0,
              y: 16,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              delay: 0.12,
            }}
            className="
              mt-8
              font-playfair
              text-[40px]
              font-normal
              leading-tight
              tracking-[-0.025em]
              text-[#292929]

              sm:text-[54px]
              md:text-[64px]
            "
          >
            Álbum compartido
          </motion.h2>

          {/* TEXTO */}

          <motion.p
            initial={{
              opacity: 0,
              y: 14,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              delay: 0.18,
            }}
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-[15px]
              leading-7
              text-[#555555]

              sm:text-[17px]
              sm:leading-8
            "
          >
            Queremos ver nuestra celebración también a través de tus ojos.
            Comparte las fotografías que captures y ayúdanos a conservar cada
            momento especial.
          </motion.p>

          {/* MENSAJE */}

          <motion.div
            initial={{
              opacity: 0,
              y: 14,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.85,
              delay: 0.24,
            }}
            className="
              mt-10
              max-w-xl
              rounded-[2rem]
              bg-[#F6CFC8]/35
              px-7
              py-7

              sm:mt-12
              sm:px-10
            "
          >
            <p
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.32em]
                text-[#787A62]
              "
            >
              Conservemos juntos la historia
            </p>

            <p
              className="
                mt-4
                text-[14px]
                leading-7
                text-[#555555]

                sm:text-[15px]
              "
            >
              Dentro encontrarás el código del álbum y el acceso a la
              aplicación para subir tus fotografías.
            </p>
          </motion.div>

          {/* BOTÓN */}

          <motion.button
            type="button"
            onClick={() => setOpen(true)}
            whileHover={{
              y: -3,
              scale: 1.01,
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="
              mt-10
              inline-flex
              min-w-[230px]
              items-center
              justify-center
              gap-3
              rounded-full
              bg-[#787A62]
              px-8
              py-4
              text-white
              shadow-[0_12px_30px_rgba(120,122,98,0.2)]
              transition

              hover:bg-[#969988]

              sm:min-w-[260px]
            "
          >
            <CameraIcon />

            <span
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.28em]

                sm:text-[10px]
              "
            >
              Abrir álbum
            </span>
          </motion.button>

          {/* FRASE FINAL */}

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
              delay: 0.35,
            }}
            viewport={{ once: true }}
            className="
              mt-10
              font-[DancingScript]
              text-2xl
              text-[#D7A29A]

              sm:text-3xl
            "
          >
            Cada fotografía será parte de nuestra historia
          </motion.p>
        </div>
      </motion.section>

      {/* =========================================
          MODAL
      ========================================= */}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.3,
            }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                setOpen(false);
              }
            }}
            className="
              fixed
              inset-0
              z-[9999]
              flex
              h-[100dvh]
              w-full
              items-center
              justify-center
              overflow-hidden
              bg-[#292929]/75
              px-4
              py-5
              backdrop-blur-sm

              sm:px-8
            "
            role="dialog"
            aria-modal="true"
            aria-labelledby="album-modal-title"
          >
            <motion.div
              initial={{
                opacity: 0,
                y: 24,
                scale: 0.97,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 16,
                scale: 0.98,
              }}
              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                relative
                max-h-[92dvh]
                w-full
                max-w-3xl
                overflow-y-auto
                rounded-[2.5rem]
                bg-[#FFFAFA]
                px-6
                py-14
                text-center
                shadow-[0_30px_100px_rgba(0,0,0,0.30)]

                sm:px-10
                sm:py-16

                md:px-14
              "
            >
              {/* DECORACIONES */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-20
                  -top-20
                  h-56
                  w-56
                  rounded-full
                  bg-[#F6CFC8]/35
                  blur-3xl
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  -bottom-20
                  -left-20
                  h-56
                  w-56
                  rounded-full
                  bg-[#969988]/20
                  blur-3xl
                "
              />

              {/* CERRAR */}

              <motion.button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Cerrar álbum compartido"
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="
                  absolute
                  right-5
                  top-5
                  z-30
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  bg-[#F6CFC8]
                  text-[#787A62]

                  sm:right-6
                  sm:top-6
                "
              >
                <CloseIcon />
              </motion.button>

              {/* CONTENIDO */}

              <div
                className="
                  relative
                  z-10
                  flex
                  w-full
                  flex-col
                  items-center
                "
              >
                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-full
                    bg-[#969988]
                    text-white
                  "
                >
                  <CameraIcon />
                </div>

                <p
                  className="
                    mt-6
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.4em]
                    text-[#D7A29A]

                    sm:text-[9px]
                  "
                >
                  Recuerdos de nuestra boda
                </p>

                <div className="mt-5">
                  <DecorativeDivider />
                </div>

                <h2
                  id="album-modal-title"
                  className="
                    mt-7
                    font-playfair
                    text-[34px]
                    font-normal
                    tracking-[-0.02em]
                    text-[#292929]

                    sm:text-[44px]
                  "
                >
                  Nuestro álbum
                </h2>

                <p
                  className="
                    mx-auto
                    mt-5
                    max-w-xl
                    text-[14px]
                    leading-7
                    text-[#555555]

                    sm:text-base
                  "
                >
                  Descarga la aplicación Wedshoots, utiliza nuestro código y
                  comparte las fotografías que captures durante la celebración.
                </p>

                {/* INFORMACIÓN */}

                <div
                  className="
                    mt-9
                    grid
                    w-full
                    gap-6

                    md:grid-cols-[1fr_0.8fr]
                    md:items-stretch
                  "
                >
                  {/* DATOS */}

                  <div
                    className="
                      flex
                      flex-col
                      items-center
                      rounded-[2rem]
                      bg-[#F6CFC8]/35
                      px-5
                      py-8
                      text-center

                      sm:px-7
                    "
                  >
                    <p
                      className="
                        text-[8px]
                        font-semibold
                        uppercase
                        tracking-[0.32em]
                        text-[#787A62]

                        sm:text-[9px]
                      "
                    >
                      Aplicación
                    </p>

                    <p
                      className="
                        mt-3
                        font-playfair
                        text-[27px]
                        text-[#292929]

                        sm:text-[31px]
                      "
                    >
                      Wedshoots
                    </p>

                    <motion.a
                      href="https://apps.apple.com/mx/app/wedshoots/id660256196"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{
                        y: -2,
                      }}
                      whileTap={{
                        scale: 0.98,
                      }}
                      className="
                        mt-6
                        inline-flex
                        items-center
                        justify-center
                        gap-3
                        rounded-full
                        bg-[#787A62]
                        px-6
                        py-3
                        text-white

                        hover:bg-[#969988]
                      "
                    >
                      <DownloadIcon />

                      <span
                        className="
                          text-[8px]
                          font-semibold
                          uppercase
                          tracking-[0.25em]

                          sm:text-[9px]
                        "
                      >
                        Descargar app
                      </span>
                    </motion.a>

                    <div
                      className="
                        my-8
                        h-px
                        w-20
                        bg-[#D7A29A]/50
                      "
                    />

                    <p
                      className="
                        text-[8px]
                        font-semibold
                        uppercase
                        tracking-[0.32em]
                        text-[#787A62]

                        sm:text-[9px]
                      "
                    >
                      Código del álbum
                    </p>

                    <div
                      className="
                        mt-4
                        flex
                        w-full
                        max-w-xs
                        items-center
                        justify-between
                        gap-3
                        rounded-2xl
                        bg-white
                        px-4
                        py-4
                        shadow-sm
                      "
                    >
                      <span
                        className="
                          break-all
                          font-mono
                          text-[16px]
                          tracking-[0.16em]
                          text-[#292929]

                          sm:text-lg
                          sm:tracking-[0.22em]
                        "
                      >
                        {albumCode}
                      </span>

                      <motion.button
                        type="button"
                        onClick={copyAlbumCode}
                        aria-label="Copiar código del álbum"
                        whileHover={{
                          scale: 1.05,
                        }}
                        whileTap={{
                          scale: 0.95,
                        }}
                        className={`
                          flex
                          h-9
                          w-9
                          shrink-0
                          items-center
                          justify-center
                          rounded-full

                          ${
                            copied
                              ? "bg-[#D7A29A] text-white"
                              : "bg-[#F6CFC8] text-[#787A62]"
                          }
                        `}
                      >
                        {copied ? <CheckIcon /> : <CopyIcon />}
                      </motion.button>
                    </div>

                    <AnimatePresence mode="wait">
                      <motion.p
                        key={copied ? "copied" : "copy"}
                        initial={{
                          opacity: 0,
                          y: 4,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        exit={{
                          opacity: 0,
                          y: -4,
                        }}
                        className={`
                          mt-3
                          text-[8px]
                          font-semibold
                          uppercase
                          tracking-[0.25em]

                          ${
                            copied
                              ? "text-[#D7A29A]"
                              : "text-[#787A62]"
                          }
                        `}
                      >
                        {copied ? "Código copiado" : "Toca para copiar"}
                      </motion.p>
                    </AnimatePresence>
                  </div>

                  {/* QR */}

                  <div
                    className="
                      flex
                      flex-col
                      items-center
                      justify-center
                      rounded-[2rem]
                      bg-[#969988]
                      px-5
                      py-8
                      text-center
                    "
                  >
                    <p
                      className="
                        text-[8px]
                        font-semibold
                        uppercase
                        tracking-[0.32em]
                        text-white/80

                        sm:text-[9px]
                      "
                    >
                      Acceso directo
                    </p>

                    <div
                      className="
                        mt-5
                        rounded-2xl
                        bg-white
                        p-3
                        shadow-[0_12px_30px_rgba(0,0,0,0.12)]
                      "
                    >
                      <img
                        src="/qr.png"
                        alt="Código QR del álbum compartido"
                        loading="lazy"
                        className="
                          h-44
                          w-44
                          object-contain

                          sm:h-48
                          sm:w-48
                        "
                      />
                    </div>

                    <p
                      className="
                        mt-5
                        max-w-xs
                        text-[13px]
                        leading-6
                        text-white/85

                        sm:text-[14px]
                      "
                    >
                      Escanea el código QR para acceder y comenzar a compartir
                      tus fotografías.
                    </p>
                  </div>
                </div>

                <div className="mt-9">
                  <DecorativeDivider />
                </div>

                <p
                  className="
                    mt-6
                    max-w-lg
                    font-[DancingScript]
                    text-2xl
                    leading-relaxed
                    text-[#D7A29A]

                    sm:text-3xl
                  "
                >
                  Cada fotografía guardará un pedacito de este día
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Album;