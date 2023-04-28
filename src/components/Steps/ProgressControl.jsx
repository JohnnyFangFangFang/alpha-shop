import rightArrow from "../../icons/right-arrow.svg";
import leftArrow from "../../icons/left-arrow.svg";

export default function Step1() {
  return (
    <section className="progress-control-container col col-lg-6 col-sm-12">
      <section className="button-group col col-12" data-phase="address">
        <button className="next">
          下一步
          <img
            className="cursor-point"
            src={rightArrow}
            alt="right-arrow.svg"
          />
        </button>
      </section>
      <section className="button-group col col-12" data-phase="shipping">
        <button className="prev">
          <img
            className="cursor-point"
            src={leftArrow}
            alt="left-arrow.svg"
          />
          上一步
        </button>
        <button className="next">
          下一步
          <img
            className="cursor-point"
            src={rightArrow}
            alt="right-arrow.svg"
          />
        </button>
      </section>
      <section className="button-group col col-12" data-phase="credit-card">
        <button className="prev">
          <img
            className="cursor-point"
            src={leftArrow}
            alt="left-arrow.svg"
          />
          上一步
        </button>
        <button className="next">確認下單</button>
      </section>
    </section>
  )
}