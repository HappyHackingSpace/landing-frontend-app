const ANGLE = 6;
const Y_OFFSET = 48;
const ANIMATE_Y = 56;
const TYPE = "spring";
const CARD_WIDTH = 48 * 4;

export const MOTION_IMAGES = [
  {
    src: "https://www.rsgicmimarlik.com/images/projeler/hastane-saglik-yapilari/ekol-estetik/20160909-ekol-estetik-03.jpg",
    initial: { x: CARD_WIDTH, y: Y_OFFSET, opacity: 0, rotate: 0, scale: 0.9 },
    animate: {
      x: Y_OFFSET,
      y: ANIMATE_Y * 2,
      opacity: 1,
      scale: 0.95,
      rotate: -ANGLE,
      transition: { type: TYPE, delay: 0.8 },
    },
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyXSaNsgJ_cSNIK-mInpCruICQ7hLU_pVWNQ&s",
    initial: { y: Y_OFFSET, opacity: 0 },
    animate: {
      y: ANIMATE_Y * 1.5,
      opacity: 1,
      transition: { type: TYPE, delay: 0.4 },
    },
    zIndexOffset: 1,
  },
  {
    src: "https://www.lavitashotels.com/assets/uploads/rio/dining/beachsneackbar-1.jpg",
    initial: {
      x: -CARD_WIDTH,
      y: Y_OFFSET,
      opacity: 0,
      rotate: 0,
      scale: 0.9,
    },
    animate: {
      x: -Y_OFFSET,
      y: ANIMATE_Y * 2,
      opacity: 1,
      rotate: ANGLE,
      scale: 0.95,
      transition: { type: TYPE, delay: 0.6 },
    },
  },
  {
    src: "https://www.atilimyazilim.com/wp-content/uploads/2020/04/laser-clinic-vaughan-1080x675-1024x640.jpg",
    initial: { x: CARD_WIDTH, y: Y_OFFSET, opacity: 0, rotate: 0, scale: 0.9 },
    animate: {
      x: Y_OFFSET,
      y: ANIMATE_Y * 2,
      opacity: 1,
      scale: 0.95,
      rotate: -ANGLE,
      transition: { type: TYPE, delay: 0.8 },
    },
  },
  {
    src: "https://wawainteriors.com/wp-content/uploads/2017/10/spor-salonu-tasarimlari-5.jpg",
    initial: {
      x: -CARD_WIDTH,
      y: Y_OFFSET,
      opacity: 0,
      rotate: 0,
      scale: 0.9,
    },
    animate: {
      x: -Y_OFFSET,
      y: ANIMATE_Y * 2,
      opacity: 1,
      rotate: ANGLE,
      scale: 0.95,
      transition: { type: "spring", delay: 0.6 },
    },
  },
  {
    src: "https://wawainteriors.com/wp-content/uploads/2017/10/spor-salonu-tasarimlari-5.jpg",
    initial: {
      x: 0,
      y: Y_OFFSET,
      opacity: 0,
      rotate: 0,
      scale: 0.9,
    },
    animate: {
      x: 0,
      y: ANIMATE_Y,
      opacity: 1,
      rotate: 0,
      scale: 0.95,
      transition: { type: TYPE, delay: 0.6 },
    },
  },
];
