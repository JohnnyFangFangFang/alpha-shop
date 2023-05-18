import { useContext } from 'react';
import styles from "./Cart.module.scss";
import CartItems from "./CartItems.jsx";
import { CartContext } from './CartContext.jsx'

export default function Cart() {
  const { deliveryFee, totalPrice } = useContext(CartContext);

  return (
    <section className={`${styles.cartContainer} col col-lg-5 col-sm-12`}>
      <h3 className={styles.cartTitle}>購物籃</h3>
      <section className={`col col-12`} data-total-price={0}>
        <CartItems />
      </section>
      <section className={`${styles.cartInfo} shipping col col-12`}>
        <div className={styles.text}>運費</div>
        <div className={styles.price} >${new Intl.NumberFormat().format(deliveryFee)}</div>
      </section>
      <section className={`${styles.cartInfo} total col col-12`}>
        <div className={styles.text}>小計</div>
        <div className={styles.price} >${new Intl.NumberFormat().format(totalPrice)}</div>
      </section>
    </section>
  )
}
