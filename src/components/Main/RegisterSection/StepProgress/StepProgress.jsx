import styles from "./StepProgress.module.scss";
import pgComplete from "assets/icons/pg-complete.svg";

// 步驟數字與名稱
// 因為要讓 styles 能接收變數，所以用「[]」取值而非「.」
function StepProgressNotice({ dataPhase, imgDisplay, textClass, text, labelClass, label }) {
  return (
    <span className={styles.progressGroup} dataPhase={dataPhase}>
      <span className={styles.progressIcon}>
        {imgDisplay ? <img className={`${styles.icon} cursorPoint`} src={pgComplete} alt="pg-complete.svg" /> : <span className={styles[textClass]}>{text}</span>}
      </span>
      <span className={styles[labelClass]}>{label}</span>
    </span>
  )
}

// 步驟橫條
function StepProgressBar({ dataOrder, progressBarClass }) {
  return (
    <span className={styles[progressBarClass]} data-order={dataOrder} />
  )
}

// 不同步驟渲染樣式
function StepProgressLayout({ imgDisplay1, imgDisplay2, imgDisplay3, textClass1, textClass2, textClass3, labelClass1, labelClass2, labelClass3, progressBarClass1, progressBarClass2 }) {
  return (
    <>
      <StepProgressNotice dataPhase='address' imgDisplay={imgDisplay1} textClass={textClass1} text='1' labelClass={labelClass1} label='寄送地址' />
      <StepProgressBar dataOrder={1} progressBarClass={progressBarClass1} />
      <StepProgressNotice dataPhase='shipping' imgDisplay={imgDisplay2} textClass={textClass2} text='2' labelClass={labelClass2} label='運送方式' />
      <StepProgressBar dataOrder={2} progressBarClass={progressBarClass2} />
      <StepProgressNotice dataPhase='credit-card' imgDisplay={imgDisplay3} textClass={textClass3} text='3' labelClass={labelClass3} label='付款資訊' />
    </>
  )
}

// 因為不是很懂原本寫好的 SCSS，這邊先照我的方式練習 React
// 要再優化，程式碼應該要更簡潔
export default function StepProgress({ stepPhase }) {
  return (
    <section className={`${styles.progressContainer} col col-12`}>

      {stepPhase === 1 &&
        <StepProgressLayout imgDisplay1={false} imgDisplay2={false} imgDisplay={false} textClass1='textBgcBlack' textClass2='textUndone' textClass3='textUndone' labelClass1='progressLabel' labelClass2='labelUndone' labelClass3='labelUndone' progressBarClass1='progressBar' progressBarClass2='progressBarUndone' />
      }

      {stepPhase === 2 &&
        <StepProgressLayout imgDisplay1={true} imgDisplay2={false} imgDisplay={false} textClass1='textBgcBlack' textClass2='text' textClass3='textUndone' labelClass1='progressLabel' labelClass2='progressLabel' labelClass3='labelUndone' progressBarClass1='progressBar' progressBarClass2='progressBar' />
      }

      {stepPhase === 3 &&
        <StepProgressLayout imgDisplay1={true} imgDisplay2={true} imgDisplay={false} textClass1='textBgcBlack' textClass2='text' textClass3='text' labelClass1='progressLabel' labelClass2='progressLabel' labelClass3='progressLabel' progressBarClass1='progressBar' progressBarClass2='progressBar' />
      }

    </section>
  )
}
