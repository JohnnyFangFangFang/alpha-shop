import styles from "./Step2.module.scss";

function ShippingType({ text, period }) {
  return (
    <div className={styles.radioInfo}>
      <div className="col col-12">
        <div className={styles.text}>{text}</div>
        <div className={styles.price} />
      </div>
      <div className={`${styles.period} col col-12`}>{period}</div>
    </div>
  )
}

export default function Step2() {
  return (
    <form className={`${styles.step2} col col-12`} data-phase="shipping">
      <h3 className={styles.formTitle}>運送方式</h3>
      <section className={`${styles.formBody} col col-12`}>
        <label className={`${styles.radioGroup} col col-12`} data-price={0}>
          <input
            id="shipping-standard"
            type="radio"
            name="shipping"
            defaultChecked=""
          />
          <ShippingType text='標準運送' period='約 3~7 個工作天' />
          <div className={styles.radioBoxBorder} />
        </label>
        <label className={`${styles.radioGroup} col col-12`} data-price={500}>
          <input id="shipping-dhl" type="radio" name="shipping" />
          <ShippingType text='DHL 貨運' period='48 小時內送達' />
          <div className={styles.radioBoxBorder} />
        </label>
      </section>
    </form>
  )
}