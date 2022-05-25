import "./style.scss";

interface ProfileProps {
  children: JSX.Element;
  color?: string;
}

const Profile: React.FunctionComponent<ProfileProps> = (props) => {
  const { children, color } = props;
  return (
    <div className=" profile" style={{ backgroundColor: color }}>
      {children}
    </div>
  );
};

export default Profile;
