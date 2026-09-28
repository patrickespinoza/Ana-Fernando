import React from "react";
import { motion } from "framer-motion";
import { Gift, ExternalLink } from "lucide-react";

const LISTA_LIVERPOOL =
  "https://mesaderegalos.liverpool.com.mx/milistaderegalos/60049872";

export default function Regalos() {
  return (
    <section
      id="regalos"
      className="relative isolate w-full overflow-hidden bg-[#F6CFC8] px-5 py-20 text-center text-[#292929] sm:px-8 sm:py-28"
    >
      <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[#FFFAFA]/50 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-[#D7A29A]/25 blur-3xl" />

      <motion.div
        className="relative z-10 mx-auto max-w-2xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7 }}
      >
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#D7A29A]/60 bg-[#FFFAFA]/75 text-[#787A62]">
          <Gift size={30} strokeWidth={1.4} aria-hidden="true" />
        </div>

        <p className="mt-6 text-xs font-medium uppercase tracking-[0.25em] text-[#787A62] sm:text-sm">
          Con mucho cariño
        </p>

        <h2 className="mt-4 font-playfair text-4xl font-normal leading-tight sm:text-5xl">
          Mesa de regalos
        </h2>

        <div
          className="mx-auto my-7 flex max-w-[220px] items-center gap-3 text-[#D7A29A]"
          aria-hidden="true"
        >
          <span className="h-px flex-1 bg-[#D7A29A]" />
          <span>♥</span>
          <span className="h-px flex-1 bg-[#D7A29A]" />
        </div>

        <p className="mx-auto max-w-xl font-playfair text-lg leading-relaxed text-[#292929] sm:text-xl">
          El mejor regalo es compartir este día contigo. Si deseas tener un
          detalle con nosotros, hemos preparado una lista de regalos.
        </p>

        <div className="mx-auto mt-9 max-w-md rounded-[2rem] border border-[#D7A29A]/60 bg-[#FFFAFA]/85 px-6 py-8 shadow-[0_18px_45px_rgba(120,122,98,0.12)] sm:px-9">
          <h3 className="font-playfair text-2xl text-[#292929]">
            Liverpool
          </h3>

          <p className="mt-2 text-sm text-[#787A62]">
            Lista de regalos 60049872
          </p>

          <a
            href={LISTA_LIVERPOOL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#787A62] px-5 py-3 font-playfair text-sm font-semibold tracking-wide text-[#FFFAFA] transition-colors hover:bg-[#5E6650] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#787A62]"
          >
            Ver mesa de regalos
            <ExternalLink size={17} strokeWidth={1.7} aria-hidden="true" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}