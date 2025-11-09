// Create a GSAP timeline
let tl = gsap.timeline();

// Box animation
tl.to("#box", {
  x: 1000,
  duration: 2,
  delay: 1,
  rotate: 180,
  backgroundColor: "blue",
  borderRadius: "50%",
  repeat: -1,
  yoyo: true
});

// Box1 animation
tl.from("#box1", {
  x: 1000,
  duration: 2,
  delay: 1,
  rotate: 180,
  backgroundColor: "blue",
  borderRadius: "50%",
  repeat: -1,
  yoyo: true
});

// Animate heading text
tl.from("h1", {
  opacity: 0,
  duration: 1,
  x: 30,
  delay: 1,
  stagger: 1,
  repeat: -1,
  yoyo: true
});

// Box4
tl.from("#box4", {
  x: 1000,
  duration: 2,
  delay: 1,
  rotate: 180,
  backgroundColor: "blue",
  borderRadius: "50%",
  repeat: -1,
  yoyo: true
});

// Box5
tl.from("#box5", {
  x: 1000,
  duration: 2,
  delay: 1,
  rotate: 180,
  backgroundColor: "blue",
  borderRadius: "50%",
  repeat: -1,
  yoyo: true
});

// Box6
tl.from("#box6", {
  x: 1000,
  duration: 2,
  delay: 1,
  rotate: 180,
  backgroundColor: "blue",
  borderRadius: "50%",
  repeat: -1,
  yoyo: true
});
