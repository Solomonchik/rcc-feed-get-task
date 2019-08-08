import React, { Component } from "react";

export default class TopNavigation extends Component {
  render() {
    return (
      <div className={"topNavigationCont"}>
        <div className={"topNavigationSubCont"}>
          <div className={"navBarBrand"}>
            <h1>DEV98</h1>
          </div>
          <ul>
            <li>
              <a
                href="https://dev98.de/category/general/"
                target="_blank"
                rel="noopener noreferrer"
              >
                GENERAL
              </a>
            </li>
            <li>
              <a
                href="https://dev98.de/category/magento-1/"
                target="_blank"
                rel="noopener noreferrer"
              >
                MAGENTO 1
              </a>
            </li>
            <li>
              <a
                href="https://dev98.de/category/magento-2/"
                target="_blank"
                rel="noopener noreferrer"
              >
                MAGENTO 2
              </a>
            </li>
            <li>
              <a
                href="https://dev98.de/category/devop/"
                target="_blank"
                rel="noopener noreferrer"
              >
                DEVOP
              </a>
            </li>
            <li>
              <a
                href="https://dev98.de/open-source/"
                target="_blank"
                rel="noopener noreferrer"
              >
                OPEN SOURCE
              </a>
            </li>
            <li>
              <a
                href="https://dev98.de/impressum/"
                target="_blank"
                rel="noopener noreferrer"
              >
                IMPRINT
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
