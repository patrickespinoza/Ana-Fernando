import React, { useState } from "react";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwu7TiJ7bq4i_Tal01Sc3TSc5oa7Tw2X7iKWCL3pvJaw4n4-JzunAu39ZJkpwNOkt2x/exec";

export default function ConfirmacionAsistencia() {
  const [nombre, setNombre] = useState("");
  const [asistencia, setAsistencia] = useState("");
  const [invitados, setInvitados] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [enviando, setEnviando] = useState(false);
  const [confirmacion, setConfirmacion] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (enviando) return;

    if (!nombre.trim() || !asistencia) {
      setConfirmacion(
        "Por favor escribe tu nombre y selecciona si asistirás."
      );
      return;
    }

    const cantidad = Number(invitados);

    if (
      asistencia === "Sí asistiré" &&
      (!Number.isInteger(cantidad) || cantidad < 1)
    ) {
      setConfirmacion("Indica un número válido de invitados.");
      return;
    }

    setEnviando(true);
    setConfirmacion("");

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify({
          nombre: nombre.trim(),
          asistencia,
          invitados: asistencia === "Sí asistiré" ? cantidad : 0,
          mensaje: mensaje.trim(),
          fecha: new Date().toLocaleString("es-MX", {
            timeZone: "America/Mexico_City",
          }),
        }),
      });

      setConfirmacion("Solicitud de confirmación enviada. ¡Gracias!");
      setNombre("");
      setAsistencia("");
      setInvitados("");
      setMensaje("");
    } catch (error) {
      console.error("Error al enviar confirmación:", error);
      setConfirmacion("Ocurrió un error. Intenta nuevamente.");
    } finally {
      setEnviando(false);
    }
  };

  const campo =
    "w-full rounded-2xl border border-[#D7A29A]/50 bg-[#FFFAFA] px-5 py-4 text-base text-[#292929] outline-none transition focus:border-[#D7A29A] focus:ring-2 focus:ring-[#F6CFC8]/50 placeholder:text-[#787A62]/70 disabled:opacity-60";

  return (
    <section
      id="confirmacion"
      className="relative isolate w-full overflow-hidden bg-[#787A62] px-5 py-20 text-[#FFFAFA] sm:px-8 sm:py-28"
    >
      <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[#F6CFC8]/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-[#FFFAFA]/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-2xl">
        <div className="text-center">
          <span className="text-2xl text-[#F6CFC8]" aria-hidden="true">
            ❦
          </span>

          <h2 className="mt-4 font-playfair text-4xl font-normal leading-tight sm:text-5xl">
            Confirmación de asistencia
          </h2>

          <div
            className="mx-auto my-6 flex max-w-[220px] items-center gap-3 text-[#F6CFC8]"
            aria-hidden="true"
          >
            <span className="h-px flex-1 bg-[#F6CFC8]/70" />
            <span>♥</span>
            <span className="h-px flex-1 bg-[#F6CFC8]/70" />
          </div>

          <p className="mx-auto mb-10 max-w-lg font-playfair text-lg leading-relaxed text-[#FFFAFA]">
            Nos encantará saber si podremos contar con tu presencia.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 rounded-[2rem] border border-[#FFFAFA]/35 bg-[#969988]/70 px-5 py-8 shadow-[0_20px_55px_rgba(41,41,41,0.16)] sm:px-9 sm:py-10"
        >
          <div>
            <label htmlFor="nombreConfirmacion" className="mb-2 block text-sm">
              Nombre y apellido
            </label>
            <input
              id="nombreConfirmacion"
              type="text"
              autoComplete="name"
              placeholder="Escribe tu nombre"
              value={nombre}
              onChange={(event) => setNombre(event.target.value)}
              disabled={enviando}
              required
              className={campo}
            />
          </div>

          <fieldset>
            <legend className="mb-3 text-sm">¿Podrás acompañarnos?</legend>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {["Sí asistiré", "No asistiré"].map((opcion) => (
                <button
                  key={opcion}
                  type="button"
                  aria-pressed={asistencia === opcion}
                  disabled={enviando}
                  onClick={() => {
                    setAsistencia(opcion);
                    if (opcion === "No asistiré") setInvitados("");
                    setConfirmacion("");
                  }}
                  className={`min-h-14 rounded-xl border px-4 py-3 font-playfair transition disabled:opacity-60 ${
                    asistencia === opcion
                      ? "border-[#F6CFC8] bg-[#FFFAFA] text-[#5E6650]"
                      : "border-[#FFFAFA]/70 text-[#FFFAFA] hover:bg-[#FFFAFA]/10"
                  }`}
                >
                  {opcion}
                </button>
              ))}
            </div>
          </fieldset>

          {asistencia === "Sí asistiré" && (
            <div>
              <label
                htmlFor="invitadosConfirmacion"
                className="mb-2 block text-sm"
              >
                Número de invitados
              </label>
              <input
                id="invitadosConfirmacion"
                type="number"
                min="1"
                step="1"
                inputMode="numeric"
                placeholder="Ejemplo: 2"
                value={invitados}
                onChange={(event) => setInvitados(event.target.value)}
                disabled={enviando}
                required
                className={campo}
              />
            </div>
          )}

          <div>
            <label htmlFor="mensajeConfirmacion" className="mb-2 block text-sm">
              Mensaje para los novios
            </label>
            <textarea
              id="mensajeConfirmacion"
              placeholder="Escribe tu mensaje..."
              value={mensaje}
              onChange={(event) => setMensaje(event.target.value)}
              rows={4}
              disabled={enviando}
              className={`${campo} resize-y`}
            />
          </div>

          <button
            type="submit"
            disabled={enviando}
            className="w-full rounded-xl bg-[#FFFAFA] px-5 py-4 font-playfair font-semibold tracking-wide text-[#5E6650] transition hover:bg-[#F6CFC8] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {enviando ? "Enviando..." : "Enviar confirmación"}
          </button>

          {confirmacion && (
            <p role="status" className="text-center text-sm font-medium">
              {confirmacion}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}