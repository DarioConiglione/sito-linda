
"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const slides = Array.from(
    { length: 20 },
    (_, i) => `/recensioni/recensione_${i + 1}.jpg`
);

const Recensioni = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: true,
            align: "center",
        },
        [
            Autoplay({
                delay: 4000,
                stopOnMouseEnter: true,
                stopOnInteraction: false,
            }),
        ]
    );

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState([]);

    const scrollTo = useCallback(
        (index) => emblaApi?.scrollTo(index),
        [emblaApi]
    );

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;

        onSelect();
        setScrollSnaps(emblaApi.scrollSnapList());

        emblaApi.on("select", onSelect);
        emblaApi.on("reInit", onSelect);

        return () => {
            emblaApi.off("select", onSelect);
            emblaApi.off("reInit", onSelect);
        };
    }, [emblaApi, onSelect]);

    return (
        <section className="w-full max-w-5xl mx-auto text-center mt-16 md:mt-24">
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-700 mb-12">
                Dicono di me
            </h2>

            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex items-center -ml-4">
                    {slides.map((src, index) => (
                        <div
                            key={index}
                            className="flex-[0_0_70%] md:flex-[0_0_50%] min-w-0 pl-4 flex justify-center items-center"
                        >
                            <div
                                className={`flex justify-center items-center w-full transition-all duration-500 ease-in-out ${index === selectedIndex
                                        ? "scale-100 opacity-100"
                                        : "scale-90 opacity-60"
                                    }`}
                            >
                                <Image
                                    src={src}
                                    alt={`Recensione ${index + 1}`}
                                    width={600}
                                    height={800}
                                    className="w-auto h-auto max-w-full max-h-[400px] rounded-xl"
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
                        className={`w-3 h-3 rounded-full mx-1 transition-colors ${index === selectedIndex
                                ? "bg-emerald-700"
                                : "bg-slate-300"
                            }`}
                        aria-label={`Vai alla recensione ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default Recensioni;
