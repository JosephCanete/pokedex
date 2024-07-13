import grassIcon from "../assets/type/grass.svg";
import fireIcon from "../assets/type/fire.svg";
import waterIcon from "../assets/type/water.svg";
import electricIcon from "../assets/type/electric.svg";
import flyingIcon from "../assets/type/flying.svg";
import poisonIcon from "../assets/type/poison.svg";
import psychicIcon from "../assets/type/psychic.svg";
import rockIcon from "../assets/type/rock.svg";
import groundIcon from "../assets/type/ground.svg";
import iceIcon from "../assets/type/ice.svg";
import bugIcon from "../assets/type/bug.svg";
import ghostIcon from "../assets/type/ghost.svg";
import fightingIcon from "../assets/type/fighting.svg";
import normalIcon from "../assets/type/normal.svg";
import dragonIcon from "../assets/type/dragon.svg";
import fairyIcon from "../assets/type/fairy.svg";
import steelIcon from "../assets/type/steel.svg";
import darkIcon from "../assets/type/dark.svg";
import Image from "next/image";
import { PokeType } from "../types/pokemon";
import "./RenderIcon.css";

export default function RenderIcon({ type }: { type: string }) {
  let icon;
  let style;

  switch (type) {
    case "grass":
      icon = grassIcon;
      style = "grass";
      break;
    case "fire":
      icon = fireIcon;
      style = "fire";
      break;
    case "water":
      icon = waterIcon;
      style = "water";
      break;
    case "electric":
      icon = electricIcon;
      style = "electric";
      break;
    case "flying":
      icon = flyingIcon;
      style = "flying";
      break;
    case "poison":
      icon = poisonIcon;
      style = "poison";
      break;
    case "psychic":
      icon = psychicIcon;
      style = "psychic";
      break;
    case "rock":
      icon = rockIcon;
      style = "rock";
      break;
    case "ground":
      icon = groundIcon;
      style = "ground";
      break;
    case "ice":
      icon = iceIcon;
      style = "ice";
      break;
    case "bug":
      icon = bugIcon;
      style = "bug";
      break;
    case "ghost":
      icon = ghostIcon;
      style = "ghost";
      break;
    case "fighting":
      icon = fightingIcon;
      style = "fighting";
      break;
    case "normal":
      icon = normalIcon;
      style = "normal";
      break;
    case "dragon":
      icon = dragonIcon;
      style = "dragon";
      break;
    case "fairy":
      icon = fairyIcon;
      style = "fairy";
      break;
    case "steel":
      icon = steelIcon;
      style = "steel";
      break;
    case "dark":
      icon = darkIcon;
      style = "dark";
      break;
    default:
      icon = null;
      break;
  }

  return (
    <div className={`icon ${style}`}>
      <Image src={icon || normalIcon} alt={type[0]} width={12} />
    </div>
  );
}
