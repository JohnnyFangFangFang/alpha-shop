import styles from "./CartItems.module.scss";

// 引入 svg、圖片
import minus from "assets/icons/minus.svg";
import plus from "assets/icons/plus.svg";

// 產生購物車內已選購項目，若數量按到 0 會從購物車清單移除
function CartItem({ id, name, img, price, quantity, increase1, increase2, decrease1, decrease2 }) {
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
          <div className={styles.productName}>{name}</div>
          <div className={styles.productControlContainer}>
            <div className={styles.productControl}>
              <img onClick={id === '1' ? decrease1 : decrease2}
                className={styles.productAction}
                src={minus}
                alt="minus.svg"
              />
              <span className={styles.productCount} >{quantity}</span>
              <img onClick={id === '1' ? increase1 : increase2}
                className={styles.productAction}
                src={plus}
                alt="plus.svg"
              />
            </div>
          </div>
          <div className={styles.price} >{price * quantity}</div>
        </div>
      </div>
    )
  }
}

// 將購物車內所有已加入的商品清單匯出
export default function CartItems({ data, increase1, increase2, decrease1, decrease2 }) {
  return (
    <>
      {data.map(cartItem =>
        <CartItem {...cartItem} key={cartItem.id} increase1={increase1} increase2={increase2} decrease1={decrease1} decrease2={decrease2} />
      )}
    </>
  )
}