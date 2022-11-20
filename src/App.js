import "./App.css";
import Header from "./components/Header";
import BreadCrumb from "./components/breadCrumb";
import Banner from "./components/Banner";
import Card_One from "./components/Card_One";

function App() {
  return (
    <>
      <Header />
      <BreadCrumb />
      <Banner />
        <h4>Fresh recommendations</h4>
      <Card_One title="oppo f19 lush condiction" price="RS 39,500" address="DHA Phase 3, Lahore" time="2 hours"/>
    </>
  );
}

export default App;
