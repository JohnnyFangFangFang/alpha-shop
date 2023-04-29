// 引入基本 scss 設定
import "./reset.scss";
import "./base.scss";

// 引入元件
import Main from "./components/Main/Main.jsx";
import RegisterSection from "./components/Main/RegisterSection/RegisterSection.jsx";
import ProgressControl from "./components/Main/ProgressControl/ProgressControl.jsx";

function App() {
  return (
    <div className="App">
      <Main>
        <RegisterSection />
        <ProgressControl />
      </Main>
    </div>
  );
}

export default App;
