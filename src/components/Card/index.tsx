import { ReactNode } from "react";
import "./style.scss";

interface CardProps {
  children?: ReactNode;
  width: number;
  height: number;
  backgroundColor?: string;
}

const Card: React.FunctionComponent<CardProps> = (props) => {
  const { children, width, height, backgroundColor = "#FFF" } = props;
  return (
    <div
      className="card"
      style={{ width, height, backgroundColor }}
    >
    {children && children }
    </div>
  );
};

export default Card;
