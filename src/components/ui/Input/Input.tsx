import { ReactNode } from "react";
import { MdAlternateEmail } from 'react-icons/md';
import './style.scss';

interface InputProps {
  children?: ReactNode;
  placehover: string
}
const Input: React.FunctionComponent<InputProps> = (props) => {
  const { children, placehover } = props;
  return (
    <div className="d-flex align-center justify-center input-box pa-1">
        <div className="ml-1">
            <MdAlternateEmail />
        </div>
        <input placeholder={placehover} className="flex-fill py-1 px-2"/>
        <div className="mr-1">
          {children}  
        </div>
    </div>
  );
};

export default Input;
