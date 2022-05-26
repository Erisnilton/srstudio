import check from "../../asserts/check.svg";
import money from "../../asserts/money.svg";
import tree from "../../asserts/tree.svg";
import "./style.scss";

const Footer: React.FunctionComponent = () => {
  return (
    <div className="footer">
      <span>To Get More Information</span>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie in
        cursus eget interdum sed arcu nec, donec nibh.
      </p>

      <div className="footer--content">
        <div>
          <img src={tree} />
          <h4>Invest in talent Teams</h4>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in diam
            nisi laoreet vel congue facilisis dictum.
          </span>
        </div>
        <div>
          <img src={check} />
          <h4>Invest in talent Teams</h4>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in diam
            nisi laoreet vel congue facilisis dictum.
          </span>
        </div>
        <div>
          <img src={money} />
          <h4>Invest in talent Teams</h4>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in diam
            nisi laoreet vel congue facilisis dictum.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
