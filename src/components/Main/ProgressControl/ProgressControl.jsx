import styles from "./ProgressControl.module.scss";
import rightArrow from "../../../icons/right-arrow.svg";
import leftArrow from "../../../icons/left-arrow.svg";

function PreviousStep() {
  return (
    <button className={styles.prev}>
      <img
        className="cursorPoint"
        src={leftArrow}
        alt="left-arrow.svg"
      />
      上一步
    </button>
  )
}

function NextStep() {
  return (
    <button className={styles.next}>
      下一步
      <img
        className="cursorPoint"
        src={rightArrow}
        alt="right-arrow.svg"
      />
    </button>
  )
}

export default function ProgressControl() {
  return (
    <section className={`${styles.progressControlContainer} col col-lg-6 col-sm-12`}>
      <section className={`${styles.buttonGroup} col col-12`} data-phase="address">
        <NextStep />
      </section>
      <section className={`${styles.buttonGroup} col col-12`} data-phase="shipping">
        <PreviousStep />
        <NextStep />
      </section>
      <section className={`${styles.buttonGroup} col col-12`} data-phase="credit-card">
        <PreviousStep />
        <button className={styles.next}>確認下單</button>
      </section>
    </section>
  )
}