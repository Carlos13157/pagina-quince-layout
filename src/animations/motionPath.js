import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

export function initMotionPath() {
  gsap.to('.dot', {
  duration: 4,
  ease: 'power1.inOut',
  motionPath: {
    path: [
      { x: 50,  y: 300 },
      { x: 200, y: 100 }, // waypoint 1
      { x: 400, y: 100 }, // waypoint 2
      { x: 550, y: 300 }
    ],
    autoRotate: true
  }
});

}