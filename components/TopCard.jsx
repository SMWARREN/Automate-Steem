import React from 'react';
import AppBarItem from './AppBarItem';


export default class extends React.Component {
  render() {
    return (<div>
      <style jsx>{`
        .topCard-container {
          border: solid #ccc 1px;
          border-radius: 10px;
          background-color: #fff;

        }
        .topCard-header {
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
          background-color: blue;
          color: white;
          padding: 10px;
        }
        .topCard-footer{

        }

        .topCard-content {
          padding: 10px;

        }`}
      </style>
      <div className="topCard-container">
        <div className="topCard-header"> Content Promotion Services</div>
        <div className="topCard-content">
          <div className="topCard-header"> @MinnowBooster</div>
          <span className="topCard-content">content  content content   content content</span>
        </div>
        <div className="topCard-footer"><hr /></div>
      </div>
    </div>
    );
  }
}
