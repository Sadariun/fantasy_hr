import { motion, type HTMLMotionProps } from 'framer-motion';

type SpellButtonProps = HTMLMotionProps<'button'> & {
  variant?: 'primary' | 'secondary';
};

/**
 * A decorative fantasy-style button with subtle shimmer and inset bevel.
 * Uses Tailwind utilities and Framer Motion for hover/press animation.
 */
export default function SpellButton({
  children,
  variant = 'primary',
  className = '',
  ...rest
}: SpellButtonProps) {
  const base =
    'relative inline-flex items-center justify-center px-8 py-3 font-display text-lg tracking-wide rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/80 transition-shadow';
  const variants: Record<string, string> = {
    primary:
      'text-night dark:text-night bg-gradient-to-b from-gold/90 to-gold shadow-inner shadow-lg hover:shadow-xl',
    secondary:
      'text-gold border border-gold bg-parchment/80 hover:bg-parchment',
  };
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className={`${base} ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
    </motion.button>
  );
} 