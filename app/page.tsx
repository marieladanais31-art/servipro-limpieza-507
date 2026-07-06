const whatsappMessage =
  "Hola Servipro Limpieza 507, quiero cotizar un servicio de limpieza para mi empresa en Panamá.";

const whatsappHref = `https://wa.me/?text=${encodeURIComponent(
  whatsappMessage,
)}`;

const services = [
  {
    title: "Oficinas e instituciones",
    text: "Rutinas diarias, interdiarias o por jornada para baños, áreas comunes, puestos de trabajo, recepción y salas.",
  },
  {
    title: "Bodegas y logística",
    text: "Limpieza de áreas operativas, circulación, polvo, residuos y superficies con personal identificado y EPP.",
  },
  {
    title: "Post obra y entregas",
    text: "Primeras entregas, fin de obra, pre mudanza y post mudanza para constructoras, inmobiliarias y comercios.",
  },
  {
    title: "Pisos y superficies",
    text: "Lavado, tratamiento y pulimiento de pisos, además de ventanas, escaleras, ascensores y alfombras.",
  },
  {
    title: "Insumos y soporte",
    text: "Suministro de consumibles, cafetería, materiales de limpieza y apoyo operativo según el alcance contratado.",
  },
  {
    title: "Fumigación con aliados",
    text: "Coordinación de servicios especializados mediante aliados, con una sola operación para el cliente.",
  },
];

const sectors = [
  "Oficinas corporativas",
  "Comercio y marcas",
  "Constructoras",
  "Bodegas",
  "Hoteles",
  "Instituciones",
  "Escuelas",
  "Proyectos inmobiliarios",
];

const process = [
  "Levantamiento de áreas",
  "Alcance, horarios y frecuencia",
  "Cotización y plan de arranque",
  "Inicio con supervisión y control",
];

const quality = [
  "Listas de chequeo por zona y frecuencia",
  "Personal uniformado, identificado y documentado",
  "Reemplazos y soporte ante ausencias",
  "Productos responsables cuando el alcance lo permite",
  "Ajustes operativos según retroalimentación",
];

export default function Home() {
  return (
    <main className="bg-[#f5f8fb] text-[#07111f]">
      <header className="fixed left-0 right-0 top-0 z-30 border-b border-white/20 bg-[#07111f]/85 text-white backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
          <a href="#inicio" className="flex items-center gap-3" aria-label="Servipro Limpieza 507">
            <span className="grid h-11 w-11 place-items-center rounded-[8px] bg-white p-1.5">
              <img
                src="/assets/servipro-logo.png"
                alt=""
                className="h-full w-full object-contain"
              />
            </span>
            <span className="text-sm font-semibold leading-5 sm:text-base">
              Servipro Limpieza 507
            </span>
          </a>
          <div className="hidden items-center gap-7 text-sm font-medium text-white/82 md:flex">
            <a href="#servicios" className="hover:text-white">
              Servicios
            </a>
            <a href="#proceso" className="hover:text-white">
              Proceso
            </a>
            <a href="#contacto" className="hover:text-white">
              Cotizar
            </a>
          </div>
          <a
            href={whatsappHref}
            className="rounded-[8px] bg-[#20c4e8] px-4 py-2 text-sm font-bold text-[#04111d] shadow-sm transition hover:bg-white"
          >
            WhatsApp
          </a>
        </nav>
      </header>

      <section
        id="inicio"
        className="relative flex min-h-[78svh] items-end overflow-hidden bg-[#07111f] px-5 pb-12 pt-32 text-white md:min-h-[82svh] md:pb-16"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(7,17,31,.94) 0%, rgba(7,17,31,.78) 42%, rgba(7,17,31,.36) 100%), url('/assets/servipro-uniforme.jpeg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="mx-auto grid w-full max-w-7xl gap-10 md:grid-cols-[minmax(0,1.02fr)_minmax(280px,.72fr)] md:items-end">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex rounded-[8px] border border-white/25 px-3 py-2 text-sm font-semibold text-[#9ee9f8]">
              Panamá · Empresas · Bodegas · Proyectos
            </p>
            <h1 className="text-5xl font-black leading-[1.03] sm:text-6xl lg:text-7xl">
              Servipro Limpieza 507
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85 sm:text-xl">
              Soluciones integrales de limpieza, mantenimiento e higiene con
              personal uniformado, supervisión operativa y respuesta flexible
              para mantener tus instalaciones listas para trabajar.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappHref}
                className="rounded-[8px] bg-[#20c4e8] px-6 py-4 text-center text-base font-extrabold text-[#04111d] shadow-lg shadow-black/20 transition hover:bg-white"
              >
                Solicitar cotización
              </a>
              <a
                href="#servicios"
                className="rounded-[8px] border border-white/30 px-6 py-4 text-center text-base font-bold text-white transition hover:border-white hover:bg-white/10"
              >
                Ver servicios
              </a>
            </div>
          </div>

          <div className="hidden gap-3 text-sm md:grid md:grid-cols-1">
            {[
              ["360°", "servicio integral"],
              ["2010", "experiencia base del sector"],
              ["507", "enfoque local Panamá"],
            ].map(([value, label]) => (
              <div
                key={label}
              className="rounded-[8px] border border-white/20 bg-white/10 p-4 backdrop-blur"
              >
                <strong className="block text-3xl font-black text-[#9ee9f8]">
                  {value}
                </strong>
                <span className="mt-1 block text-white/80">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#dce7ee] bg-white px-5 py-8">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
          {[
            "Personal identificado y documentado",
            "Horarios y frecuencia según tu operación",
            "Supervisión, checklist y seguimiento",
          ].map((item) => (
            <div key={item} className="flex items-center gap-3 text-sm font-bold">
              <span className="h-2.5 w-2.5 rounded-full bg-[#18a058]" />
              {item}
            </div>
          ))}
        </div>
      </section>

      <section id="servicios" className="px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-extrabold text-[#0b6ec7]">Servicios</p>
            <h2 className="mt-3 text-4xl font-black leading-tight sm:text-5xl">
              Una sola operación para limpiar, mantener y responder.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#435466]">
              Servipro ajusta cantidad de personal, equipos, insumos y horarios
              al movimiento real de cada cliente.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-[8px] border border-[#d9e5ed] bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-black">{service.title}</h3>
                <p className="mt-4 leading-7 text-[#526273]">{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#07111f] px-5 py-16 text-white sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-extrabold text-[#9ee9f8]">
              Imagen en campo
            </p>
            <h2 className="mt-3 text-4xl font-black leading-tight sm:text-5xl">
              Equipo visible, ordenado y listo para operar.
            </h2>
              <p className="mt-5 text-lg leading-8 text-white/75">
              El uniforme, el EPP y la supervisión comunican control desde el
              primer día. Para bodegas, proyectos y áreas de alto movimiento,
              la limpieza debe sostener seguridad, continuidad e imagen.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {quality.map((item) => (
                <div
                  key={item}
                  className="rounded-[8px] border border-white/15 bg-white/10 p-4 text-sm font-semibold text-white/85"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <figure className="overflow-hidden rounded-[8px] border border-white/12 bg-white/6">
            <img
              src="/assets/servipro-equipo-bodega.jpeg"
              alt="Equipo operativo de Servipro Limpieza 507 en una bodega de Panamá"
              className="aspect-[16/10] w-full object-cover"
            />
          </figure>
        </div>
      </section>

      <section id="proceso" className="bg-white px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <p className="text-sm font-extrabold text-[#0b6ec7]">Proceso</p>
              <h2 className="mt-3 text-4xl font-black leading-tight sm:text-5xl">
                De la visita al arranque sin improvisar.
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#435466]">
                La cotización parte de áreas, frecuencia, nivel de tráfico,
                insumos, tiempos y requerimientos de seguridad.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {process.map((step, index) => (
                <article
                  key={step}
                  className="rounded-[8px] border border-[#d9e5ed] bg-[#f8fbfd] p-6"
                >
                  <span className="text-sm font-black text-[#18a058]">
                    Paso {index + 1}
                  </span>
                  <h3 className="mt-3 text-2xl font-black">{step}</h3>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#dce7ee] bg-[#edf5f8] px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[.95fr_1.05fr] lg:items-start">
            <div>
              <p className="text-sm font-extrabold text-[#0b6ec7]">Sectores</p>
              <h2 className="mt-3 text-4xl font-black leading-tight sm:text-5xl">
                Cobertura para espacios donde la imagen y la continuidad importan.
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#435466]">
                Experiencia comercial en entornos de marca, operación recurrente
                y entregas de obra para clientes como Danais Natural Cosmetics,
                Gold Mill y constructoras.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {sectors.map((sector) => (
                <div
                  key={sector}
                  className="rounded-[8px] border border-[#d2e0e8] bg-white px-5 py-4 text-base font-bold shadow-sm"
                >
                  {sector}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contacto" className="bg-white px-5 py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[8px] border border-[#d9e5ed] bg-[#07111f] p-6 text-white sm:p-10 lg:grid-cols-[1fr_.78fr] lg:items-center">
          <div>
            <p className="text-sm font-extrabold text-[#9ee9f8]">
              Cotización
            </p>
            <h2 className="mt-3 text-4xl font-black leading-tight sm:text-5xl">
              Cuéntanos qué área necesitas limpiar y te armamos el plan.
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/75">
              Comparte tipo de espacio, metraje aproximado, frecuencia deseada,
              ubicación en Panamá y fecha ideal de inicio.
            </p>
          </div>

          <div className="rounded-[8px] bg-white p-6 text-[#07111f]">
            <img
              src="/assets/servipro-logo.png"
              alt="Servipro Limpieza 507"
              className="h-auto w-full max-w-[320px]"
            />
            <p className="mt-5 leading-7 text-[#435466]">
              Servicio profesional, personal uniformado y control operativo para
              empresas, bodegas, proyectos e instituciones.
            </p>
            <a
              href={whatsappHref}
              className="mt-6 block rounded-[8px] bg-[#18a058] px-5 py-4 text-center text-base font-extrabold text-white transition hover:bg-[#127a43]"
            >
              Enviar mensaje de cotización
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
