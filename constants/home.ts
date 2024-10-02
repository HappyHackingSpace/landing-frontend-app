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

export const FAQ_ITEMS = [
  {
    trigger: "What is Happy Hacking Space?",
    content:
      "Happy Hacking Space is a nonprofit community fostering curiosity, creativity, and collaboration. We believe in abundance through mutual support and collective imagination.",
  },
  {
    trigger: "What support do you offer?",
    content:
      "We offer mentor support, online and in-person training, and networking opportunities, helping you grow in software development, product, and more.",
  },
  {
    trigger: "Who can join?",
    content:
      "Our community members are selected based on local engagement and interaction, ensuring a more effective and solution-driven environment.",
  },
  {
    trigger: "Can I contribute and learn?",
    content:
      "Absolutely! Whether you're contributing or learning, you are welcome to be part of our collaborative and supportive community.",
  },
];

export let BENEFITS = [
  {
    info: "Mentor Support",
  },
  {
    info: "Online Training",
  },
  {
    info: "Networking",
  },
  {
    info: "Curated Community Membership",
  },
  {
    info: "In-Person Training",
  },
];

