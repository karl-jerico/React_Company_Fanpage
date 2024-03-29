import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  buttonStyle?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface LeaderCardProps {
  id: number;
  name: string;
  description: string;
  image: string;
}

export interface TeamProps {
  id: number;
  name: string;
  image: string;
}

export interface MembersProps {
  name: string;
  detail: string;
  status: string;
  age: number;
  img: string;
  alt: string;
}
