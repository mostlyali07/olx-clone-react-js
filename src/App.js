import "./App.css";
import Header from "./components/Header";
import BreadCrumb from "./components/breadCrumb";
import Banner from "./components/Banner";
import Card_One from "./components/Card_One";
import img from "../src/img_2.jpeg";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Header />
      <BreadCrumb />
      <Banner />
      <div className="container">
        <h4>Fresh recommendations</h4>
        <div className="row">
          <div className="col-md-3">
            <div className="Pro_one">
              <img src={img} />
              <Card_One
                title="oppo f19 lush condiction"
                price="39,500"
                address="DHA Phase 3, Lahore"
                time="2 hours"
              />
            </div>
          </div>
          <div className="col-md-3">
            <div className="Pro_one">
              <img src={img} />
              <Card_One
                title="oppo f19 lush condiction"
                price="39,500"
                address="DHA Phase 3, Lahore"
                time="2 hours"
              />
            </div>
          </div>
          <div className="col-md-3">
            <div className="Pro_one">
              <img src={img} />
              <Card_One
                title="oppo f19 lush condiction"
                price="39,500"
                address="DHA Phase 3, Lahore"
                time="2 hours"
              />
            </div>
          </div>
          <div className="col-md-3">
            <div className="Pro_one">
              <img src={img} />
              <Card_One
                title="oppo f19 lush condiction"
                price="39,500"
                address="DHA Phase 3, Lahore"
                time="2 hours"
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <div className="Pro_one">
              <img src={img} />
              <Card_One
                title="oppo f19 lush condiction"
                price="39,500"
                address="DHA Phase 3, Lahore"
                time="2 hours"
              />
            </div>
          </div>
          <div className="col-md-3">
            <div className="Pro_one">
              <img src={img} />
              <Card_One
                title="oppo f19 lush condiction"
                price="39,500"
                address="DHA Phase 3, Lahore"
                time="2 hours"
              />
            </div>
          </div>
          <div className="col-md-3">
            <div className="Pro_one">
              <img src={img} />
              <Card_One
                title="oppo f19 lush condiction"
                price="39,500"
                address="DHA Phase 3, Lahore"
                time="2 hours"
              />
            </div>
          </div>
          <div className="col-md-3">
            <div className="Pro_one">
              <img src={img} />
              <Card_One
                title="oppo f19 lush condiction"
                price="39,500"
                address="DHA Phase 3, Lahore"
                time="2 hours"
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <div className="Pro_one">
              <img src={img} />
              <Card_One
                title="oppo f19 lush condiction"
                price="39,500"
                address="DHA Phase 3, Lahore"
                time="2 hours"
              />
            </div>
          </div>
          <div className="col-md-3">
            <div className="Pro_one">
              <img src={img} />
              <Card_One
                title="oppo f19 lush condiction"
                price="39,500"
                address="DHA Phase 3, Lahore"
                time="2 hours"
              />
            </div>
          </div>
          <div className="col-md-3">
            <div className="Pro_one">
              <img src={img} />
              <Card_One
                title="oppo f19 lush condiction"
                price="39,500"
                address="DHA Phase 3, Lahore"
                time="2 hours"
              />
            </div>
          </div>
          <div className="col-md-3">
            <div className="Pro_one">
              <img src={img} />
              <Card_One
                title="Iphone 7plus 128gb Pta Approved"
                price="26,500"
                address="DHA Phase 3, Karachi"
                time="5 hours"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
