const logVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { duration: 1.5, when: "beforeChildren"},
    },
    exit: {
      x: "-100vw",
      transition: { ease: "easeInOut", duration: 2 },
    },
};
const errorVariant = {
  hidden:{
    opacity: 0,
    y: 100
  },
  visible:{
    opacity:1,
    y:0,
    transition:{duration: 1}
  },
  exit:{
    opacity:0,
    y:100,
    transition:{duration: 1}
  }
}

export {logVariants,errorVariant};