import React from 'react';

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
      .items {
        top: 0;
        } `}
      </style>
      <div className="appBar-items">
        <div className="appBar-inner-container">
          <div className="items" />
          <div className="items">Menu Here</div>
          <div className="items" />
        </div>
      </div>
    </div>
    );
  }
}
