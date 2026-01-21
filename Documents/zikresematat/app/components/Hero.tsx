"use client";

import Link from "next/link";
import { useState } from "react";

export default function Hero() {
  const [videoFailed, setVideoFailed] = useState(false);

  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-950">
      <div className="absolute inset-0 z-0 bg-slate-950" />
      {/* @ts-expect-error HTMLVideoElement typings do not include loading */}
      <video
        autoPlay
        className="absolute inset-0 z-0 h-full w-full object-cover"
        loading="eager"
        loop
        muted
        onError={() => setVideoFailed(true)}
        playsInline
        preload="metadata"
      >
        <source src="/Herosectionvid.mp4" type="video/mp4" />
      </video>
      {videoFailed ? (
        <img
          alt=""
          className="absolute inset-0 z-0 h-full w-full object-cover"
          src="/hero-placeholder.jpg"
        />
      ) : null}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/70 via-black/50 to-transparent" />
      <div className="relative z-20 flex min-h-screen flex-col items-center justify-center px-4 text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-emerald-200">
          Ethiopian Martyrs of ISIS
        </p>
        <h1 className="mb-6 text-4xl font-bold text-white drop-shadow-2xl md:text-6xl lg:text-7xl">
          Remembering the Ethiopian Martyrs
        </h1>
        <p className="mb-8 max-w-2xl px-4 text-xl leading-relaxed text-slate-200 md:text-2xl">
          This memorial honors Ethiopian Christians murdered by ISIS, keeping
          their names and stories present with reverence and care.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            className="rounded-full bg-emerald-500/90 px-6 py-3 text-sm font-medium text-slate-950 transition hover:bg-emerald-400"
            href="/martyrs"
          >
            View All Martyrs
          </Link>
          <a
            className="rounded-full border border-emerald-200/40 px-6 py-3 text-sm font-medium text-emerald-100 transition hover:border-emerald-200 hover:text-emerald-50"
            href="#about"
          >
            About this memorial
          </a>
        </div>
      </div>
    </section>
  );
}
