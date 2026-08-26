'use client'; // Necessario per gestire lo stato (useState)

import { useState } from 'react';
import Image from 'next/image';

const servizi = [
    {
        id: 'consulenze',
        titolo: 'Consulenze nutrizionali personalizzate',
        immagine: '/consulenza_personalizzata.jpg',
        descrizione: 'Le consulenze nutrizionali possono essere svolte sia in ambulatorio che online, a seconda delle tue preferenze. La prima visita ha una durata di circa 60 minuti, durante i quali eseguiremo un’anamnesi del tuo stato di salute, analizzeremo insieme il tuo stile di vita e le abitudini alimentari per individuare le aree di miglioramento. Insieme, definiremo un piano alimentare personalizzato, pensato per adattarsi alle tue esigenze e ai tuoi obiettivi. Inoltre, ti fornirò un ricettario con idee gustose e pratiche per rendere più semplice e piacevole la tua esperienza in cucina. La preparazione del piano richiede qualche giorno, dopodiché ti consegnerò il documento direttamente tramite e-mail oppure videochiamata, così potremo chiarire subito eventuali dubbi. Le visite di controllo, della durata di circa 30 minuti, si svolgeranno ogni 3-4 settimane. In questi incontri monitoreremo i tuoi progressi e, se necessario, apporteremo modifiche al piano alimentare per assicurare risultati ottimali.'
    },
    {
        id: 'plant-based',
        titolo: 'Alimentazione vegetale e plant-based',
        immagine: '/alimentazione_vegetale.png',
        descrizione: 'Vuoi rendere la tua alimentazione più vegetale e sostenibile, senza rinunciare al gusto e all’equilibrio? Ti aiuterò a costruire pasti bilanciati, saporiti e adatti alle tue esigenze. Durante le visite approfondiremo insieme i principi del PiattoVeg, imparerai a conoscere i nutrienti chiave e a fare scelte consapevoli per la tua salute. Un’alimentazione vegetale può essere un valido supporto non solo per chi abbraccia uno stile di vita etico, ma anche per chi convive con patologie cardiovascolari, sindrome metabolica o condizioni infiammatorie croniche. E soprattutto… condivideremo tante ricette semplici, sane e buonissime da portare subito in tavola!'
    },
    {
        id: 'dca',
        titolo: 'Supporto nei Disturbi Alimentari',
        immagine: '/disturbi_alimentari.png',
        descrizione: 'Se hai sofferto o stai affrontando un disturbo alimentare, sai quanto il rapporto con il cibo possa diventare complesso e carico di emozioni. Il mio supporto nutrizionale non si concentra su diete o regole rigide, ma su un accompagnamento empatico e personalizzato, nel rispetto dei tuoi tempi e delle indicazioni del team che ti segue (psicologo, psichiatra, medico curante). Insieme lavoreremo per ricostruire un rapporto più sereno con l’alimentazione, riscoprendo i segnali del corpo, superando le paure legate al cibo e ritrovando fiducia in te stessə.'
    },
    {
        id: 'intuitiva',
        titolo: 'Alimentazione Intuitiva',
        immagine: '/intuiitive_eating.png',
        descrizione: 'Hai mai desiderato un rapporto più sereno con il cibo, senza diete rigide né sensi di colpa? Con l’alimentazione intuitiva ti accompagno in un percorso che ti aiuta a riconnetterti con i segnali del tuo corpo — fame, sazietà, desideri — e a fare pace con il cibo. L’obiettivo è lasciarsi alle spalle il ciclo delle restrizioni, superare la paura di alcuni alimenti e ritrovare libertà e fiducia nelle tue scelte alimentari. Insieme lavoreremo anche su un nuovo modo di vivere il movimento: non come compensazione, ma come piacere, cura di sé e benessere. È un approccio gentile, sostenibile e profondamente personale, che mette al centro il tuo vissuto e le tue esigenze. Senza regole imposte, solo ascolto, consapevolezza e libertà.'
    },
    {
        id: 'scuole',
        titolo: 'Progetti per le scuole',
        immagine: '/educazione_scuole.jpg',
        descrizione: 'Portare l’educazione alimentare tra i banchi di scuola significa offrire agli studenti strumenti concreti per sviluppare un rapporto sano e consapevole con il cibo. Realizzo percorsi rivolti a bambini, adolescenti, insegnanti e genitori, con un’attenzione particolare alla prevenzione dei disturbi alimentari, alla promozione del benessere e all’inclusività alimentare. L’obiettivo è creare uno spazio di dialogo aperto e non giudicante, dove si possa parlare di alimentazione in modo positivo, equilibrato e scientificamente corretto. I contenuti vengono adattati in base all’età, al contesto scolastico e agli obiettivi educativi condivisi con il corpo docente.'
    }
];

export default function Servizi() {
    // Stato per il servizio cliccato (quello che mostra il testo a destra)
    const [attivo, setAttivo] = useState(servizi[0]);

    // Stato per il servizio su cui l'utente ha il mouse (quello che mostra l'immagine sotto)
    const [hoveredId, setHoveredId] = useState(null);

    return (
        <main className="max-w-7xl mx-auto px-4 py-12 md:py-24">
            <h1 className="text-3xl font-bold text-emerald-800 mb-12">I miei Servizi</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

                {/* COLONNA SINISTRA: LISTA SERVIZI */}
                <div className="flex flex-col space-y-6">
                    {servizi.map((servizio) => (
                        <div
                            key={servizio.id}
                            className="group cursor-pointer"
                            onMouseEnter={() => setHoveredId(servizio.id)}
                            onMouseLeave={() => setHoveredId(null)}
                            onClick={() => setAttivo(servizio)}
                        >
                            {/* Titolo Servizio */}
                            <h2 className={`text-2xl transition-all duration-300 font-medium ${attivo.id === servizio.id ? 'text-emerald-600' : 'text-slate-500 hover:text-emerald-500'
                                }`}>
                                {servizio.titolo}
                            </h2>

                            {/* Immagine che compare al passaggio del mouse (Hover Effect) */}
                            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${hoveredId === servizio.id ? 'max-h-80 mt-4 opacity-100' : 'max-h-0 opacity-0'
                                }`}>
                                <div className="relative w-full h-80 rounded-xl overflow-hidden border-2 border-emerald-100">
                                    <Image
                                        src={servizio.immagine}
                                        alt={servizio.titolo}
                                        fill
                                        style={{ objectFit: "contain" }}
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* COLONNA DESTRA: PARAGRAFO DEDICATO */}
                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-emerald-50 sticky top-32 min-h-[300px] flex flex-col justify-center">
                    <div key={attivo.id} className="animate-in fade-in slide-in-from-right-4 duration-500">
                        <span className="text-emerald-500 font-bold uppercase tracking-widest text-xs">Dettagli Servizio</span>
                        <h3 className="text-3xl font-bold text-emerald-800 mt-2 mb-6 leading-tight">
                            {attivo.titolo}
                        </h3>
                        <p className="text-slate-600 text-lg leading-relaxed italic">
                            "{attivo.descrizione}"
                        </p>
                    </div>
                </div>

            </div>
        </main>
    );
}