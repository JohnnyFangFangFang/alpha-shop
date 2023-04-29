import styles from "./Step3.module.scss";

function CreditCardInfo({ class2, class3, infoName, placeholder }) {
  return (
    <div className={`${styles.inputGroup} ${class2} ${class3}`}>
      <div className={styles.inputLabel}>{infoName}</div>
      <input type="text" placeholder={placeholder} />
    </div>
  )
}

export default function Step3() {
  return (
    <form className={`${styles.step3} col col-12`} data-phase="credit-card">
      <h3 className={styles.formTitle}>付款資訊</h3>
      <section className={`${styles.formBody} col col-12`}>
        <div className="col col-12">
          <CreditCardInfo class2='input-w-lg-4' class3='input-w-sm-full' infoName='持卡人姓名' placeholder='John Doe' />
        </div>
        <div className="col col-12">
          <CreditCardInfo class2='input-w-lg-4' class3='input-w-sm-full' infoName='卡號' placeholder='1111 2222 3333 4444' />
        </div>
        <div className="col col-12">
          <CreditCardInfo class2='input-w-lg-3' class3='input-w-sm-s3' infoName='有效期限' placeholder='MM/YY' />
          <CreditCardInfo class2='input-w-lg-3' class3='input-w-sm-s3' infoName='CVC / CCV' placeholder={123} />
        </div>
      </section>
    </form>
  )
}