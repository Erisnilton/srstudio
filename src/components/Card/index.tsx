import { ReactNode } from "react";
import "./style.scss";

interface CardProps {
  children?: ReactNode;
}

const Card: React.FunctionComponent<CardProps> = (props) => {
  const { children } = props;
  return <div className="card">{children && children}</div>;
};

export default Card;
