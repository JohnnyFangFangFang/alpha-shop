import StepProgress from "./components/Steps/StepProgress.jsx";
import Step1 from "./components/Steps/Step1.jsx";
import Step2 from "./components/Steps/Step2.jsx";
import Step3 from "./components/Steps/Step3.jsx";
import ProgressControl from "./components/Steps/ProgressControl.jsx";
import "./App.css";

function App() {
  return (
    <div>
      <main>
        <div>
          <StepProgress />
          <section>
            <Step1 />
            <Step2 />
            <Step3 />
          </section>
          <section>
            <ProgressControl />
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
