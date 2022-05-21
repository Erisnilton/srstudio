import "./style.scss";

interface CycleProps {
  color: string;
  size: number;
  position?: "absolute" | "relative" | undefined;
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
}

const Cycle: React.FunctionComponent<CycleProps> = (props) => {
  const { color, size, position, top, bottom, right, left } = props;
  return (
    <div
      className="bg-cycle"
      style={{
        backgroundColor: color,
        width: size,
        height: size,
        position: position,
        top: top,
        right: right,
        bottom: bottom,
        left: left,
      }}
    ></div>
  );
};

export default Cycle;
