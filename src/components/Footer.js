import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <div className={'footerContainer'}>
                <div className="siteInfo">
                    © 2019 <span className="sep"> | </span>
                    Proudly Powered by React
                    <span className="sep"> | </span>
                    Theme: Copied from real page)))</div>
            </div>
        );
    }
}

export default Footer;