import React from 'react';
import Link from 'next/link';


export default class extends React.Component {
  render() {
    return (<div>
      <style jsx>{`
        .appBar-items {
          z-index: 2 !important;
        }
       .appBar-inner-container{
          display: grid !important;
          grid-template-columns: 1fr 10fr 1fr;
        }
        .menu-login {
          margin-left: auto;
        }
        a {
          text-decoration: none !important;
        }
        .menu{
           display: grid !important;
           grid-template-columns: auto auto auto auto auto auto;
         }`}
      </style>
      <div className="appBar-items">
        <div className="appBar-inner-container">
          <div className="items" />
          <div className="menu">
            <div>
              <Link href="/index">
                <a>Home</a>
              </Link>
            </div>
            <div>
              <Link href="/blog">
                <a>Blog</a>
              </Link>
            </div>
            <div>Automate</div>
            <div />
            <div />
            <div className="menu-login">Login</div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}
