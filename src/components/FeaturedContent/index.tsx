import Model from "../../asserts/img/model.png";
import Line from "../../asserts/line-curve.svg";
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
            <svg className="cycle-1" width={78} height={78}>
              <circle r="50%" cx="50%" cy="50%" fill={"#C4C4C4"} />{" "}
            </svg>
          </Input>
          <div className="line-curve">
            <div className="bagde d-flex align-center justify-center">
              <div className="badge--percentent">90%</div>
              <div className="badge--progress-cicle"></div>
            </div>
            <img src={Line} alt="line curve" />
          </div>
        </div>
        <div className=" d-flex flex-start align-center justify-center featured--right">
          <div className=" d-flex card">
            {/* <div>
              <Cycle
                position={"absolute"}
                color="#FF7900"
                size={237}
                right={0}
                top={150}
              />
            </div> */}
            <div className="image-model">
              <img src={Model} alt="Image  of a woman" />
            </div>
            <svg className="cycle-2" width={156} height={156}>
              <circle r='50%' cx="50%" cy="50%" fill={"#01E6EF"} />
            </svg>
            <svg className="cycle-3" width={237} height={237}>
              <circle r='50%' cx="50%" cy="50%" fill={"#FF7900"} />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedContent;
