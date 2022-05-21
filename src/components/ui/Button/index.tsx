import { ReactNode } from "react";
import './style.scss';

export interface ButtonProps {
    children: ReactNode
}
const Button: React.FunctionComponent<ButtonProps> = (props) => {
    const {children} = props
    return(
        <div className="button d-flex align-center justify-center">
            {children}
        </div>
    )
}

export default Button;