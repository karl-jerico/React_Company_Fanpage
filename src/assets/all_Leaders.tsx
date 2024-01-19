import p1_img from "./p1_img.jpg";
import p2_img from "./p2_img.jpg";
import p3_img from "./p3_img.jpg";

const all_Leaders = () => {
  return [
    {
      id: 1,
      name: "Macky",
      description: "Adorable leader: charismatic, kind, inspiring, caring, approachable, enthusiastic, humble, visionary, supportive, endearing.",
      image: p1_img,
    },
    {
      id: 2,
      name: "Tulfo",
      description: "Charming leader: compassionate, inclusive, optimistic, empathetic, cheerful, gracious, understanding, motivating, gentle, charismatic.",
      image: p2_img,
    },
    {
      id: 3,
      name: "Magalona",
      description: "Sweet leader: nurturing, affable, considerate, warm-hearted, friendly, gentle, encouraging, genuine, lovable, approachable.",
      image: p3_img,
    },
  ];
};

export default all_Leaders;
