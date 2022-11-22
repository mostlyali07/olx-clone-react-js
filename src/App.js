import "./App.css";
import Header from "./components/Header";
import BreadCrumb from "./components/breadCrumb";
import Banner from "./components/Banner";
import Card_One from "./components/Card_One";
import img1 from "../src/img2.jpeg";
import img2 from "../src/img8.jpeg";
import img3 from "../src/img3.jpeg";
import img4 from "../src/img4.jpeg";
import img5 from "../src/img5.jpeg";
import img6 from "../src/img6.jpeg";
import img7 from "../src/img7.jpeg";
import img8 from "../src/img9.jpeg";
// import Footer from "./components/Footer";

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
              <img src={img1} />
              <Card_One
                title="Thunder: Keyboard,Mouse"
                price="2,999"
                address="Mozang, Lahore"
                time="1 hours"
              />
            </div>
          </div>
          <div className="col-md-3">
            <div className="Pro_one">
              <img src={img2} />
              <Card_One
                title="oppo f19 lush condiction"
                price="39,500"
                address="Diamond City, Karachi"
                time="2 hours"
              />
            </div>
          </div>
          <div className="col-md-3">
            <div className="Pro_one">
              <img src={img3} />
              <Card_One
                title="Termite control, spray"
                price="39,500"
                address="DHA Phase 3, Lahore"
                time="2 hours"
              />
            </div>
          </div>
          <div className="col-md-3">
            <div className="Pro_one">
              <img src={img4} />
              <Card_One
                title="Brand New Flate for sale"
                price="5,700,000"
                address="Diamond City, Karachi"
                time="2 hours"
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <div className="Pro_one">
              <img src={img5} />
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
              <img src={img6} />
              <Card_One
                title="German Shefered Dog"
                price="20,500"
                address="DHA Phase 3, Karachi"
                time="1 hour"
              />
            </div>
          </div>
          <div className="col-md-3">
            <div className="Pro_one">
              <img src={img7} />
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
              <img src={img8} />
              <Card_One
                title="Plastic drum, DC cooler"
                price="39,500"
                address="Faisal Cantonment, Karachi"
                time="1 minute"
              />
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default App;
