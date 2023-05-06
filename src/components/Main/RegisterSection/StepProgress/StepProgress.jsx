import styles from "./StepProgress.module.scss";
import pgComplete from "assets/icons/pg-complete.svg";

function StepNotice({ dataPhase, text, label }) {
  return (
    <span className={styles.progressGroup} dataPhase={dataPhase}>
      <span className={styles.progressIcon}>
        <span className={styles.text}>{text}</span>
        <img className={`${styles.icon} cursorPoint`} src={pgComplete} alt="pg-complete.svg" />
      </span>
      <span className={styles.progressLabel}>{label}</span>
    </span>
  )
}

// 暫時先顯示靜態版面，以 Step1 為主
export default function StepProgress() {
  return (
    <section className={`${styles.progressContainer} col col-12`}>
      <StepNotice dataPhase='address' text='' label='寄送地址' />
      <span className={styles.progressBar} data-order={1} />

      {/* <StepNotice dataPhase='shipping' text='2' label='運送方式' /> */}
      <span className={styles.progressGroup} dataPhase='shipping'>
        <span className={styles.progressIcon}>
          <span className={styles.text}>2</span>
        </span>
        <span className={styles.progressLabel}>運送方式</span>
      </span>

      <span className={styles.progressBar} data-order={2} />
      
      {/* <StepNotice dataPhase='credit-card' text='3' label='付款資訊' /> */}
      <span className={styles.progressGroup} dataPhase='credit-card'>
        <span className={styles.progressIcon}>
          <span className={styles.text}>3</span>
        </span>
        <span className={styles.progressLabel}>付款資訊</span>
      </span>
    </section>
  )
}
