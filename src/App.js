// 引入基本 scss 設定
import "styles/reset.scss";
import "styles/base.scss";

// 引入元件
import Main from "components/Main/Main.jsx";
import RegisterSection from "components/Main/RegisterSection/RegisterSection.jsx";
// 如果想把 ProgressControl 放在 Main 就啟動
import ProgressControl from "components/Main/ProgressControl/ProgressControl.jsx";
import Cart from "components/Main/Cart/Cart.jsx";

function App() {
  return (
    <div className="App">
      <Main>
        <RegisterSection />
        <Cart />
        <ProgressControl />
      </Main>
    </div>
  );
}

export default App;
