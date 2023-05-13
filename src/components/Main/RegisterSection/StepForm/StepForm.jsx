import styles from "./StepForm.module.scss";

import Step1 from "./Step1.jsx";
import Step2 from "./Step2.jsx";
import Step3 from "./Step3.jsx";

// 已全數完成 3 個步驟的畫面切換
export default function StepsForm({ stepPhase }) {
  return (
    <section className={`${styles.formContainer} col col-12`}>
      {stepPhase === 1 && <Step1 />}
      {stepPhase === 2 && <Step2 />}
      {stepPhase === 3 && <Step3 />}
    </section>
  )
}