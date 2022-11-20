import "./App.css";
import Header from "./components/Header";
import BreadCrumb from "./components/breadCrumb";
import Banner from "./components/Banner";
import Card_One from "./components/Card_One";
import img from "../src/img_2.jpeg";

function App() {
  return (
    <>
      <Header />
      <BreadCrumb />
      <Banner />
      <div className="container">
      <h4>Fresh recommendations</h4>
        <div className="row">
          <div className="col-md-3 Pro_one">
            <img src={img} />
            <Card_One
              title="oppo f19 lush condiction"
              price="RS 39,500"
              address="DHA Phase 3, Lahore"
              time="2 hours"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
