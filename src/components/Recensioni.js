"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';


const slides = [
    '/recensioni/recensione_1.jpg',
    '/recensioni/recensione_2.jpg',
    '/recensioni/recensione_3.jpg',
    '/recensioni/recensione_4.jpg',
    '/recensioni/recensione_5.jpg',
    '/recensioni/recensione_6.jpg',
    '/recensioni/recensione_7.jpg',
    '/recensioni/recensione_8.jpg',
    '/recensioni/recensione_9.jpg',
    '/recensioni/recensione_10.jpg',
    '/recensioni/recensione_11.jpg',
    '/recensioni/recensione_12.jpg',
    '/recensioni/recensione_13.jpg',
    '/recensioni/recensione_14.jpg',
    '/recensioni/recensione_15.jpg',
    '/recensioni/recensione_16.jpg',
    '/recensioni/recensione_17.jpg',
    '/recensioni/recensione_18.jpg',
    '/recensioni/recensione_19.jpg',
    '/recensioni/recensione_20.jpg',
];

const Recensioni = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: true,
            align: 'center',
        },
        // Aggiunge lo scorrimento automatico ogni 4 secondi.
        // Si ferma quando il mouse è sopra e quando l'utente interagisce.
        [Autoplay({ delay: 4000, stopOnMouseEnter: true, stopOnInteraction: false })]
    );
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState([]);

    const scrollTo = useCallback((index) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi, setSelectedIndex]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        setScrollSnaps(emblaApi.scrollSnapList());
        emblaApi.on('select', onSelect);
        emblaApi.on('reInit', onSelect);
    }, [emblaApi, setScrollSnaps, onSelect]);

    return (
        <section className="w-full max-w-5xl text-center mt-16 md:mt-24">
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-700 mb-12">
                Dicono di me
            </h2>
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex items-center -ml-4">
                    {slides.map((src, index) => (
                        <div
                            className="relative flex-[0_0_70%] md:flex-[0_0_50%] min-w-0 pl-4"
                            key={index}
                        >
                            <div
                                className={`relative h-80 w-full rounded-lg overflow-hidden shadow-lg transition-all duration-500 ease-in-out ${index === selectedIndex ? 'scale-100 opacity-100' : 'scale-90 opacity-60'
                                    }`}
                            >
                                <Image
                                    src={src}
                                    alt={`Recensione ${index + 1}`}
                                    fill
                                    style={{ objectFit: "contain" }}
                                    sizes="(max-width: 768px) 70vw, 50vw"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-center mt-6">
                {scrollSnaps.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => scrollTo(index)}
                        className={`w-3 h-3 rounded-full mx-1 transition-colors ${index === selectedIndex ? 'bg-emerald-700' : 'bg-slate-300'
                            }`}
                        aria-label={`Vai alla recensione ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default Recensioni;