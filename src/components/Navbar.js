"use client"; // Necessario per gestire lo stato (aperto/chiuso) del menu in Next.js

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
    // Stato per controllare se il menu mobile è aperto o chiuso
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Funzione per chiudere il menu quando si clicca su un link (migliora l'UX)
    const closeMobileMenu = () => setIsMobileMenuOpen(false);

    return (
        <nav className="bg-white border-b border-slate-100 sticky top-0 z-50 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">

                    {/* LOGO / NOME */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center space-x-3 text-xl font-bold text-emerald-700 tracking-tight" onClick={closeMobileMenu}>
                            <Image
                                src="/logo.jpg"
                                alt="Logo Dott.ssa Linda Perissinotto"
                                width={50}
                                height={50}
                                className="h-15 w-15"
                            />
                            <span>
                                Dott.ssa Linda Perissinotto
                                <span className="text-slate-400 font-light hidden sm:inline"> | Nutrizionista</span>
                            </span>
                        </Link>
                    </div>

                    {/* LINK DI NAVIGAZIONE (DESKTOP) */}
                    <div className="hidden md:flex space-x-8">
                        <Link href="/" className="text-slate-600 hover:text-emerald-700 font-medium transition-colors">
                            Home
                        </Link>
                        <Link href="/chi-sono" className="text-slate-600 hover:text-emerald-700 font-medium transition-colors">
                            Chi Sono
                        </Link>
                        <Link href="/servizi" className="text-slate-600 hover:text-emerald-700 font-medium transition-colors">
                            Servizi
                        </Link>
                    </div>

                    {/* BOTTONE PRENOTAZIONI (DESKTOP) */}
                    <div className="hidden md:block">
                        <Link
                            href="https://www.miodottore.it/linda-perissinotto/nutrizionista/padova"
                            className="bg-emerald-700 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg font-medium shadow-sm transition-all"
                        >
                            Prenota Visita
                        </Link>
                    </div>

                    {/* BOTTONE HAMBURGER MENU (MOBILE) */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-slate-600 hover:text-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-md p-2"
                            aria-label="Apri menu principale"
                        >
                            {/* Cambia l'icona da hamburger a "X" quando è aperto */}
                            {isMobileMenuOpen ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>

                </div>
            </div>

            {/* MENU A DISCESA (MOBILE) */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white border-t border-slate-100 shadow-lg absolute w-full left-0">
                    <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
                        <Link
                            href="/"
                            onClick={closeMobileMenu}
                            className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:text-emerald-700 hover:bg-emerald-50 transition-colors"
                        >
                            Home
                        </Link>
                        <Link
                            href="/chi-sono"
                            onClick={closeMobileMenu}
                            className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:text-emerald-700 hover:bg-emerald-50 transition-colors"
                        >
                            Chi Sono
                        </Link>
                        <Link
                            href="/servizi"
                            onClick={closeMobileMenu}
                            className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:text-emerald-700 hover:bg-emerald-50 transition-colors"
                        >
                            Servizi
                        </Link>

                        <div className="pt-4">
                            <Link
                                href="https://www.miodottore.it/linda-perissinotto/nutrizionista/padova"
                                onClick={closeMobileMenu}
                                className="block text-center w-full bg-emerald-700 hover:bg-emerald-700 text-white px-4 py-3 rounded-lg font-medium shadow-sm transition-all"
                            >
                                Prenota Visita
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}