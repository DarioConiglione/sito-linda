import Image from 'next/image';
import Recensioni from '../components/Recensioni';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8 md:p-16 lg:p-24 bg-slate-50 text-slate-800">
      {/* Sezione Foto e Introduzione */}
      <section className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-16 md:mb-24">
        <div className="relative h-80 md:h-[550px] w-full rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/Foto_studio.jpg"
            alt="Studio della Dott.ssa Linda Perissinotto"
            fill
            style={{
              objectFit: "cover",
              objectPosition: "top"
            }}
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
        <div className="flex flex-col justify-center text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-emerald-700 mb-4">
            Dott.ssa Linda Perissinotto
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-700 mb-6">
            Biologa Nutrizionista
          </h2>
          <p className="text-lg text-slate-600 font-semibold">
            “Mangiare bene significa prendersi cura di sé:
            tutto parte da una buona educazione
            alimentare e da un legame sano e consapevole
            con il cibo e con il proprio corpo."
          </p>
        </div>
      </section>

      {/* Sezione Approccio */}
      <section className="w-full max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-emerald-700 mb-4">
          Il Mio Approccio
        </h2>
        <p className="text-lg text-slate-600 leading-relaxed font-semibold">
          Il mio approccio si fonda sull’ascolto del corpo e su un’educazione
          alimentare consapevole.

          Propongo percorsi personalizzati che ti accompagnano verso il
          benessere, senza diete restrittive, nel pieno rispetto dei tuoi bisogni e
          della tua individualità.

          Offro consulenze in diversi ambiti: alimentazione vegetale, intuitive
          eating e supporto nei disturbi del comportamento alimentare.

          Collaboro con scuole per la realizzazione di progetti dedicati
          all’educazione alimentare e alla prevenzione dei DCA.
        </p>
      </section>

      {/* Sezione Recensioni */}
      <Recensioni />

      {/* --- INIZIO SEZIONE STUDI / CONTATTI --- */}
      <section className="py-16 bg-white mt-8 md:mt-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-700 mb-4">I Miei Studi</h2>
            <p className="text-gray-600">Ricevo su appuntamento in diverse sedi per essere più vicina alle tue esigenze.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Studio 1: Padova */}
            <div className="bg-emerald-50 p-8 rounded-2xl text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-4">
                {/* Icona Segnaposto (SVG) */}
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.242-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Padova</h3>
              <p className="text-gray-600 leading-relaxed">
                Via Tiziano Minio, 23<br />
                35134 Padova (PD)
              </p>
            </div>

            {/* Studio 2: Campodarsego */}
            <div className="bg-emerald-50 p-8 rounded-2xl text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.242-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Campodarsego</h3>
              <p className="text-gray-600 leading-relaxed">
                Via Manzoni, 9/5<br />
                35011 Campodarsego (PD)
              </p>
            </div>

            {/* Studio 3: Mirano (Prossima Apertura) */}
            <div className="border-2 border-dashed border-gray-300 p-8 rounded-2xl text-center bg-gray-50/50">
              <div className="w-12 h-12 bg-gray-200 text-gray-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-500 mb-2">Mirano (VE)</h3>
              <span className="inline-block bg-gray-200 text-gray-700 text-sm font-medium px-3 py-1 rounded-full mt-1">
                Prossima apertura
              </span>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
