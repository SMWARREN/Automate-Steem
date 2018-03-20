import React from 'react';


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
          background-color: #058cec;
          color: white;
          padding: 10px;
          margin-bottom: -18px;
        }`}
      </style>
      <div className="topCard-container">
        <div className="topCard-header">
          {this.props.children}
        </div>
      </div>
    </div>
    );
  }
}
