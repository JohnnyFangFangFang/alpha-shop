import { useContext } from 'react';
import styles from "./CartItems.module.scss";
import { CartContext } from './CartContext.jsx'

// 引入 svg、圖片
import minus from "assets/icons/minus.svg";
import plus from "assets/icons/plus.svg";

// 產生購物車內已選購項目，若數量按到 0 會從購物車清單移除，商品數量也不會變負數
function CartItem({ id, name, img, price, quantity }) {
  const { handleChangeItemNumClick } = useContext(CartContext);
  if (quantity > 0) {
    return (
      <div
        className={`${styles.productContainer} col col-12`}
        data-count={quantity}
        data-price={price}
      >
        <img
          className={styles.imgContainer}
          src={img}
          alt="cart item img"
        />
        <div className={styles.productInfo}>
          <div className={styles.productNameAndPriceContainer}>
            <div className={styles.productName}>{name}</div>
            <div className={styles.price} >${new Intl.NumberFormat().format(price)}</div>
          </div>
          <div className={styles.productControlContainer}>
            <div className={styles.productControl}>
              <input
                className={styles.productAction}
                type="image"
                src={minus}
                alt="minus.svg"
                value={-1}
                onClick={e => { handleChangeItemNumClick(id, Number(e.target.value)) }}
              />
              <span className={styles.productCount} >{quantity}</span>
              <input
                className={styles.productAction}
                type="image"
                src={plus}
                alt="plus.svg"
                value={1}
                onClick={e => { handleChangeItemNumClick(id, Number(e.target.value)) }}
              />
            </div>
            {/* 為了刻意練習多做的，暫不顯示 */}
            {/* <div className={styles.price} >共：${new Intl.NumberFormat().format(price * quantity)}</div> */}
          </div>
        </div>
      </div>
    )
  }
}

// 將購物車內所有已加入的商品清單匯出
export default function CartItems() {
  const { cartItems } = useContext(CartContext);
  return (
    <>
      {cartItems.map(cartItem =>
        <CartItem {...cartItem} key={cartItem.id} />
      )}
    </>
  )
}