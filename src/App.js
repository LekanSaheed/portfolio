import "./App.css";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import MobileNav from "./components/MobileNav";
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
      <MobileNav />
      <Home />
      <Services />
      <Works />
      <Footer />
    </div>
  );
};
export default App;
