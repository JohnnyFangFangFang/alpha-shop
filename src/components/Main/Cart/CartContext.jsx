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

function CartProvider({ children }) {

  // 購物車最新狀態
  const [cartItems, setCartItems] = useState(dummyCartItemsData)
  const [cardInfo, setCardInfo] = useState({
    cardHolderName: '',
    cardNumber: '',
    cardExpirationDate: '',
    cardCVC: '',
  });

  // 獲取表單填寫的資料並更新 cardInfo
  function handleChange(e) {
    const { name, value } = e.target;
    if (cardInfo.hasOwnProperty(name)) {
      setCardInfo({
        ...cardInfo,
        [name]: value,
      })
    }
  };

  // 在表單提交時印出 cardInfo
  function handleSubmit() {
    console.log(cardInfo)
  };

  return (
    <CardInfoContext.Provider value={{ cardInfo, handleSubmit, handleChange }}>
      {children}
    </CardInfoContext.Provider>
  );
};

export { CardInfoContext, CardProvider }