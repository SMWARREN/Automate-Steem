import React from 'react';
import AppBar from '../components/AppBar';
import Content from '../components/AppMainContainer';
import Hero from '../components/Hero';


export default class extends React.Component {
  static async getInitialProps({ req }) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
    return { userAgent };
  }
  render() {
    return (<div>
      <style global jsx>{`
        @import url('https://fonts.googleapis.com/css?family=Montserrat');
        body {
          background-color: #f2f2f2;
        }
      * {
        font-family: 'Montserrat', sans-serif;
        } `}
      </style>
      <AppBar />
      <Hero />
      <Content />
    </div>
    );
  }
}
