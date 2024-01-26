import miks from './miks.png'
import shia from './shia.png'
import rovic from './rovic.png'
import allen from './allen.png'
import ade from './ade.png'

const members = () => {
  return [
    {
      name: "Mikco Jasareno",
      detail: "Adventurous photographer with a flair",
      status: "taken",
      age: 23,
      img: miks,
      alt: "miks",
    },
    {
      name: "Rovis Lalusin",
      detail: "Tech geek who codes robots",
      status: "Single",
      age: 23,
      img: rovic,
      alt: "rovic"
    },
    {
      name: "Glenn Castillo",
      detail: "Foodie chef with unique recipes",
      status: "Single",
      age: 24,
      img: allen,
      alt: "glenn"
    },
    {
      name: "Adrean ADE",
      detail: "Music lover aspiring rockstar",
      status: "Single",
      age: 23,
      img: ade,
      alt: "ade"
    },
    {
      name: "Shiara Mae",
      detail: "Bookworm and writer at heart",
      status: "Single",
      age: 23,
      img: shia,
      alt: "shia"
    },
  ];
};

export default members;
