'use client';

import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/utils/animations';

interface RevealProps {
  readonly children: React.ReactNode;
  readonly className?: string;
  readonly delay?: number;
  readonly once?: boolean;
  readonly amount?: number;
  readonly variant?: Variants;
}

interface RevealContainerProps {
  readonly children: React.ReactNode;
  readonly className?: string;
  readonly stagger?: number;
  readonly delayChildren?: number;
  readonly once?: boolean;
  readonly amount?: number;
}

export function Reveal({
  children,
  className,
  delay = 0,
  once = true,
  amount = 0.25,
  variant,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      variants={variant ?? fadeInUp(delay)}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
    >
      {children}
    </motion.div>
  );
}

export function RevealContainer({
  children,
  className,
  stagger = 0.15,
  delayChildren = 0.18,
  once = true,
  amount = 0.25,
}: RevealContainerProps) {
  return (
    <motion.div
      className={className}
      variants={staggerContainer(stagger, delayChildren)}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
    >
      {children}
    </motion.div>
  );
}

interface RevealItemProps {
  readonly children: React.ReactNode;
  readonly className?: string;
  readonly variant?: Variants;
  readonly delay?: number;
}

export function RevealItem({
  children,
  className,
  variant,
  delay = 0,
}: RevealItemProps) {
  return (
    <motion.div className={className} variants={variant ?? fadeInUp(delay)}>
      {children}
    </motion.div>
  );
}
