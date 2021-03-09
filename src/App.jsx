import React, { Component } from "react";
import Navigation from "./components/navigation";
import Header from "./components/header";
//import Features from "./components/features";
/* import About from "./components/about"; */
import Services from "./components/services";
import Gallery from "./components/gallery";
//import Testimonials from "./components/testimonials";
/* import Team from "./components/Team";
 */ import Contact from "./components/contact";
import JsonData from "./data/data.json";
import Map from "./components/map";
import { GlobalStyle } from "./global.styles";
import { SliderData } from "./components/SliderData";

export class App extends Component {
  state = {
    landingPageData: {},
  };
  getlandingPageData() {
    this.setState({ landingPageData: JsonData });
  }

  componentDidMount() {
    this.getlandingPageData();
  }

  render() {
    return (
      <div>
        <GlobalStyle />
        <Navigation />
        <Header data={this.state.landingPageData.Header} />
        <Services data={this.state.landingPageData.Services} />
        {/* <Features data={this.state.landingPageData.Features} /> */}
        {/*   <About data={this.state.landingPageData.About} />
         */}
        <Map slides={SliderData} />
        <Gallery />
        {/*  <Testimonials data={this.state.landingPageData.Testimonials} /> */}
        {/*         <Team data={this.state.landingPageData.Team} />
         */}{" "}
        <Contact data={this.state.landingPageData.Contact} />
      </div>
    );
  }
}

export default App;
