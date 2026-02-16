import type { Variants } from "framer-motion";

type Direction = "up" | "down" | "left" | "right";

const baseEase: [number, number, number, number] = [0.22, 0.61, 0.36, 1];

export const fadeInUp = (delay = 0, distance = 32): Variants => ({
  hidden: {
    opacity: 0,
    y: distance,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.6,
      ease: baseEase,
    },
  },
});

export const fadeIn = (delay = 0): Variants => ({
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      delay,
      duration: 0.6,
      ease: baseEase,
    },
  },
});

export const slideIn = (
  direction: Direction = "up",
  delay = 0,
  distance = 64,
): Variants => {
  const offsets: Record<Direction, { x?: number; y?: number }> = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
  };

  return {
    hidden: {
      opacity: 0,
      ...offsets[direction],
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        delay,
        duration: 0.7,
        ease: baseEase,
      },
    },
  };
};

export const staggerContainer = (
  stagger = 0.12,
  delayChildren = 0.18,
): Variants => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: stagger,
      delayChildren,
    },
  },
});

export const scaleIn = (delay = 0): Variants => ({
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      delay,
      duration: 0.5,
      ease: baseEase,
    },
  },
});
