"use client"; // Necessario per gestire lo stato (apertura/chiusura) in Next.js

import { useState } from "react";

export default function Faq() {
    // Array con le domande e risposte (puoi modificarle come preferisci)
    const faqs = [
        {
            domanda: "Come si svolge la prima visita?",
            risposta: `Durante la prima visita viene eseguita un'accurata anamnesi dello stato di salute del paziente e un'analisi dello stile di vita, indispensabili per elaborare un piano nutrizionale su misura. Il piano viene elaborato e consegnato entro pochi giorni, corredato da un ricettario personalizzato e da un esempio di menù settimanale per guidare il paziente nei primi passi.`
        },
        {
            domanda: "Posso seguire un piano alimentare se sono in gravidanza e allattamento?",
            risposta: "Assolutamente si. Il percorso prevede un monitoraggio costante e una modulazione del piano nutrizionale all'inizio di ciascun trimestre, così da adeguare l'apporto calorico e di micronutrienti alle specifiche richieste di ogni periodo gestazionale. L'assistenza nutrizionale prosegue con le medesime attenzioni durante la fase di allattamento ed è estesa, su richiesta, anche al periodo dello svezzamento."
        },
        {
            domanda: "Ogni quanto si fanno i controlli?",
            risposta: "Solitamente i controlli vengono fissati ogni 3-4 settimane, ma valuteremo insieme la frequenza in base alle tue necessità e ai tuoi progressi."
        }
    ];

    // Stato per tenere traccia di quale FAQ è aperta
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="mt-16 border-t pt-10 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Domande Frequenti</h2>
            <div className="max-w-3xl mx-auto space-y-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="border rounded-lg overflow-hidden">
                        <button
                            onClick={() => toggleFaq(index)}
                            className="w-full text-left px-6 py-4 bg-gray-50 hover:bg-gray-100 flex justify-between items-center transition-colors font-medium text-gray-700"
                        >
                            {faq.domanda}
                            <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
                        </button>

                        {openIndex === index && (
                            <div className="px-6 py-4 bg-white text-gray-600 leading-relaxed">
                                {faq.risposta}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}