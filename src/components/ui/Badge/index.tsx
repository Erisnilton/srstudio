import "./style.scss";

interface BadgeProps {
  title: string;
  color: string;
}

const Badge: React.FunctionComponent<BadgeProps> = (props) => {
  const { title, color } = props;
  return (
    <div className="badge" style={{ backgroundColor: color }}>
      <span className="title">{title}</span>
    </div>
  );
};

export default Badge;
