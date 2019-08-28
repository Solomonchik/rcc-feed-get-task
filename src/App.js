import React, { Component } from "react";
import NewsFeed from "./components/newsFeed";
import TopNavigation from "./components/TopNavigation";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <TopNavigation />
        <header className={"headerCont"}>
          {/* eslint-disable-next-line */}
          <div className={'sireBranding'}>
              <a href="/#" >
                  <h1>DEV98</h1>
                  <h2>A Blog Of The Netz98 Developer Team</h2>
              </a>
          </div>
        </header>
        <NewsFeed />
        <Footer/>
      </div>
    );
  }
}

export default App;
