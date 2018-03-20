import React from 'react';
import TopCard from './TopCard';
import Container from './Container';
import Table from './Table';


export default class extends React.Component {
  render() {
    return (<div>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css?family=Montserrat');

        .app-main-container-items {
          z-index: 2 !important;
          margin-top: 50px;
        }
       .app-main-container{
          display: grid !important;
          grid-template-columns: 1fr 10fr 1fr;
          background-color: #f2f2f2;
        }
      .items {
        font-family: 'Montserrat', sans-serif;
        } `}
      </style>
      <div className="app-main-container-items">
        <div className="app-main-container">
          <div className="items" />
          <div className="items">
            {this.props.children}
          </div>
          <div className="items" />
        </div>
      </div>
    </div>
    );
  }
}
