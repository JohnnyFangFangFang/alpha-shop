// 引入基本 scss 設定
import "styles/reset.scss";
import "styles/base.scss";
// 引入 useState
import { useState } from 'react';
// 引入要使用的信用卡 Context
import { CardProvider } from './CardInfoContext.jsx';
// // 引入要使用的購物籃 Context
import { CartProvider } from 'components/Main/Cart/CartContext.jsx'

// 引入元件
import Main from "components/Main/Main.jsx";
import RegisterSection from "components/Main/RegisterSection/RegisterSection.jsx";
import ProgressControl from "components/Main/ProgressControl/ProgressControl.jsx";
import Cart from "components/Main/Cart/Cart.jsx";

// App 內容
function App() {
  const [stepPhase, setStepPhase] = useState(1)

  function handleClickNext() {
    if (stepPhase < 3) {
      setStepPhase(stepPhase + 1)
    }
  }

  function handleClickPrevious() {
    if (stepPhase > 1) {
      setStepPhase(stepPhase - 1)
    }
  }

  return (
    <div className="App">
      <Main>
        <CardProvider>
          <CartProvider>
            <RegisterSection stepPhase={stepPhase} />
            <Cart />
            <ProgressControl handleClickNext={handleClickNext} handleClickPrevious={handleClickPrevious} stepPhase={stepPhase} />
          </CartProvider>
        </CardProvider>
      </Main>
    </div>
  );
}

export default App;
