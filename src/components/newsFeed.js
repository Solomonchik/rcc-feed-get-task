import React, {Component} from "react";
import {parseString} from "xml2js";


class NewsFeed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            query: ""
        };
    }

    componentDidMount() {
        let proxyUrl = "https://cors-anywhere.herokuapp.com/",
            targetUrl = "https://dev98.de/feed/";
        fetch(proxyUrl + targetUrl)
            .then(response => response.text())
            .then(responseText => {
                parseString(responseText, (err, result) => {
                    // let items = result.rss.channel[0].item;
                    let items = result.rss.channel[0].item;
                    console.log(result);
                    this.setState({
                        data: items
                    });
                    return;
                });
            })
            .catch(err => {
                console.log("Error fetching the feed: ", err);
            });
    }


    render() {
        let rssObj = this.state.data;
        // let images = this.state.images;

        let newRssObj = [...rssObj];
        let formatNewRpsObj = newRssObj.splice(5, 9);
        console.log('newRssObj', formatNewRpsObj);
        // if (newRssObj) {
        //     newRssObj = rssObj.reduce(5, 9);
        //     console.log('newRssObj', newRssObj);
        // }


        return (
            <div className={"newsFeedContainer"}>
                <div className="primaryCont">
                    {rssObj
                        ? rssObj.map((oneItem, index) => {
                            let date = oneItem.pubDate;
                            let year = new Date(date).getFullYear();
                            let month = String(new Date(date).getMonth() + 1).padStart(2, '0');
                            let day = String(new Date(date).getDay() + 1).padStart(2, '0');
                            let formattedDate = year + "-" + month + "-" + day;

                            return (
                                <div className={"itemCont"} key={index}>
                                    <div className={'imgDiv'}>
                                        <h1>Placeholder</h1>
                                        <h2>___________</h2>
                                    </div>
                                    <h2>
                                        <a
                                            href={oneItem.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {oneItem.title}
                                        </a>
                                    </h2>
                                    <div style={{listStyle: "none"}} className={"divCont"}>
                                        <h5>
                                            <i
                                                className="fa fa-calendar-o"
                                                aria-hidden="true"
                                            />
                                            <a href={oneItem ? formattedDate : null}>{oneItem ? formattedDate : null}</a>
                                            <i
                                                className="fa fa-user"
                                                aria-hidden="true"
                                            />
                                            <a href={oneItem ? oneItem["dc:creator"] : null}>{oneItem ? oneItem["dc:creator"] : null}</a>
                                            <i
                                                className="fa fa-comments-o"
                                                aria-hidden="true"
                                            />
                                            <a href={oneItem.comments[0]}>Comments</a>
                                        </h5>
                                    </div>
                                    <div className={'textContainer'}>
                                        <p className={'textSubContOne'}>
                                            {oneItem.description
                                                .toString()
                                                .replace(/<[^>]*>/g, "")
                                                .replace("Read More", "")
                                                .replace("Read More", "")
                                                .replace("&#8211;", "-")
                                                .replace("&#8211;", "-")
                                            }
                                        </p>
                                        <p className={'textSubContTwo'}><a href={oneItem.link}>Read More</a></p>
                                    </div>
                                </div>
                            );
                        })
                        : null}
                </div>
                <div className="secondaryCont">
                    <div className={"firstItemInCont"}>
                        <h4>SEARCH</h4>
                        <form className={"searchForm"}>
                            <label>
                                <input type="text" placeholder={"Search..."} id={"Search"}/>
                            </label>
                            <button className={"searchSubmit"}/>
                        </form>
                    </div>
                    <div className={"RecentPostCont"}>
                        <h4>Recent posts</h4>
                        {formatNewRpsObj
                            ? formatNewRpsObj.map((oneItem, index) => {
                                return (
                                    <ul key={index}
                                        className={"ulForRecentPostCont"}>
                                        <li>
                                            <a
                                                href={oneItem.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                {oneItem.title}
                                            </a>
                                        </li>
                                    </ul>
                                );
                            })
                            : null}
                    </div>
                    <div className="feedsCont">
                        <h4 className="widgetTitle">Feeds</h4>
                        <ul>
                            <li>
                                <a target="_self" href="https://dev98.de/feed/" title="Subscribe to Posts">
                                    RSS - Posts</a>
                            </li>
                            <li style={{borderBottom: 'none'}}>
                                <a target="_self" href="https://dev98.de/comments/feed/" title="Subscribe to Comments">
                                    RSS - Comments
                                </a>
                            </li>
                        </ul>
                    </div>
                    <aside className={'asideCont'}>
                        <h4 className="widgetTitle">Tags</h4>
                        <div className="tagCloud">
                            <a href="https://dev98.de/tag/api/"
                               className="tag-cloud-link tag-link-94 tag-link-position-1"
                               style={{fontSize: '11.876923076923pt'}}
                               aria-label="api (2 items)">api</a>
                            <a href="https://dev98.de/tag/array/"
                               className="tag-cloud-link tag-link-8 tag-link-position-2" style={{fontSize: '8pt'}}
                               aria-label="array (1 item)">array</a>
                            <a href="https://dev98.de/tag/attribtue/"
                               className="tag-cloud-link tag-link-35 tag-link-position-3" style={{fontSize: '8pt'}}
                               aria-label="attribute (1 item)">attribtue</a>
                            <a href="https://dev98.de/tag/attribute/"
                               className="tag-cloud-link tag-link-32 tag-link-position-4"
                               style={{fontSize: '14.461538461538pt'}} aria-label="attribute (3 items)">attribute</a>
                            <a href="https://dev98.de/tag/attribute-options/"
                               className="tag-cloud-link tag-link-31 tag-link-position-5" style={{fontSize: '8pt'}}
                               aria-label="attribute-options (1 item)">attribute-options</a>
                            <a href="https://dev98.de/tag/best-practice/"
                               className="tag-cloud-link tag-link-21 tag-link-position-6" style={{fontSize: '8pt'}}
                               aria-label="Best Practice (1 item)">Best Practice</a>
                            <a href="https://dev98.de/tag/composer/"
                               className="tag-cloud-link tag-link-47 tag-link-position-7"
                               style={{fontSize: '11.876923076923pt'}} aria-label="composer (2 items)">composer</a>
                            <a href="https://dev98.de/tag/configurable-products/"
                               className="tag-cloud-link tag-link-34 tag-link-position-8" style={{fontSize: '8pt'}}
                               aria-label="configurable-products (1 item)">configurable-products</a>
                            <a href="https://dev98.de/tag/deployer/"
                               className="tag-cloud-link tag-link-46 tag-link-position-9"
                               style={{fontSize: '18.338461538462pt'}} aria-label="deployer (5 items)">deployer</a>
                            <a href="https://dev98.de/tag/deployment/"
                               className="tag-cloud-link tag-link-45 tag-link-position-10"
                               style={{fontSize: '18.338461538462pt'}} aria-label="deployment (5 items)">deployment</a>
                            <a href="https://dev98.de/tag/devexchange/"
                               className="tag-cloud-link tag-link-77 tag-link-position-11"
                               style={{fontSize: '11.876923076923pt'}}
                               aria-label="DevExchange (2 items)">DevExchange</a>
                            <a href="https://dev98.de/tag/devop/"
                               className="tag-cloud-link tag-link-15 tag-link-position-12" style={{fontSize: '8pt'}}
                               aria-label="devop (1 item)">devop</a>
                            <a href="https://dev98.de/tag/di/"
                               className="tag-cloud-link tag-link-43 tag-link-position-13"
                               style={{fontSize: '11.876923076923pt'}} aria-label="di (2 items)">di</a>
                            <a href="https://dev98.de/tag/docker/"
                               className="tag-cloud-link tag-link-11 tag-link-position-14" style={{fontSize: '8pt'}}
                               aria-label="docker (1 item)">docker</a>
                            <a href="https://dev98.de/tag/eav/"
                               className="tag-cloud-link tag-link-20 tag-link-position-15"
                               style={{fontSize: '14.461538461538pt'}} aria-label="EAV (3 items)">EAV</a>
                            <a href="https://dev98.de/tag/go/"
                               className="tag-cloud-link tag-link-12 tag-link-position-16" style={{fontSize: '8pt'}}
                               aria-label="go (1 item)">go</a>
                            <a href="https://dev98.de/tag/golang/"
                               className="tag-cloud-link tag-link-13 tag-link-position-17" style={{fontSize: '8pt'}}
                               aria-label="golang (1 item)">golang</a>
                            <a href="https://dev98.de/tag/http/"
                               className="tag-cloud-link tag-link-42 tag-link-position-18"
                               style={{fontSize: '19.846153846154pt'}} aria-label="HTTP (6 items)">HTTP</a>
                            <a href="https://dev98.de/tag/imagine/"
                               className="tag-cloud-link tag-link-71 tag-link-position-19"
                               style={{fontSize: '11.876923076923pt'}} aria-label="Imagine (2 items)">Imagine</a>
                            <a href="https://dev98.de/tag/increment-id/"
                               className="tag-cloud-link tag-link-27 tag-link-position-20" style={{fontSize: '8pt'}}
                               aria-label="increment-id (1 item)">increment-id</a>
                            <a href="https://dev98.de/tag/jenkins/"
                               className="tag-cloud-link tag-link-48 tag-link-position-21"
                               style={{fontSize: '14.461538461538pt'}} aria-label="jenkins (3 items)">jenkins</a>
                            <a href="https://dev98.de/tag/las-vegas/"
                               className="tag-cloud-link tag-link-72 tag-link-position-22"
                               style={{fontSize: '11.876923076923pt'}} aria-label="Las Vegas (2 items)">Las Vegas</a>
                            <a href="https://dev98.de/tag/magento/"
                               className="tag-cloud-link tag-link-17 tag-link-position-23"
                               style={{fontSize: '11.876923076923pt'}} aria-label="Magento (2 items)">Magento</a>
                            <a href="https://dev98.de/tag/magento2/"
                               className="tag-cloud-link tag-link-44 tag-link-position-24" style={{fontSize: '22pt'}}
                               aria-label="magento2 (8 items)">magento2</a>
                            <a href="https://dev98.de/tag/magento-2/"
                               className="tag-cloud-link tag-link-18 tag-link-position-25"
                               style={{fontSize: '11.876923076923pt'}} aria-label="Magento 2 (2 items)">Magento 2</a>
                            <a href="https://dev98.de/tag/multi-factor-authentication/"
                               className="tag-cloud-link tag-link-23 tag-link-position-26" style={{fontSize: '8pt'}}
                               aria-label="multi factor authentication (1 item)">multi factor authentication</a>
                            <a href="https://dev98.de/tag/mysql/"
                               className="tag-cloud-link tag-link-49 tag-link-position-27"
                               style={{fontSize: '14.461538461538pt'}} aria-label="MySQL (3 items)">MySQL</a>
                            <a href="https://dev98.de/tag/opensource/"
                               className="tag-cloud-link tag-link-16 tag-link-position-28"
                               style={{fontSize: '11.876923076923pt'}} aria-label="opensource (2 items)">opensource</a>
                            <a href="https://dev98.de/tag/options/"
                               className="tag-cloud-link tag-link-33 tag-link-position-29" style={{fontSize: '8pt'}}
                               aria-label="options (1 item)">options</a>
                            <a href="https://dev98.de/tag/order/"
                               className="tag-cloud-link tag-link-30 tag-link-position-30" style={{fontSize: '8pt'}}
                               aria-label="order (1 item)">order</a>
                            <a href="https://dev98.de/tag/password/"
                               className="tag-cloud-link tag-link-25 tag-link-position-31" style={{fontSize: '8pt'}}
                               aria-label="Password (1 item)">Password</a>
                            <a href="https://dev98.de/tag/password-manager/"
                               className="tag-cloud-link tag-link-26 tag-link-position-32" style={{fontSize: '8pt'}}
                               aria-label="Password Manager (1 item)">Password Manager</a>
                            <a href="https://dev98.de/tag/performance/"
                               className="tag-cloud-link tag-link-62 tag-link-position-33"
                               style={{fontSize: '11.876923076923pt'}}
                               aria-label="performance (2 items)">performance</a>
                            <a href="https://dev98.de/tag/php/"
                               className="tag-cloud-link tag-link-52 tag-link-position-34"
                               style={{fontSize: '11.876923076923pt'}} aria-label="PHP (2 items)">PHP</a>
                            <a href="https://dev98.de/tag/proxy/"
                               className="tag-cloud-link tag-link-14 tag-link-position-35"
                               style={{fontSize: '14.461538461538pt'}} aria-label="proxy (3 items)">proxy</a>
                            <a href="https://dev98.de/tag/psr/"
                               className="tag-cloud-link tag-link-53 tag-link-position-36"
                               style={{fontSize: '20.923076923077pt'}} aria-label="PSR (7 items)">PSR</a>
                            <a href="https://dev98.de/tag/rest/"
                               className="tag-cloud-link tag-link-7 tag-link-position-37" style={{fontSize: '8pt'}}
                               aria-label="rest (1 item)">rest</a>
                            <a href="https://dev98.de/tag/sales/"
                               className="tag-cloud-link tag-link-29 tag-link-position-38" style={{fontSize: '8pt'}}
                               aria-label="sales (1 item)">sales</a>
                            <a href="https://dev98.de/tag/security/"
                               className="tag-cloud-link tag-link-22 tag-link-position-39"
                               style={{fontSize: '11.876923076923pt'}} aria-label="security (2 items)">security</a>
                            <a href="https://dev98.de/tag/sequence/"
                               className="tag-cloud-link tag-link-28 tag-link-position-40" style={{fontSize: '8pt'}}
                               aria-label="sequence (1 item)">sequence</a>
                            <a href="https://dev98.de/tag/setup-attributes/"
                               className="tag-cloud-link tag-link-19 tag-link-position-41"
                               style={{fontSize: '11.876923076923pt'}} aria-label="Setup Attributes (2 items)">Setup
                                Attributes</a>
                            <a href="https://dev98.de/tag/soap/"
                               className="tag-cloud-link tag-link-6 tag-link-position-42" style={{fontSize: '8pt'}}
                               aria-label="soap (1 item)">soap</a>
                            <a href="https://dev98.de/tag/upload/"
                               className="tag-cloud-link tag-link-40 tag-link-position-43"
                               style={{fontSize: '11.876923076923pt'}} aria-label="upload (2 items)">upload</a>
                            <a href="https://dev98.de/tag/webapi/"
                               className="tag-cloud-link tag-link-5 tag-link-position-44"
                               style={{fontSize: '16.615384615385pt'}} aria-label="webapi (4 items)">webapi</a>
                            <a href="https://dev98.de/tag/yubikey/"
                               className="tag-cloud-link tag-link-24 tag-link-position-45" style={{fontSize: '8pt'}}
                               aria-label="Yubikey (1 item)">Yubikey</a></div>

                    </aside>
                    <aside className={'asideContSocial'}>
                        <h4 className="widgetTitle">Social</h4>
                        <ul>
                            <li>
                                <a href="https://www.facebook.com/netz98-GmbH-283107721660/"
                                   target="_blank" rel="noopener noreferrer" className="fa fa-facebook-square"/>

                            </li>
                            <li><a href="https://twitter.com/netz98/" className="fa fa-twitter"
                                   target="_blank" rel="noopener noreferrer"/></li>
                            <li><a href="https://github.com/netz98/" className={'fa fa-github'}
                                   target="_blank" rel="noopener noreferrer"/></li>
                        </ul>
                    </aside>
                    <aside className={'asideContArchive'}>
                        <h4 className="widget-title">Archives</h4>
                        <ul>
                            <li><a href="https://dev98.de/2019/06/">June 2019</a></li>
                            <li><a href="https://dev98.de/2019/04/">April 2019</a></li>
                            <li><a href="https://dev98.de/2018/07/">July 2018</a></li>
                            <li><a href="https://dev98.de/2018/01/">January 2018</a></li>
                            <li><a href="https://dev98.de/2017/12/">December 2017</a></li>
                            <li><a href="https://dev98.de/2017/11/">November 2017</a></li>
                            <li><a href="https://dev98.de/2017/10/">October 2017</a></li>
                            <li><a href="https://dev98.de/2017/09/">September 2017</a></li>
                            <li><a href="https://dev98.de/2017/07/">July 2017</a></li>
                            <li><a href="https://dev98.de/2017/05/">May 2017</a></li>
                            <li><a href="https://dev98.de/2017/04/">April 2017</a></li>
                            <li><a href="https://dev98.de/2017/03/">March 2017</a></li>
                            <li><a href="https://dev98.de/2017/02/">February 2017</a></li>
                            <li><a href="https://dev98.de/2017/01/">January 2017</a></li>
                            <li><a href="https://dev98.de/2016/12/">December 2016</a></li>
                            <li><a href="https://dev98.de/2016/11/">November 2016</a></li>
                            <li style={{borderBottom: 'none'}}><a href="https://dev98.de/2016/08/">August 2016</a></li>
                        </ul>
                    </aside>
                    <aside className={'asideContEvents'}>
                        <h4 className="widget-title">Events</h4>
                        <ul id="" className="eo-events eo-events-widget">
                            <li className="eo-no-events"> No Events</li>
                        </ul>
                    </aside>
                </div>
            </div>
        );
    }
}

export default NewsFeed;
