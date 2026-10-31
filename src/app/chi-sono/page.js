import Image from 'next/image';

export default function ChiSono() {
    return (
        <main className="container mx-auto px-6 py-12">

            {/* Intestazione */}
            <h1 className="text-4xl font-bold text-emerald-800 mb-8">Benvenutə nel mio spazio.</h1>

            <div className="space-y-16 text-lg text-emerald-700 leading-relaxed">
                <div>
                    <p>
                        Credo profondamente che l'alimentazione non debba mai essere vissuta come una privazione, ma come il più potente strumento a nostra disposizione per migliorare la qualità della vita.
                    </p>
                    <p>
                        La mia missione è proprio questa: guidarti verso uno stile di vita più sano e consapevole, aiutandoti a fare pace con il cibo e a riacquistare, giorno dopo giorno, la piena fiducia nel tuo corpo.
                    </p>
                </div>

                {/* Sezione: Il mio metodo */}
                <div className="grid md:grid-cols-2 gap-12 items-center bg-emerald-50 p-8 md:p-12 rounded-3xl">
                    <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden h-150">
                        <Image src="/metod_immagine.jpg" alt="Il mio metodo" layout="fill" objectFit="cover" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold text-emerald-800 mb-4">Il mio metodo: equilibrio, senza stravolgimenti</h2>
                        <div className="space-y-4">
                            <p>
                                So bene quanto possa essere faticoso iniziare un percorso nutrizionale. Per questo, nel mio studio ho voluto creare un ambiente intimo, morbido e accogliente, lontano dalla freddezza delle visite puramente cliniche.
                            </p>
                            <p>
                                Il mio approccio è olistico ed empatico. Non lavoro con protocolli rigidi o diete pre-stampate, ma mi metto in ascolto delle tue reali esigenze. Il mio obiettivo è insegnarti a mangiare in maniera bilanciata, costruendo insieme a te nuove abitudini che si incastrino perfettamente nella tua routine quotidiana, senza mai stravolgerla.
                            </p>
                        </div>
                        <a
                            href="https://www.miodottore.it/linda-perissinotto/nutrizionista/padova"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-8 px-7 py-3 bg-emerald-700 text-white font-semibold rounded-full hover:bg-emerald-800 hover:shadow-lg transition-all duration-300 text-center"
                        >
                            Prenota la tua consulenza gratuita!
                        </a>
                    </div>
                </div>

                {/* Sezione: Il mio percorso */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden md:order-last h-150">
                        <Image src="/immagine_due.jpg" alt="Il mio percorso" layout="fill" objectFit="cover" />
                    </div>
                    <div className="md:order-first">
                        <h2 className="text-2xl font-semibold text-emerald-800 mb-4">Il mio percorso: dalla natura alla nutrizione clinica</h2>
                        <div className="space-y-4">
                            <p>
                                La mia formazione è il riflesso della mia visione a 360 gradi del benessere umano. Il mio viaggio è iniziato esplorando il potere della natura: mi sono laureata con lode in <strong className="text-emerald-800 font-semibold">Scienze Farmaceutiche Applicate</strong> (curriculum Tecniche Erboristiche) e ho approfondito questa passione con un Master, sempre conseguito con il massimo dei voti, in <strong className="text-emerald-800 font-semibold">Medicine Complementari e Terapie Integrate</strong>.
                            </p>
                            <p>
                                Questa solida base olistica mi ha spinta ad andare ancora più a fondo, dedicandomi alla clinica e conseguendo, con lode, la Laurea Magistrale in <strong className="text-emerald-800 font-semibold">Scienze della Nutrizione Umana</strong> (curriculum Nutraceutica), per poi abilitarmi alla professione iscrivendomi all'Ordine dei Biologi.
                            </p>
                        </div>
                        <a
                            href="https://www.instagram.com/dssa.lindaperissinotto/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-8 px-7 py-3 bg-emerald-700 text-white font-semibold rounded-full hover:bg-emerald-800 hover:shadow-lg transition-all duration-300 text-center"
                        >
                            Conosciamoci meglio!
                        </a>
                    </div>
                </div>

                {/* Lista Specializzazioni */}
                <div className="grid md:grid-cols-2 gap-12 items-center bg-emerald-50 p-8 md:p-12 rounded-3xl">
                    <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden h-150">
                        <Image src="/libri.jpg" alt="Ambiti di specializzazione" layout="fill" objectFit="cover" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold text-emerald-800 mb-4">Ambiti di specializzazione</h2>
                        <div className="space-y-4">
                            <p>
                                Oggi continuo a studiare ed aggiornarmi costantemente per offrirti un supporto sempre più mirato e competente. Negli anni ho perfezionato la mia pratica clinica specializzandomi in ambiti che mi stanno particolarmente a cuore:
                            </p>
                            <ul className="list-disc pl-6 space-y-3 mt-4">
                                <li><strong className="text-emerald-800 font-semibold">Intuitive Eating:</strong> per aiutarti a ritrovare un rapporto sereno e intuitivo con il cibo, libero dai sensi di colpa.</li>
                                <li><strong className="text-emerald-800 font-semibold">Alimentazione Vegetale:</strong> per guidare con competenza chi sceglie, o vuole avvicinarsi, a un'alimentazione plant-based in tutte le fasi della vita.</li>
                                <li><strong className="text-emerald-800 font-semibold">Educazione alimentare:</strong> dal 2024 seguo progetti nelle scuole elementari e dell'infanzia per aiutare i bambini e i genitori ad avvicinarsi ad un'alimentazione sana e bilanciata.</li>
                            </ul>
                        </div>
                        <a
                            href="https://wa.me/393516651342"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-8 px-7 py-3 bg-emerald-700 text-white font-semibold rounded-full hover:bg-emerald-800 hover:shadow-lg transition-all duration-300 text-center"
                        >
                            Contattami!
                        </a>
                    </div>
                </div>

                <p className="font-medium text-xl text-center mt-12 text-emerald-800 italic">
                    "Se cerchi un percorso fatto di ascolto, scienza e rispetto per i tuoi tempi, sei nel posto giusto."
                </p>
            </div>

        </main>
    );
}