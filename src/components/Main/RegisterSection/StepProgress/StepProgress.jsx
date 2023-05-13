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

// 要再優化，程式碼應該要更簡潔
// 因為不是很懂原本寫好的 SCSS，這邊先照我的方式寫
export default function StepProgress({ stepPhase }) {
  return (
    <section className={`${styles.progressContainer} col col-12`}>
      {stepPhase === 1 && <>
        <StepProgressNotice stepPhase={stepPhase} dataPhase='address' imgDisplay={false} textClass='textBgcBlack' text='1' labelClass='progressLabel' label='寄送地址' />
        <StepProgressBar dataOrder={1} progressBarClass='progressBar' />
        <StepProgressNotice stepPhase={stepPhase} dataPhase='shipping' imgDisplay={false} textClass='textUndone' text='2' labelClass='labelUndone' label='運送方式' />
        <StepProgressBar dataOrder={2} progressBarClass='progressBarUndone' />
        <StepProgressNotice stepPhase={stepPhase} dataPhase='credit-card' imgDisplay={false} textClass='textUndone' text='3' labelClass='labelUndone' label='付款資訊' />
      </>}

      {stepPhase === 2 && <>
        <StepProgressNotice stepPhase={stepPhase} dataPhase='address' imgDisplay={true} textClass='textBgcBlack' text='1' labelClass='progressLabel' label='寄送地址' />
        <StepProgressBar dataOrder={1} progressBarClass='progressBar' />
        <StepProgressNotice stepPhase={stepPhase} dataPhase='shipping' imgDisplay={false} textClass='text' text='2' labelClass='progressLabel' label='運送方式' />
        <StepProgressBar dataOrder={2} progressBarClass='progressBar' />
        <StepProgressNotice stepPhase={stepPhase} dataPhase='credit-card' imgDisplay={false} textClass='textUndone' text='3' labelClass='labelUndone' label='付款資訊' />
      </>}

      {stepPhase === 3 && <>
        <StepProgressNotice stepPhase={stepPhase} dataPhase='address' imgDisplay={true} textClass='textBgcBlack' text='1' labelClass='progressLabel' label='寄送地址' />
        <StepProgressBar dataOrder={1} progressBarClass='progressBar' />
        <StepProgressNotice stepPhase={stepPhase} dataPhase='shipping' imgDisplay={true} textClass='text' text='2' labelClass='progressLabel' label='運送方式' />
        <StepProgressBar dataOrder={2} progressBarClass='progressBar' />
        <StepProgressNotice stepPhase={stepPhase} dataPhase='credit-card' imgDisplay={false} textClass='text' text='3' labelClass='progressLabel' label='付款資訊' />
      </>}
    </section>
  )
}
