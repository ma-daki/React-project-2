export const STAGGER_CONTAINER = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

export const FADE_UP = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 15,
    },
  },
};

export const FADE_IN = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

export const BUTTON_INTERACTIONS = {
  hover: { scale: 1.03, boxShadow: "0px 8px 15px rgba(0,0,0,0.1)" },
  tap: { scale: 0.97 },
};

// Config for scrolling reveal
export const SCROLL_REVEAL_CONFIG = {
  once: true,
  margin: "-100px",
};
