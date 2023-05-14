import styles from "./Step2.module.scss";
import { useState } from 'react';

// 目前 radio 第一次點選時怪怪的，需要多按一次
function ShippingType({ id, text, price, period }) {
  // 將點選的 radio 存到 state
  const [select, setSelect] = useState('標準運送');
  const handleSelectChange = event => {
    const value = event.target.value;
    // 這邊有個細節很奇怪，照理說這邊若印出 select 應該是上一次的值，但實際測試後，切換選項後第一次印出是正常的，但第二次後的印出卻是印出當下的 select
    // console.log('select:', select)
    setSelect(value);
  };
  // 裡面要用 defaultChecked，不要用 checked，不然勾選狀態只會被設定一次
  return (
    <label className={`${styles.radioGroup} col col-12`} data-price={price}>
      <input
        id={id}
        type="radio"
        name="shipping"
        value={text}
        defaultChecked={select === text}
        onClick={event => handleSelectChange(event)}
      />
      <div className={styles.radioInfo}>
        <div className={`${styles.textPriceContainer} col col-12`}>
          <div className={styles.text}>{text}</div>
          <div className={styles.price}>{price > 0 ? `$${price}` : '免費'}</div>
        </div>
        <div className={`${styles.period} col col-12`}>{period}</div>
      </div>
      <div className={styles.radioBoxBorder}></div>
    </label >
  )
}

export default function Step2() {
  return (
    <form className={`${styles.step2} col col-12`} data-phase="shipping">
      <h3 className={styles.formTitle}>運送方式</h3>
      <section className={`${styles.formBody} col col-12`}>
        <ShippingType id='shipping-standard' text='標準運送' price={0} period='約 3~7 個工作天' />
        <ShippingType id='shipping-dhl' text='DHL 貨運' price={500} period='48 小時內送達' />
      </section>
    </form>
  )
}