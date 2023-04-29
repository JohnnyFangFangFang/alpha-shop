// 做到一半，還沒弄圖片、svg

import styles from "./Cart.module.scss";

// 記得引入圖片、svg

// img 與 svg 尚未處理
function Product() {
  return (
    <div
      className={`${styles.productContainer} col col-12`}
      data-count={0}
      data-price={3999}
    >
      {/* <img className="img-container" src="./public/images/product-1.jpg" /> */}
      <div className={styles.productInfo}>
        <div className={styles.productName}>破壞補丁修身牛仔褲</div>
        <div className={styles.productControlContainer}>
          <div className={styles.productControl}>
            {/* <svg className="product-action minus">
              <use xlinkHref="#svg-icon-minus" />
            </svg> */}
            <span className={styles.productCount} />
            {/* <svg className="product-action plus">
              <use xlinkHref="#svg-icon-plus" />
            </svg> */}
          </div>
        </div>
        <div className={styles.price} />
      </div>
    </div>
  )
}

export default function Cart() {
  return (
    <section className={`${styles.cartContainer} col col-lg-5 col-sm-12`}>
      <h3 className={styles.cartTitle}>購物籃</h3>
      <section className={`${styles.productList} col col-12`} data-total-price={0}>
        <Product />
        <Product />
      </section>
      <section className={`${styles.cartInfo} shipping col col-12`}>
        <div className={styles.text}>運費</div>
        <div className={styles.price} />
      </section>
      <section className={`${styles.cartInfo} total col col-12`}>
        <div className={styles.text}>小計</div>
        <div className={styles.price} />
      </section>
    </section>
  )
}
