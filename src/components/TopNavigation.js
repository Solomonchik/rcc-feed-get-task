import React, {Component} from "react";

export default class TopNavigation extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }


    render() {
        const clsMenu = ["burger"];
        const clsUlItems = ["ulItems"];

        if (this.state.isOpen) {
            clsMenu.push("burgerActive")
        } else {
            for (let i in clsMenu) {
                if (clsMenu[i] === "burgerActive") {
                    clsMenu.splice(i, 1)
                }
            }
        }

        if(!this.state.isOpen) {
          clsUlItems.push("close")
        }

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
                    <div className={clsMenu.join(" ")} onClick={this.toggle}>
                        <div className="lineBurger line1"/>
                        <div className="lineBurger line2"/>
                        <div className="lineBurger line3"/>
                    </div>
                    <div isOpen={this.state.isOpen} className={clsUlItems.join(" ")}>
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
            </div>
        );
    }
}
