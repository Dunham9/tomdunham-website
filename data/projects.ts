export const projects = [
  {
    title: "Bluff: Prologue",
    slug: "bluff",
    year: "2015",
    type: "Short Film",
    image: "/posters/bluff.png",
    logline:
      "When greed and stupidity land two hustlers in the firing line of London's most notorious villain, they are given an ultimatum which could change their lives forever.",
  },
    {
    title: "A London Odyssey",
    slug: "london-odyssey",
    year: "2026",
    type: "Feature Film",
    image: "/posters/london-odyssey.png",
    logline: "When two small-time hustlers come into possession of a stolen painting, they find themselves spiralling into the depths of London's criminal underworld, caught between a ruthless gangster and a hitman drawn to the only witness to his crime.",
  },
  {
    title: "Playing God",
    slug: "playing-god",
    year: "2026",
    type: "Pilot",
    image: "/posters/playing-god.png",
    logline: "Set in a Gotham-like vision of contemporary L.A, a man suffering from past trauma works his way into the private circle of a pseudo-intellectual self help figure.",
  },
  {
    title: "A Rose Without Crying",
    slug: "rose-without-crying",
    year: "2026",
    type: "Feature Film - In Development.",
    image: "/posters/rose-without-crying-v2.png",
    logline: "When a veteran hitman is forced to take on a volatile young partner for a routine debt collection, a single debt spirals through East London’s criminal underworld, drawing them, a hustler and a power broker into a cycle of violence and betrayal.",
  },
];

export const bluffStills = Array.from({ length: 12 }, (_, i) => {
  const number = String(i + 1).padStart(2, "0");
  return `/bluff-stills/${number}.jpg`;
});