import React from 'react';
import AppBarItem from './AppBarItem';


export default class extends React.Component {
  render() {
    return (<div>
      <style jsx>{`
            .appBar-container {
              box-shadow: 0 2px 5px rgba(0,0,0,.26) !important;
              z-index: 2 !important;
              position: absolute;
              top: 0;
              left: 0;
              right:0;
               background-color: #fff !important;
               padding: 10px !important;
              box-sizing: border-box !important;
              display:block !important;
        }`}
      </style>
      <div className="appBar-container">
        <AppBarItem />
      </div>
    </div>
    );
  }
}
