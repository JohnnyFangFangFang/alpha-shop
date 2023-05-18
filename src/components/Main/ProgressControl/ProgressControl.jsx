import styles from "./ProgressControl.module.scss";
import rightArrow from "assets/icons/right-arrow.svg";
import leftArrow from "assets/icons/left-arrow.svg";
// 引入信用卡資訊 Context
import { useContext } from "react";
import { CardInfoContext } from "CardInfoContext.jsx";


// 上一步按鈕
function PreviousStep({ handleClickPrevious }) {
  return (
    <button className={`${styles.prev} cursorPoint`} onClick={handleClickPrevious}>
      <img
        className={styles.svg}
        src={leftArrow}
        alt="left-arrow.svg"
      />
      上一步
    </button>
  )
}

// 下一步按鈕
function NextStep({ handleClickNext }) {
  return (
    <button className={`${styles.next} cursorPoint`} onClick={handleClickNext} >
      下一步
      <img
        className={styles.svg}
        src={rightArrow}
        alt="right-arrow.svg"
      />
    </button>
  )
}

// 已全數完成 3 個步驟的畫面切換
export default function ProgressControl({ handleClickPrevious, handleClickNext, stepPhase }) {

  const { handleSubmit } = useContext(CardInfoContext);

  return (
    <section className={`${styles.progressControlContainer} col col-lg-6 col-sm-12`}>

      {stepPhase === 1 &&
        <section className={`${styles.buttonGroup} col col-12`} data-phase="address">
          <NextStep handleClickNext={handleClickNext} />
        </section>}

      {stepPhase === 2 && <section className={`${styles.buttonGroup} col col-12`} data-phase="shipping">
        <PreviousStep handleClickPrevious={handleClickPrevious} />
        <NextStep handleClickNext={handleClickNext} />
      </section>}

      {stepPhase === 3 && <section className={`${styles.buttonGroup} col col-12`} data-phase="credit-card">
        <PreviousStep handleClickPrevious={handleClickPrevious} />
        <button className={`${styles.next} cursorPoint`} onClick={handleSubmit}>確認下單</button>
      </section>}

    </section>
  )
}