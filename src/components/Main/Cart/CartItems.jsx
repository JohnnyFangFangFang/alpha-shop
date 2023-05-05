import styles from "./CartItems.module.scss";

// 引入 svg、圖片
import minus from "../../../icons/minus.svg";
import plus from "../../../icons/plus.svg";

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

function CartItem({ _id, name, img, price, quantity }) {
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
            <img
              className={styles.productAction}
              src={minus}
              alt="minus.svg"
            />
            <span className={styles.productCount} >{quantity}</span>
            <img
              className={styles.productAction}
              src={plus}
              alt="plus.svg"
            />
          </div>
        </div>
        <div className={styles.price} >${price}</div>
      </div>
    </div>
  )
}

// 將購物車內所有已加入的商品清單匯出
export default function CartItems() {
  return (
    <>
      {cartItemsData.map(cartItem =>
        <CartItem {...cartItem} key={cartItem.id} />
      )}
    </>
  )
}