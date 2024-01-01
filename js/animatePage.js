import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap
  .timeline()
  .from(".navbar", {
    opacity: 0,
    duration: 1,
    y: -30,
    ease: "power2.inOut",
  })
  .from(".bg-image", {
    opacity: 0,
    duration: 1,
    y: 30,
    scrollTrigger: {
      trigger: ".bg-image",
      start: "top 80%",
    },
  })
  .from(".footer-top", {
    opacity: 0,
    duration: 1,
    y: 30,
    scrollTrigger: {
      trigger: ".footer-top",
      start: "top 80%",
    },
  })
  .from(".availability-info", {
    opacity: 0,
    duration: 1,
    delay: 1,
    y: 30,
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".availability-info",
      start: "top 80%",
    },
  })
  .from(".footer-bottom", {
    opacity: 0,
    duration: 1,
    delay: 1,
    y: 30,
    scrollTrigger: {
      trigger: ".footer-bottom",
      start: "top 80%",
    },
  });
