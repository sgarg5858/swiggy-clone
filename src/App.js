import ReactDOM from "react-dom/client";
import { HeaderComponent } from "./Header";
import { MainComponent } from "./Main";
import { FooterComponent } from "./Footer";

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
