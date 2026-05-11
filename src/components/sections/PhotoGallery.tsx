"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, stagger, viewportOnce } from "@/lib/animations";

const PHOTOS = [
  {
    src: "/images/erkexin-lifestyle.jpg",
    alt: "Erkexin VIP — entorno natural y bienestar",
    caption: "Ingredientes naturales",
  },
  {
    src: "/images/erkexin-hero.jpg",
    alt: "Erkexin VIP — presentación premium",
    caption: "Calidad premium",
  },
  {
    src: "/images/erkexin-ambient.png",
    alt: "Erkexin VIP — ambiente exclusivo",
    caption: "Discreción total",
  },
];

export default function PhotoGallery() {
  return (
    <section className="bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 pb-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger}
          className="grid grid-cols-3 gap-3 sm:gap-4"
        >
          {PHOTOS.map(({ src, alt, caption }, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="relative rounded-2xl overflow-hidden group aspect-[3/4] sm:aspect-[4/5]"
            >
              <Image
                src={src}
                alt={alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 33vw, (max-width: 1024px) 30vw, 320px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-2 left-2 right-2">
                <span className="text-white text-[10px] sm:text-xs font-medium bg-black/30 backdrop-blur-sm px-2 py-1 rounded-lg">
                  {caption}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
