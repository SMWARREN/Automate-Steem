import React from 'react';
import fetch from 'isomorphic-fetch';
import AppBar from '../components/AppBar';
import Hero from '../components/Hero';
import MainContainer from '../components/MainContainer';


export default class extends React.Component {
  static async getInitialProps({ req }) {
    const res = await fetch('http://mildfun.com/blog//wp-json/wp/v2/posts');
    const json = await res.json();
    return { posts: json[0] };
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
        }
        .container{
        text-align:center;
        }`}
      </style>
      <AppBar />
      <Hero />
      <MainContainer>
        <center>Data Loaded from Wordpress: Microservice<p /></center>
        <div className="container" dangerouslySetInnerHTML={{ __html: this.props.posts.content.rendered }} />.
      </MainContainer>
    </div>
    );
  }
}
