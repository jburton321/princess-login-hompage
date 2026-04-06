"use client";

import { useCallback, useEffect, useRef, type SyntheticEvent } from "react";

/**
 * Hero loop served from `public/hero-loop.mp4`. Wrong or missing file means no playback.
 */
const HERO_LOOP_SRC = "/hero-loop.mp4";

function applyAutoplayPolicy(video: HTMLVideoElement) {
  video.muted = true;
  video.defaultMuted = true;
  video.setAttribute("playsinline", "");
  video.setAttribute("webkit-playsinline", "true");
}

function tryPlay(video: HTMLVideoElement) {
  applyAutoplayPolicy(video);
  void video.play().catch(() => {});
}

const DEFAULT_VIDEO_CLASS =
  "pointer-events-none absolute inset-0 z-0 size-full object-cover object-[center_30%]";

type HeroBackgroundVideoProps = {
  /** Full positioning / stacking classes (defaults to main-hero z-0 layer). */
  className?: string;
};

/**
 * Absolutely positioned, cover-fit background loop from `public/hero-loop.mp4`.
 */
export function HeroBackgroundVideo({
  className = DEFAULT_VIDEO_CLASS,
}: HeroBackgroundVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    el.load();
    tryPlay(el);
  }, []);

  const onReady = useCallback((event: SyntheticEvent<HTMLVideoElement>) => {
    tryPlay(event.currentTarget);
  }, []);

  return (
    <video
      ref={videoRef}
      className={className}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      aria-hidden
      onLoadedData={onReady}
      onCanPlay={onReady}
    >
      <source src={HERO_LOOP_SRC} type="video/mp4" />
    </video>
  );
}
