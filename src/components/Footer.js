import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-emerald-50 border-t border-slate-200 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

                    {/* COLONNA 1: Nome e professione */}
                    <div>
                        <h3 className="text-lg font-bold text-emerald-700 mb-4">
                            Dott.ssa Linda Perissinotto
                        </h3>
                        <p className="text-slate-600 leading-relaxed">
                            Biologa Nutrizionista<br />
                            Riceve a Padova, Campodarsego e Mirano.
                        </p>
                    </div>

                    {/* COLONNA 2: Contatti rapidi */}
                    <div>
                        <h3 className="text-lg font-bold text-emerald-700 mb-4">
                            Contatti
                        </h3>
                        <ul className="space-y-3 text-slate-600">
                            <li>

                                <a href="mailto:perissinottolinda.nutrizionista@gmail.com" className="hover:text-emerald-600 transition-colors flex items-center justify-center md:justify-start gap-2">
                                    <span>✉️</span> perissinottolinda.nutrizionista@gmail.com
                                </a>
                            </li>
                            <li>

                                <a href="tel:+393493532551" className="hover:text-emerald-600 transition-colors flex items-center justify-center md:justify-start gap-2">
                                    <span>📞</span> +39 349 3532551
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* COLONNA 3: Dati Fiscali e Partita IVA */}
                    <div>
                        <h3 className="text-lg font-bold text-emerald-700 mb-4">
                            Dati Fiscali
                        </h3>
                        <p className="text-slate-600 leading-relaxed">
                            P.IVA: 05604880285<br />
                            Ordine dei Biologi del Triveneto n. A3498
                        </p>
                    </div>

                </div>

                {/* Copyright */}
                <div className="mt-12 pt-8 border-t border-slate-200 text-center text-sm text-slate-500">
                    © {new Date().getFullYear()} Dott.ssa Linda Perissinotto. Tutti i diritti riservati.
                </div>
            </div>
        </footer>
    );
}