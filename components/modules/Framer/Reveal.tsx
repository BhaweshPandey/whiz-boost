import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation, stagger } from 'framer-motion';
interface ReavealProps {
  children: JSX.Element;
  variants?: Record<string, Record<string, number>>;
  transitions?: Record<string, any>;
}
const Reveal: React.FC<ReavealProps> = ({ children, transitions, variants }: ReavealProps) => {
  const animateRef = useRef(null);
  const isInView = useInView(animateRef, { amount: 0.5 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start(defaultVariants.visible);
    } else {
      controls.start(defaultVariants.hidden);
    }
  }, [isInView]);

  const defaultVariants = {
    hidden: { opacity: 0, y: 75 },
    visible: { opacity: 1, y: 0 },
  };
  const defaultTransitions = {
    ...transitions,
    type: 'spring',
    stiffness: 100,
  };


  return (
    <div ref={animateRef}>
      <motion.div
        variants={variants ? variants : defaultVariants}
        initial="hidden"
        animate={controls}
        transition={defaultTransitions}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;
