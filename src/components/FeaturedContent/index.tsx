import badge from "../../asserts/01.svg";
import imageurl from "../../asserts/img/model.png";
import profile1 from "../../asserts/img/profile-1.png";
import profile2 from "../../asserts/img/profile-2.png";
import profile3 from "../../asserts/img/profile-3.png";
import Line from "../../asserts/line-curve.svg";
import star from "../../asserts/star.svg";
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

          <div style={{ position: "relative" }}>
            <Input placehover="email Address">
              <Button>Notify Me</Button>
              <svg className="cycle-1" width={78} height={78}>
                <circle r="50%" cx="50%" cy="50%" fill={"#C4C4C4"} />{" "}
              </svg>
            </Input>
          </div>
          <div className="line-curve">
            <div className="bagde d-flex align-center justify-center">
              <div className="badge--percentent">90%</div>
              <div className="badge--progress-cicle"></div>
            </div>
            <img src={Line} alt="line curve" />
          </div>
        </div>
        <div className="ml-7">
          <svg
            width={562}
            viewBox="0 0 562 681"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <defs>
              <clipPath id="avatar-circle" clipPathUnits="objectBoundingBox">
                <circle r=".5" cx=".5" cy=".5"></circle>
              </clipPath>
            </defs>
            <circle y="348" r="30" cx="30" cy="378" fill="#C4C4C4" />
            <circle r="78" cx="145" cy="81" fill="#01E6EF" />
            <circle r="50.5" cx="468.5" cy="50.5" fill="#F2F4E9" />
            <circle r="119" cx="381" cy="563" fill={"#FF7900"} />
            <g transform="rotate(8.55, 290 , 342.5)">
              <rect
                x="186"
                y="87"
                width="308"
                height="511"
                fill="#E7ECED"
                rx="10"
                ry="10"
              />
              <path
                d="M 320.19, 591.31 h 39.62"
                stroke="#C4C4C4"
                strokeWidth="4.14"
                strokeLinecap="round"
              />

              <rect
                x="200"
                y="106"
                width="280"
                height="234"
                fill="#5AB780"
                rx="10"
                ry="10"
              />
            </g>
            <g>
              <rect
                x="9"
                y="362"
                width="130"
                height="141"
                fill="#FFF"
                rx="10"
                ry="10"
              />
              <g>
                <circle r="24.5" cx="74.4" cy="403.5" fill={"#F1F1F1"} />
                <image href={badge} x="63" y="390" width="21.63" height="30" />
                <text
                  x="30"
                  y="460"
                  width="88"
                  fontFamily="roboto"
                  fontSize="18"
                >
                  <tspan>Best Brand</tspan>{" "}
                  <tspan dy={18} x="30">
                    {" "}
                    Awards
                  </tspan>
                </text>
              </g>
            </g>
            <path
              d="M135, 81 q 0,-10 10,-10 h 299 q 10,0 10,10 v 494 h -319 v -494 Z"
              fill="#F49F66"
              strokeWidth="3"
              stroke="#FFF"
            />
            <image href={imageurl} x="134" y="27" width="320" height="545" />
            <g>
              <rect
                x="383"
                y="58"
                width="130"
                height="141"
                fill="#FFF"
                rx="10"
                ry="10"
              />
              <image
                href={profile1}
                x="400"
                y="81"
                width="32"
                height="32"
                clipPath="url(#avatar-circle)"
              />
              <image
                href={profile2}
                x="415"
                y="81"
                width="32"
                height="32"
                clipPath="url(#avatar-circle)"
              />
              <image
                href={profile3}
                x="436"
                y="81"
                width="32"
                height="32"
                clipPath="url(#avatar-circle)"
              />

              <circle fill="#24B728" cx="473" cy="97" r="16" />
              <text
                x="473"
                y="97"
                fill="#FFF"
                textAnchor="middle"
                dominantBaseline="middle"
                fontFamily="Roboto"
                fontSize="12"
              >
                45+
              </text>
              <text
                x="391"
                y="150"
                fill="#000"
                fontFamily="Roboto"
                fontSize="18"
              >
                50+ Employee
              </text>
              <image href={star} x="398.16" y="157" />
              <text
                x="414.82"
                y="166"
                fill="#000"
                fontFamily="Roboto"
                fontSize="10"
              >
                4.9(9.8k Reviews)
              </text>
            </g>
          </svg>
        </div>
      </div>
    </>
  );
};

export default FeaturedContent;
