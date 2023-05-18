// 將初始資料、購物車狀態、總價存在這

import { createContext, useState } from "react";

const dummyCartItemsData = [
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

const CartContext = createContext('');

// 本單元題目尚未處理運費邏輯，故先以 0 計算
function CartProvider({ children }) {

  // 購物籃商品清單最新狀態
  const [cartItems, setCartItems] = useState(dummyCartItemsData)

  // 運費
  const deliveryFee = 0
  // 商品總價含運費
  const totalPrice = cartItems.reduce((current, next) => current + next.price * next.quantity, deliveryFee)

  // 處理購物籃商品項目數量變化
  function handleChangeItemNumClick(id, amountChange) {
    setCartItems(cartItems.map(cartItem => {
      if (cartItem.id === id) {
        return { ...cartItem, quantity: cartItem.quantity + amountChange }
      } else { return cartItem }
    }))
  }

  return (
    <CartContext.Provider value={{ cartItems, deliveryFee, totalPrice, handleChangeItemNumClick }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider }