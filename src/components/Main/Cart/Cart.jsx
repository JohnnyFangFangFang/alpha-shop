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

// 計算用資料，確保不會改到原資料
const cartItemsDataForCal = cartItemsData.map(cartItemData => {
  return { ...cartItemData }
})

// 本單元題目尚未處理運費邏輯，故先以 0 計算
export default function Cart() {

  // 將購物籃商品清單最新狀態放這
  const [cartItems, setCartItems] = useState(cartItemsDataForCal)

  // 運費
  const deliveryFee = 0

  // 商品總價含運費
  const cartItemsPrice = []
  cartItems.forEach(e => cartItemsPrice.push(e.price * e.quantity))
  const totalPrice = cartItemsPrice.reduce((current, next) => current + next, deliveryFee)

  // 處理購物籃商品項目數量變化
  function handleChangeItemNumClick(id, action) {
    setCartItems(cartItems.map(cartItem => {
      if (cartItem.id === id) {
        if (action === 'increase') {
          return { ...cartItem, quantity: cartItem.quantity + 1 }
        } else {
          return { ...cartItem, quantity: cartItem.quantity - 1 };
        }
      } else {
        return cartItem;
      }
    })
    )
  }

  return (
    <section className={`${styles.cartContainer} col col-lg-5 col-sm-12`}>
      <h3 className={styles.cartTitle}>購物籃</h3>
      <section className={`col col-12`} data-total-price={0}>
        <CartItems data={cartItems} handleChangeItemNumClick={handleChangeItemNumClick} />
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
