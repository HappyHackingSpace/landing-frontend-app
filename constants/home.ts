import { SITE } from "@hhs/constants/metadata";

export const HERO_DESCRIPTION =
  "A nonprofit community driven by curiosity and exploration, rejecting the myth of scarcity, believing in an economy of abundance through collaboration and mutual support, while championing collective imagination and creative resilience.";

const ANGLE = 6;
const Y_OFFSET = 48;
const ANIMATE_Y = 56;
const TYPE = "spring";
const CARD_WIDTH = 48 * 4;

export const MOTION_IMAGES = [
  {
    src: "/shoots/one.avif",
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
    src: "/shoots/two.avif",
    initial: { y: Y_OFFSET, opacity: 0 },
    animate: {
      y: ANIMATE_Y * 1.5,
      opacity: 1,
      transition: { type: TYPE, delay: 0.4 },
    },
    zIndexOffset: 1,
  },
  {
    src: "/shoots/three.avif",
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
    src: "/shoots/four.avif",
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
    src: "/shoots/five.avif",
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
    src: "/shoots/six.avif",
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
    trigger: `What is ${SITE.title}?`,
    content: `${SITE.title} is a nonprofit community fostering curiosity, creativity, and collaboration. We believe in abundance through mutual support and collective imagination.`,
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

export const BENEFITS = [
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
