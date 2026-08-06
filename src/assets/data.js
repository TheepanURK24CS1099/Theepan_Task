// Placeholder-image helper — all imagery is generated via placehold.co
export const ph = (w, h, bg, fg, text) =>
  `https://placehold.co/${w}x${h}/${bg}/${fg}?text=${encodeURIComponent(text)}&font=poppins`;

export const collections = [
  {
    id: "carry-on",
    title: "The Carry-On Edit",
    desc: "Cabin-ready silhouettes built for the weekly commute.",
    image: ph(900, 1100, "2C2C2C", "D9C7A4", "Carry-On Edit"),
    span: "large",
  },
  {
    id: "weekender",
    title: "Weekender Series",
    desc: "Soft-structure duffels for short escapes.",
    image: ph(900, 700, "43534B", "FFFFFF", "Weekender Series"),
    span: "small",
  },
  {
    id: "backpacks",
    title: "Urban Backpacks",
    desc: "Everyday carry, engineered for the commute-to-flight life.",
    image: ph(900, 700, "111111", "D9C7A4", "Urban Backpacks"),
    span: "small",
  },
  {
    id: "accessories",
    title: "Travel Accessories",
    desc: "Packing cubes, pouches and organisers.",
    image: ph(900, 1100, "D9C7A4", "111111", "Accessories"),
    span: "large",
  },
];

export const products = [
  {
    id: 1,
    name: "Voyage Cabin Trolley",
    category: "Carry-On",
    price: 249,
    rating: 4.8,
    image: ph(700, 860, "2C2C2C", "FFFFFF", "Cabin Trolley"),
  },
  {
    id: 2,
    name: "Harbour Weekender Duffel",
    category: "Weekender",
    price: 189,
    rating: 4.7,
    image: ph(700, 860, "43534B", "D9C7A4", "Weekender Duffel"),
  },
  {
    id: 3,
    name: "Transit Daypack",
    category: "Backpack",
    price: 159,
    rating: 4.9,
    image: ph(700, 860, "111111", "D9C7A4", "Transit Daypack"),
  },
  {
    id: 4,
    name: "Modular Packing Cube Set",
    category: "Accessory",
    price: 69,
    rating: 4.6,
    image: ph(700, 860, "D9C7A4", "111111", "Packing Cubes"),
  },
  {
    id: 5,
    name: "Aero Toiletry Pouch",
    category: "Accessory",
    price: 49,
    rating: 4.7,
    image: ph(700, 860, "2C2C2C", "D9C7A4", "Toiletry Pouch"),
  },
  {
    id: 6,
    name: "Continental Check-In",
    category: "Luggage",
    price: 329,
    rating: 4.9,
    image: ph(700, 860, "43534B", "FFFFFF", "Check-In Case"),
  },
];

export const features = [
  {
    id: "water",
    title: "Weatherproof Shell",
    desc: "Coated ripstop fabric that shrugs off rain, spills and city grime.",
  },
  {
    id: "lock",
    title: "TSA-Approved Locks",
    desc: "Integrated combination locks cleared for international travel.",
  },
  {
    id: "warranty",
    title: "Lifetime Warranty",
    desc: "Every hardware component is backed for as long as you own it.",
  },
  {
    id: "recycled",
    title: "Recycled Materials",
    desc: "Shells and linings made from post-consumer recycled polyester.",
  },
];

export const destinations = [
  { id: "kyoto", name: "Kyoto", tag: "Autumn Edit", image: ph(700, 900, "2C2C2C", "D9C7A4", "Kyoto") },
  { id: "reykjavik", name: "Reykjavik", tag: "Cold Weather", image: ph(700, 900, "43534B", "FFFFFF", "Reykjavik") },
  { id: "marrakech", name: "Marrakech", tag: "Desert Light", image: ph(700, 900, "D9C7A4", "111111", "Marrakech") },
  { id: "lisbon", name: "Lisbon", tag: "Coastal Route", image: ph(700, 900, "111111", "D9C7A4", "Lisbon") },
];

export const reviews = [
  {
    id: 1,
    name: "M. Ahlgren",
    location: "Copenhagen, DK",
    rating: 5,
    quote:
      "Three continents in six weeks and the shell hasn't shown a mark. This is the last carry-on I'll ever need to buy.",
  },
  {
    id: 2,
    name: "R. Fernandes",
    location: "Lisbon, PT",
    rating: 5,
    quote:
      "The organisation inside the weekender is genuinely clever. Everything has a place, and it still looks sharp off the plane.",
  },
  {
    id: 3,
    name: "S. Okafor",
    location: "Lagos, NG",
    rating: 4,
    quote:
      "Understated design that doesn't shout for attention — exactly what I wanted for client travel.",
  },
];
