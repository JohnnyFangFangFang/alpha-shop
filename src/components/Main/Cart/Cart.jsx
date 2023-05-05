import styles from "./Cart.module.scss";
import CartItems from "./CartItems.jsx";

// 之後階段再做運費、小計的計算邏輯
export default function Cart() {
  return (
    <section className={`${styles.cartContainer} col col-lg-5 col-sm-12`}>
      <h3 className={styles.cartTitle}>購物籃</h3>
      <section className={`col col-12`} data-total-price={0}>
        <CartItems />
      </section>
      <section className={`${styles.cartInfo} shipping col col-12`}>
        <div className={styles.text}>運費</div>
        <div className={styles.price} >免費</div>
      </section>
      <section className={`${styles.cartInfo} total col col-12`}>
        <div className={styles.text}>小計</div>
        <div className={styles.price} >$300</div>
      </section>
    </section>
  )
}
