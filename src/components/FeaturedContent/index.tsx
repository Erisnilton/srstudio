import Line from "../../asserts/line-curve.svg";
import Cycle from "../Cycle";
import Button from "../ui/Button";
import Input from "../ui/Input/Input";
import "./style.scss";

interface FeaturedContentProps {}

const FeaturedContent: React.FunctionComponent<FeaturedContentProps> = (
  props
) => {
  return (
    <>
      <div className="featured d-flex">
        <div className="featured--left text-left">
          <h1>
            A digital <br /> <span>Product </span>Design
          </h1>
          <div className=" d-flex align-center justify-center agency">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <span> Agency </span>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere
            nunc augue cras curabitur amet. Bibendum ultrices sit eros, odio
            turpis congue.
          </p>

          <Input placehover="email Address">
            <Button>Notify Me</Button>
          </Input>
          <Cycle
            color="#C4C4C4"
            size={78}
            position={"absolute"}
            right={-30}
            bottom={190}
          />
          <div className="line-curve">
            <div className="bagde d-flex align-center justify-center">
              <div className="badge--percentent">90%</div>
              <div className="badge--progress-cicle"></div>
            </div>
            <img src={Line} alt="line curve" />
          </div>
        </div>
        <div className="featured--right">
          <div className="text-right card"> Image aqui</div>
        </div>
      </div>
    </>
  );
};

export default FeaturedContent;
