import React from 'react';


export default class extends React.Component {
  render() {
    return (<div>
      <style jsx>{`
        .hero-container{
          margin-left: -20px;
          margin-right: -20px;
          background-image: url("/static/hero.jpg");
          height: 400px;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          position: relative;
        }
      `}
      </style>
      <div className="hero-container" />
    </div>
    );
  }
}
