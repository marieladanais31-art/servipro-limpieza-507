"use client";

import { useEffect, useMemo, useState } from "react";

const whatsappNumber = "50769950464";
const whatsappMessage =
  "Hola Servipro Limpieza 507, quiero cotizar un servicio de limpieza industrial o comercial en Panamá.";
const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  whatsappMessage,
)}`;

const heroSlides = [
  {
    eyebrow: "Silos · graneleros · bodegas",
    title: "Limpieza industrial sin detener tu operación.",
    text: "Servicios técnicos para espacios confinados, bodegas de alto tránsito y operaciones logísticas que necesitan seguridad, evidencia y continuidad.",
    image: "/assets/ppt/image-10-2.jpg",
  },
  {
    eyebrow: "Equipo uniformado y supervisado",
    title: "Personal visible, coordinado y listo para campo.",
    text: "Cuadrillas con sweater negro, logo de Servipro, EPP y control operativo para cumplir protocolos de acceso, seguridad y cierre.",
    image: "/assets/ppt/image-10-3.jpeg",
  },
  {
    eyebrow: "Espacios confinados",
    title: "Método, seguridad y evidencia de principio a fin.",
    text: "Levantamiento técnico, permisos, ventilación, EPP, supervisor externo y reporte fotográfico para servicios de alto riesgo.",
    image: "/assets/ppt/image-11-2.jpg",
  },
];

const serviceLines = [
  {
    id: "industrial",
    label: "Industrial",
    title: "Silos, graneleros y espacios confinados",
    text: "Retiro de material adherido, limpieza de tolvas, ductos, compuertas, puntos de descarga y zonas con acumulación, humedad o plagas.",
    bullets: [
      "Protocolos para áreas críticas",
      "Apoyo en paradas programadas",
      "Evidencia antes, durante y después",
    ],
    image: "/assets/ppt/image-1-1.jpg",
  },
  {
    id: "bodegas",
    label: "Bodegas",
    title: "Bodegas y logística de alto tránsito",
    text: "Pisos industriales, racks, muelles, rampas, zonas de carga, baños, comedor y control de polvo operativo para auditorías o continuidad diaria.",
    bullets: [
      "Frecuencia adaptable por turnos",
      "Personal por contrato o proyecto",
      "Refuerzo para inventarios y picos",
    ],
    image: "/assets/ppt/image-4-2.jpeg",
  },
  {
    id: "profundas",
    label: "Limpiezas profundas",
    title: "Post obra, primeras entregas y rescate de áreas",
    text: "Servicios puntuales para recuperar orden, higiene y presentación en áreas críticas antes de entregar, auditar o reiniciar actividades.",
    bullets: [
      "Lavado técnico y pulimiento",
      "Vidrios, paredes, baños y racks",
      "Cuadrilla con supervisión en sitio",
    ],
    image: "/assets/ppt/image-7-2.jpeg",
  },
  {
    id: "contrato",
    label: "Personal fijo",
    title: "Personal de limpieza por contrato",
    text: "Cobertura mensual, diaria o por jornadas para empresas que necesitan continuidad sin administrar vacaciones, permisos ni rotación directa.",
    bullets: [
      "Control de asistencia",
      "Reposición de insumos según acuerdo",
      "Equipo alineado a normas del cliente",
    ],
    image: "/assets/ppt/image-12-1.jpeg",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Levantamiento",
    text: "Visita técnica para revisar áreas, riesgos, accesos, ventanas operativas y nivel de acumulación.",
  },
  {
    step: "02",
    title: "Plan",
    text: "Definición de recursos, EPP, equipos, productos, responsables, permisos y tiempos de ejecución.",
  },
  {
    step: "03",
    title: "Ejecución",
    text: "Limpieza técnica, control de polvo, retiro de residuos, avances por zona y comunicación en campo.",
  },
  {
    step: "04",
    title: "Supervisión",
    text: "Validación de zonas, correcciones, checklist, evidencia fotográfica y acompañamiento del supervisor.",
  },
  {
    step: "05",
    title: "Cierre",
    text: "Reporte de hallazgos, recomendaciones de frecuencia y entrega transparente del servicio realizado.",
  },
];

const gallery = [
  {
    src: "/assets/ppt/image-10-3.jpeg",
    tag: "Equipo",
    title: "Cuadrilla uniformada en bodega",
  },
  {
    src: "/assets/ppt/image-10-4.jpeg",
    tag: "Marca",
    title: "Sweater negro con logo Servipro",
  },
  {
    src: "/assets/ppt/image-11-2.jpg",
    tag: "Industrial",
    title: "Trabajo técnico en acceso controlado",
  },
  {
    src: "/assets/ppt/image-10-2.jpg",
    tag: "Industrial",
    title: "Operación de silos y graneleros",
  },
  {
    src: "/assets/ppt/image-1-1.jpg",
    tag: "Industrial",
    title: "Limpieza en zona técnica",
  },
  {
    src: "/assets/ppt/image-9-3.jpeg",
    tag: "Marca",
    title: "Uniforme operativo identificado",
  },
];

const sectors = [
  "Agroindustria y granos",
  "Logística y distribución",
  "Construcción e inmobiliario",
  "Cosmética y retail",
  "Bodegas de alto tránsito",
  "Centros de almacenamiento",
];

const faqs = [
  {
    question: "¿Atienden silos y graneleros?",
    answer:
      "Sí. El servicio se planifica con levantamiento técnico, revisión de riesgos, EPP, permisos de ingreso y cierre con evidencia.",
  },
  {
    question: "¿Pueden trabajar sin detener la operación?",
    answer:
      "Se puede coordinar por ventanas, turnos, paradas técnicas o frecuencia recurrente, según el nivel de riesgo y acceso del área.",
  },
  {
    question: "¿El personal va uniformado?",
    answer:
      "Sí. La presentación profesional incluye sweater negro con logo, identificación, EPP según el área y supervisión operativa.",
  },
  {
    question: "¿Entregan fotos o reporte?",
    answer:
      "Sí. El cierre puede incluir registro fotográfico, lista de equipos/productos, hallazgos y recomendaciones de mantenimiento preventivo.",
  },
];

const stats = [
  ["2013", "inicio de operaciones"],
  ["5", "etapas de control"],
  ["507", "enfoque local Panamá"],
];

export default function Home() {
  const [heroIndex, setHeroIndex] = useState(0);
  const [activeService, setActiveService] = useState(serviceLines[0].id);
  const [activeStep, setActiveStep] = useState(0);
  const [galleryFilter, setGalleryFilter] = useState("Todos");
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setHeroIndex((current) => (current + 1) % heroSlides.length);
    }, 5200);

    return () => window.clearInterval(timer);
  }, []);

  const currentHero = heroSlides[heroIndex];
  const currentService =
    serviceLines.find((service) => service.id === activeService) ??
    serviceLines[0];
  const galleryFilters = ["Todos", ...Array.from(new Set(gallery.map((item) => item.tag)))];
  const filteredGallery = useMemo(
    () =>
      galleryFilter === "Todos"
        ? gallery
        : gallery.filter((item) => item.tag === galleryFilter),
    [galleryFilter],
  );

  return (
    <main className="bg-[#f4f7f8] text-[#07111f]">
      <header className="fixed left-0 right-0 top-0 z-30 border-b border-white/20 bg-[#07111f]/88 text-white backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-8">
          <a
            href="#inicio"
            className="flex min-w-0 items-center gap-3"
            aria-label="Servipro Limpieza 507"
          >
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[8px] bg-white p-1.5">
              <img
                src="/assets/servipro-logo.png"
                alt=""
                className="h-full w-full object-contain"
              />
            </span>
            <span className="truncate text-sm font-black leading-5 sm:text-base">
              Servipro Limpieza 507
            </span>
          </a>
          <div className="hidden items-center gap-7 text-sm font-bold text-white/80 lg:flex">
            <a href="#servicios" className="hover:text-white">
              Servicios
            </a>
            <a href="#metodo" className="hover:text-white">
              Método
            </a>
            <a href="#galeria" className="hover:text-white">
              Fotos
            </a>
            <a href="#contacto" className="hover:text-white">
              Cotizar
            </a>
          </div>
          <a
            href={whatsappHref}
            className="shrink-0 rounded-[8px] bg-[#20c4e8] px-4 py-2 text-sm font-black text-[#04111d] shadow-sm transition hover:bg-white"
          >
            WhatsApp
          </a>
        </nav>
      </header>

      <section
        id="inicio"
        className="relative min-h-[86svh] overflow-hidden bg-[#07111f] px-4 pb-8 pt-28 text-white sm:px-8 lg:pb-10"
      >
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-700"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(7,17,31,.94) 0%, rgba(7,17,31,.76) 48%, rgba(7,17,31,.22) 100%), url('${currentHero.image}')`,
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#07111f] to-transparent" />

        <div className="relative mx-auto grid min-h-[calc(86svh-7rem)] max-w-7xl gap-8 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-end">
          <div className="max-w-3xl self-center lg:self-end">
            <p className="inline-flex rounded-[8px] border border-white/25 bg-white/8 px-3 py-2 text-sm font-black text-[#9ee9f8]">
              {currentHero.eyebrow}
            </p>
            <h1 className="mt-5 text-4xl font-black leading-[1.03] sm:text-6xl lg:text-7xl">
              {currentHero.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/84 sm:text-xl">
              {currentHero.text}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappHref}
                className="rounded-[8px] bg-[#20c4e8] px-6 py-4 text-center text-base font-black text-[#04111d] shadow-lg shadow-black/20 transition hover:bg-white"
              >
                Cotizar por WhatsApp
              </a>
              <a
                href="#servicios"
                className="rounded-[8px] border border-white/30 px-6 py-4 text-center text-base font-black text-white transition hover:border-white hover:bg-white/10"
              >
                Ver especialidades
              </a>
            </div>
            <div className="mt-7 flex gap-2" aria-label="Cambiar imagen principal">
              {heroSlides.map((slide, index) => (
                <button
                  key={slide.title}
                  type="button"
                  onClick={() => setHeroIndex(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    index === heroIndex ? "w-12 bg-[#20c4e8]" : "w-5 bg-white/35"
                  }`}
                  aria-label={`Ver ${slide.eyebrow}`}
                />
              ))}
            </div>
          </div>

          <aside className="hidden gap-3 self-end text-sm sm:grid sm:grid-cols-3 lg:grid-cols-1">
            {stats.map(([value, label]) => (
              <div
                key={label}
                className="rounded-[8px] border border-white/18 bg-white/12 p-4 backdrop-blur"
              >
                <strong className="block text-3xl font-black text-[#9ee9f8]">
                  {value}
                </strong>
                <span className="mt-1 block text-white/80">{label}</span>
              </div>
            ))}
          </aside>
        </div>
      </section>

      <section className="border-b border-[#dbe5e8] bg-white px-4 py-7 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-4">
          {[
            "Personal uniformado con logo",
            "Protocolos para áreas críticas",
            "Reporte de hallazgos y evidencia",
            "Frecuencia por proyecto o contrato",
          ].map((item) => (
            <div key={item} className="flex items-center gap-3 text-sm font-black">
              <span className="h-2.5 w-2.5 rounded-full bg-[#18a058]" />
              {item}
            </div>
          ))}
        </div>
      </section>

      <section id="servicios" className="px-4 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-sm font-black text-[#0b6ec7]">
                Especialización industrial
              </p>
              <h2 className="mt-3 text-4xl font-black leading-tight sm:text-5xl">
                Servicios para operaciones donde la limpieza impacta seguridad y producto.
              </h2>
            </div>
            <p className="text-lg leading-8 text-[#445765]">
              Servipro combina limpieza base, cuadrillas por contrato y servicios
              técnicos para bodegas, graneleros, silos y espacios de acceso controlado.
            </p>
          </div>

          <div className="mt-9 flex gap-2 overflow-x-auto pb-2">
            {serviceLines.map((service) => (
              <button
                key={service.id}
                type="button"
                onClick={() => setActiveService(service.id)}
                className={`shrink-0 rounded-[8px] border px-4 py-3 text-sm font-black transition ${
                  activeService === service.id
                    ? "border-[#07111f] bg-[#07111f] text-white"
                    : "border-[#cedde4] bg-white text-[#07111f] hover:border-[#20c4e8]"
                }`}
              >
                {service.label}
              </button>
            ))}
          </div>

          <div className="mt-6 grid overflow-hidden rounded-[8px] border border-[#d6e3e8] bg-white shadow-sm lg:grid-cols-[.95fr_1.05fr]">
            <div className="p-6 sm:p-8">
              <h3 className="text-3xl font-black leading-tight">
                {currentService.title}
              </h3>
              <p className="mt-5 text-lg leading-8 text-[#445765]">
                {currentService.text}
              </p>
              <div className="mt-7 grid gap-3">
                {currentService.bullets.map((item) => (
                  <div
                    key={item}
                    className="rounded-[8px] border border-[#dbe5e8] bg-[#f6fafb] p-4 text-sm font-bold"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <img
              src={currentService.image}
              alt={currentService.title}
              className="h-full min-h-[320px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section id="metodo" className="bg-[#07111f] px-4 py-16 text-white sm:px-8 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-black text-[#9ee9f8]">
                Metodología de control
              </p>
              <h2 className="mt-3 text-4xl font-black leading-tight sm:text-5xl">
                Cinco etapas para controlar alcance, tiempos, seguridad y calidad.
              </h2>
              <p className="mt-5 text-lg leading-8 text-white/74">
                La metodología permite limpiar sin improvisar: se planifica el
                riesgo, se ejecuta con supervisión y se entrega evidencia.
              </p>
              <figure className="mt-8 overflow-hidden rounded-[8px] border border-white/14">
                <img
                  src="/assets/ppt/image-11-2.jpg"
                  alt="Servicio técnico de limpieza en espacio confinado"
                  className="aspect-[4/3] w-full object-cover"
                />
              </figure>
            </div>

            <div className="grid gap-3">
              {processSteps.map((item, index) => (
                <button
                  key={item.step}
                  type="button"
                  onClick={() => setActiveStep(index)}
                  className={`rounded-[8px] border p-5 text-left transition ${
                    activeStep === index
                      ? "border-[#20c4e8] bg-white text-[#07111f]"
                      : "border-white/14 bg-white/8 text-white hover:bg-white/12"
                  }`}
                >
                  <span
                    className={`text-sm font-black ${
                      activeStep === index ? "text-[#0b6ec7]" : "text-[#9ee9f8]"
                    }`}
                  >
                    {item.step}
                  </span>
                  <strong className="mt-2 block text-2xl font-black">
                    {item.title}
                  </strong>
                  {activeStep === index && (
                    <p className="mt-3 leading-7 text-[#445765]">{item.text}</p>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="galeria" className="px-4 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-black text-[#0b6ec7]">Fotos reales</p>
              <h2 className="mt-3 text-4xl font-black leading-tight sm:text-5xl">
                Equipo, uniforme y operación técnica en campo.
              </h2>
            </div>
            <div className="flex gap-2 overflow-x-auto pb-1">
              {galleryFilters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setGalleryFilter(filter)}
                  className={`shrink-0 rounded-[8px] border px-4 py-3 text-sm font-black transition ${
                    galleryFilter === filter
                      ? "border-[#18a058] bg-[#18a058] text-white"
                      : "border-[#cedde4] bg-white hover:border-[#18a058]"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredGallery.map((item) => (
              <figure
                key={`${item.src}-${item.title}`}
                className="group overflow-hidden rounded-[8px] border border-[#d6e3e8] bg-white shadow-sm"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                />
                <figcaption className="flex items-center justify-between gap-3 p-4">
                  <span className="text-sm font-black text-[#0b6ec7]">
                    {item.tag}
                  </span>
                  <strong className="text-right text-sm font-black">
                    {item.title}
                  </strong>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#dbe5e8] bg-white px-4 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.95fr_1.05fr]">
          <div>
            <p className="text-sm font-black text-[#0b6ec7]">Misión y visión</p>
            <h2 className="mt-3 text-4xl font-black leading-tight sm:text-5xl">
              Limpieza confiable, segura y adaptada a cada operación.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#445765]">
              La meta es ser un aliado operativo de referencia en Panamá para
              oficinas, bodegas, limpiezas profundas e instalaciones industriales
              de alto tránsito.
            </p>
          </div>
          <div className="grid gap-4">
            {sectors.map((sector) => (
              <div
                key={sector}
                className="rounded-[8px] border border-[#d6e3e8] bg-[#f6fafb] px-5 py-4 text-base font-black"
              >
                {sector}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.85fr_1.15fr]">
          <div>
            <p className="text-sm font-black text-[#0b6ec7]">
              Preguntas comerciales
            </p>
            <h2 className="mt-3 text-4xl font-black leading-tight sm:text-5xl">
              Respuestas rápidas para cotizar con confianza.
            </h2>
          </div>
          <div className="grid gap-3">
            {faqs.map((faq, index) => (
              <button
                key={faq.question}
                type="button"
                onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                className="rounded-[8px] border border-[#d6e3e8] bg-white p-5 text-left shadow-sm"
              >
                <span className="flex items-center justify-between gap-4">
                  <strong className="text-lg font-black">{faq.question}</strong>
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-[8px] bg-[#07111f] text-lg font-black text-white">
                    {openFaq === index ? "-" : "+"}
                  </span>
                </span>
                {openFaq === index && (
                  <span className="mt-4 block leading-7 text-[#445765]">
                    {faq.answer}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="bg-white px-4 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[8px] border border-[#d6e3e8] bg-[#07111f] text-white shadow-sm lg:grid-cols-[1fr_.78fr]">
          <div className="p-6 sm:p-10">
            <p className="text-sm font-black text-[#9ee9f8]">Cotización</p>
            <h2 className="mt-3 text-4xl font-black leading-tight sm:text-5xl">
              Comparte el tipo de instalación y armamos el plan operativo.
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/74">
              Para responder mejor, envía ubicación en Panamá, tipo de área,
              metraje aproximado, frecuencia deseada, riesgos conocidos y fecha
              ideal de inicio.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappHref}
                className="rounded-[8px] bg-[#18a058] px-6 py-4 text-center text-base font-black text-white transition hover:bg-[#127a43]"
              >
                Escribir al +507 6995-0464
              </a>
              <a
                href="#galeria"
                className="rounded-[8px] border border-white/25 px-6 py-4 text-center text-base font-black text-white transition hover:bg-white/10"
              >
                Ver fotos del equipo
              </a>
            </div>
          </div>
          <div className="bg-white p-6 text-[#07111f] sm:p-8">
            <img
              src="/assets/servipro-logo.png"
              alt="Servipro Limpieza 507"
              className="h-auto w-full max-w-[340px]"
            />
            <figure className="mt-7 overflow-hidden rounded-[8px] border border-[#d6e3e8]">
              <img
                src="/assets/ppt/image-10-4.jpeg"
                alt="Persona uniformada con sweater negro y logo Servipro"
                className="aspect-[4/3] w-full object-cover"
              />
            </figure>
            <p className="mt-5 leading-7 text-[#445765]">
              Personal uniformado, supervisión, EPP y evidencia para servicios
              industriales, comerciales y logísticos.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
