import React from 'react';


export default class extends React.Component {
  render() {
    return (<div>
      <style jsx>{`
        .container {
          background-color: #fff;
          border: 1px solid #ccc;
          border-radius: 10px;
          margin-top: 10px;
          padding: 10px;
        }`}
      </style>
      <div className="container">
        {this.props.children}
      </div>
    </div>
    );
  }
}
