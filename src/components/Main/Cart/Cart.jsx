import { useState } from 'react';

import styles from "./Cart.module.scss";
import CartItems from "./CartItems.jsx";

// 測試用資料
const cartItemsData = [
  {
    id: '1',
    name: '貓咪罐罐',
    img: 'https://picsum.photos/300/300?text=1',
    price: 100,
    quantity: 2,
  },
  {
    id: '2',
    name: '貓咪干干',
    img: 'https://picsum.photos/300/300?text=2',
    price: 200,
    quantity: 1,
  },
]

// 計算用資料
const cartItemsDataForCal = cartItemsData.map(cartItemData => {
  return { ...cartItemData }
})


// 目前先做兩個 item 的計算邏輯，之後要想如何優化
// 本單元題目尚未提及運費邏輯，故先以 0 計算
export default function Cart() {

  const [quantity1, setQuantity1] = useState(cartItemsDataForCal[0].quantity)
  const [quantity2, setQuantity2] = useState(cartItemsDataForCal[1].quantity)

  const totalPrice = cartItemsDataForCal[0].quantity * cartItemsDataForCal[0].price + cartItemsDataForCal[1].quantity * cartItemsDataForCal[1].price
  const deliveryFee = 0

  function handleIncreaseItem1Click() {
    // 不太懂為何裡面直接寫 quantity1 + 1 會沒反應
    setQuantity1(
      cartItemsDataForCal[0].quantity = cartItemsDataForCal[0].quantity + 1
    )
  }

  function handleIncreaseItem2Click() {
    setQuantity2(
      cartItemsDataForCal[1].quantity = cartItemsDataForCal[1].quantity + 1
    )
  }

  function handleDecreaseItem1Click() {
    // 商品數量不能有負數
    if (cartItemsDataForCal[0].quantity > 0) {
      setQuantity1(
        cartItemsDataForCal[0].quantity = cartItemsDataForCal[0].quantity - 1
      )
    }
  }

  function handleDecreaseItem2Click() {
    if (cartItemsDataForCal[1].quantity > 0) {
      setQuantity2(
        cartItemsDataForCal[1].quantity = cartItemsDataForCal[1].quantity - 1
      )
    }
  }

  console.log(cartItemsDataForCal)

  return (
    <section className={`${styles.cartContainer} col col-lg-5 col-sm-12`}>
      <h3 className={styles.cartTitle}>購物籃</h3>
      <section className={`col col-12`} data-total-price={0}>
        <CartItems data={cartItemsDataForCal} increase1={handleIncreaseItem1Click} increase2={handleIncreaseItem2Click} decrease1={handleDecreaseItem1Click} decrease2={handleDecreaseItem2Click} />
      </section>
      <section className={`${styles.cartInfo} shipping col col-12`}>
        <div className={styles.text}>運費</div>
        <div className={styles.price} >{deliveryFee}</div>
      </section>
      <section className={`${styles.cartInfo} total col col-12`}>
        <div className={styles.text}>小計</div>
        <div className={styles.price} >{totalPrice + deliveryFee}</div>
      </section>
    </section>
  )
}
