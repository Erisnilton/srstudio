import badge from "../../asserts/01.svg";
import coloborationIcon from "../../asserts/02.svg";
import cardHello from "../../asserts/card-hello.svg";
import dna from "../../asserts/dna.svg";
import businessImage from "../../asserts/img/business-image.png";
import imgCard from "../../asserts/img/img-1.png";
import imageurl from "../../asserts/img/model.png";
import profile1 from "../../asserts/img/profile-1.png";
import profile2 from "../../asserts/img/profile-2.png";
import profile3 from "../../asserts/img/profile-3.png";
import Line from "../../asserts/line-curve.svg";
import look from "../../asserts/looker.svg";
import paint from "../../asserts/paint-1.svg";
import star from "../../asserts/star.svg";
import uxDesignIcon from "../../asserts/ux-design.svg";
import Card from "../Card";
import Badge from "../ui/Badge";
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
        <div className="text-left">
          <h1>
            A digital <br /> <span>Product </span>Design
          </h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={562}
            viewBox="0 0 562 216"
          >
            <g transform="rotate(-15, 79.69, 238.98)">
              <rect
                x="79.69"
                y="81"
                width="238.98"
                height="87.22"
                stroke="#5F5BCA"
                strokeWidth="4"
                fill="#FFF"
              />
              <text
                x="100.69"
                y="138"
                fill="#5F5BCA"
                fontFamily="Roboto"
                fontSize="60"
              >
                Agency
              </text>
              <circle r="10.5" cx="79.69" cy="86" fill="#5F5BCA" />
              <circle r="10.5" cx="318.2" cy="86" fill="#5F5BCA" />
              <circle r="10.5" cx="79.69" cy="168" fill="#5F5BCA" />
              <circle r="10.5" cx="318.2 " cy="168" fill="#5F5BCA" />
            </g>
          </svg>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere
            nunc augue cras curabitur amet. Bibendum ultrices sit eros, odio
            turpis congue.
          </p>

          <div>
            <Input placehover="email Address">
              <Button>Notify Me</Button>
            </Input>
            <svg
              style={{ position: "relative", top: "-50px", left: "-30px" }}
              xmlns="http://www.w3.org/2000/svg"
              width={629}
              viewBox="0 0 629 78"
            >
              <circle r="39" cx="558" cy="39" fill={"#C4C4C4"} />
            </svg>
          </div>
          <div className="path">
            <div className="bagde d-flex align-center justify-center">
              <div className="badge--percentent">90%</div>
              <div className="badge--progress-cicle"></div>
            </div>
            <img src={Line} alt="line curve" />
          </div>
        </div>
        <div className="ml-2">
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
      <div className="info d-flex">
        <h1>We have dedicated designers on these</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
          massa viverra cursus ac pretium turpis. Ut in lorem volutpat sed dolor
          dolor eu felis.
        </p>
      </div>

      <div className="cards">
        <svg width={429} viewBox="0 0 429 631">
          <circle r="85" cx="85" cy="85" fill={"#FF7900"} />
          <circle r="159" cx="270" cy="430  " fill={"#04625A"} />
        </svg>
        <div className="d-flex align-flex-start cards--contents">
          <div>
            <Card>
              <img src={look} />
              <Badge title="Visual Identity" color=" #B6FFFB" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                adipiscing elit.
              </p>
              <img
                style={{ marginTop: "8px", marginBottom: "16px" }}
                src={imgCard}
              />
              <p style={{ marginTop: "8px", marginBottom: "32px" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </Card>
          </div>
          <Card>
            <img src={paint} />
            <Badge title="Website Design" color="#C9B6FF" />
            <p style={{ marginTop: "16px", marginBottom: "32px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              adipiscing elit.
            </p>

            <span>Read More</span>
          </Card>
          <Card>
            <img src={coloborationIcon} />
            <Badge title="Collaboration" color="#FFEFB6" />
            <p style={{ marginTop: "16px", marginBottom: "32px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              adipiscing elit.
            </p>

            <span>Read More</span>
          </Card>
          <Card>
            <img src={uxDesignIcon} />
            <Badge title="Collaboration" color="#B9FFB6" />
            <p style={{ marginTop: "16px", marginBottom: "32px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              adipiscing elit.
            </p>

            <span>Read More</span>
          </Card>
        </div>
      </div>
      <div className="d-flex align-flex-start  business">
        <div className="business--help">
          <h1>How can SRstudio help your business?</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat neque
            elementum nunc nunc. Etiam ridiculus libero lorem eget. Et morbi at
            interdum sapien. Interdum malesuada hendrerit tincidunt placerat
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat neque
            elementum nunc nunc. Etiam ridiculus libero lorem eget.
          </p>
          <Button>Learn More</Button>
        </div>
        <div className="business--image ml-7">
          <img src={businessImage} alt="Image business" />
        </div>
      </div>

      <div className="d-flex gap-10">
        <img src={dna} />
        <img src={cardHello} />
        <div className="business--help">
          <h1>Hello, we are SRstudio Creative</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat neque
            elementum nunc nunc. Etiam ridiculus libero lorem eget. Et morbi at
            interdum sapien. Interdum malesuada hendrerit tincidunt placerat
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat neque
            elementum nunc nunc. Etiam ridiculus libero lorem eget.
          </p>
          <Button>Learn More</Button>
        </div>
      </div>
    </>
  );
};

export default FeaturedContent;
