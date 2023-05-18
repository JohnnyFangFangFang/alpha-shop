import styles from "./Step3.module.scss";
import { useContext } from "react";
import { CardInfoContext } from "CardInfoContext.jsx";


function CreditCardInfo({ class2, class3, infoName, nameContent, placeholder }) {
  const { handleChange } = useContext(CardInfoContext);
  return (
    <div className={`${styles.inputGroup} ${class2} ${class3}`}>
      <div className={styles.inputLabel}>{infoName}</div>
      <input type="text" name={nameContent} placeholder={placeholder} onChange={e => handleChange(e)} />
    </div>
  )
}

export default function Step3() {
  return (
    <form className={`${styles.step3} col col-12`} data-phase="credit-card">
      <h3 className={styles.formTitle}>付款資訊</h3>
      <section className={`${styles.formBody} col col-12`}>
        <div className="col col-12">
          <CreditCardInfo class2='input-w-lg-4' class3='input-w-sm-full' infoName='持卡人姓名' nameContent='cardHolderName' placeholder='John Doe' />
        </div>
        <div className="col col-12">
          <CreditCardInfo class2='input-w-lg-4' class3='input-w-sm-full' infoName='卡號' nameContent='cardNumber' placeholder='1111 2222 3333 4444' />
        </div>
        <div className="col col-12">
          <CreditCardInfo class2='input-w-lg-3' class3='input-w-sm-s3' infoName='有效期限' nameContent='cardExpirationDate' placeholder='MM/YY' />
          <CreditCardInfo class2='input-w-lg-3' class3='input-w-sm-s3' infoName='CVC / CCV' nameContent='cardCVC' placeholder={123} />
        </div>
      </section>
    </form>
  )
}