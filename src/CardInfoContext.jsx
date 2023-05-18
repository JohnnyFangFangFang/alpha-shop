// 送出後是否清空表單？
// 將信用卡資訊存在這

import { createContext, useState } from "react";

const CardInfoContext = createContext('');

function CardProvider({ children }) {

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