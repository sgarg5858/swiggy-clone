import ReactDOM from "react-dom/client";
import { HeaderComponent } from "./components/Header";
import { MainComponent } from "./components/Main";
import FooterComponent from "./components/Footer";

const AppComponent = () => {
  return (
    <div id="app" className="app">
      <HeaderComponent />
      <MainComponent />
      <FooterComponent />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppComponent />);
