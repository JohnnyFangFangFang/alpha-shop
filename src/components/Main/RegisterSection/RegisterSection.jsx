import styles from "./RegisterSection.module.scss";

import StepProgress from "./StepProgress/StepProgress.jsx";
import StepForm from "./StepForm/StepForm.jsx";
// 如果想把 ProgressControl 放在 RegisterSection 就啟動
// import ProgressControl from "../ProgressControl/ProgressControl.jsx";

export default function RegisterSection() {
  return (
    <section className={`${styles.registerContainer} col col-lg-6 col-sm-12`} data-phase="1" data-total-price="0">
      <h2 className={`${styles.registerTitle} col col-12`}>結帳</h2>
      <StepProgress />
      <StepForm />
      {/* <ProgressControl /> */}
    </section>
  )
}