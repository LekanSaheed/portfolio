import "./App.css";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Home from "./components/Home";
import { useGlobalContext } from "./components/reducers/context";
import Services from "./components/Services";
import Works from "./components/Works";

const App = () => {
  const { dark } = useGlobalContext();
  return (
    <div className={dark ? "darkBg" : undefined}>
      <Banner />
      {/* <div style={{ height: "100vh", background: "red" }}>
        {" "}
        <div className="intro">I d sgakjakam asahegdhbngg</div>
        <div className="intro">I d sgakjakam asahegdhbnggssss</div>
      </div> */}
      <Header />
      <Home />
      <Services />
      <Works />
    </div>
  );
};
export default App;
