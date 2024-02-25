const container = document.querySelector(".container");
const sections = gsap.utils.toArray(".container section");
const texts = gsap.utils.toArray(".anim");
const mask = document.querySelector(".mask");




let scrollTween = gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".container",
    pin: true,
    scrub: 1,
    end: "+=3000",
    //snap: 1 / (sections.length - 1),
    // markers: true,
  },
});

console.log(1 / (sections.length - 1));

// sections.forEach((section, index) => {
//     gsap.to(section, {
//       scale: 1.5, // Scale factor when section is centered
//       ease: "none",
//       scrollTrigger: {
//         trigger: section,
//         start: "center center", // Trigger when the section is centered in the viewport
//         end: "+=100%", // Adjust this value based on your preference
//         scrub: true,
//         onUpdate: (self) => {
//           // Reset scale of other sections
//           sections.forEach((otherSection, otherIndex) => {
//             if (otherIndex !== index) {
//               gsap.set(otherSection, { scale: 1 });
//             }
//           });
//         },
//       },
//     });
//   });
//Progress bar animation

gsap.to(mask, {
  width: "100%",
  scrollTrigger: {
    trigger: ".wrapper",
    start: "top left",
    scrub: 1,
  },
});

// whizz around the sections
// sections.forEach((section) => {
//   // grab the scoped text
//   let text = section.querySelectorAll(".anim");

//   // bump out if there's no items to animate
//   if(text.length === 0)  return

//   // do a little stagger
//   gsap.from(text, {
//     y: -130,
//     opacity: 0,
//     duration: 2,
//     ease: "elastic",
//     stagger: 0.1,
//     scrollTrigger: {
//       trigger: section,
//       containerAnimation: scrollTween,
//       start: "left center",
//     //   markers: true
//     }
//   });
// });
