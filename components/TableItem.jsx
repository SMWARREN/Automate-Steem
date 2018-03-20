import React from 'react';

export default class extends React.Component {
  render() {
    return (<div>
      <style jsx>{`
       .container {
          display: grid !important;
          grid-template-columns: auto 2fr auto auto auto auto auto auto auto auto;
        }`}
      </style>
      <div className="container">
        <div />
        <div>@buildawhale</div>
        <div>$385.91</div>
        <div>5.00 SBD</div>
        <div>$316.57</div>
        <div>Last Vote</div>
        <div>Next Vote</div>
        <div>Details</div>
        <div>Send Bid</div>
        <div />
        {this.props.children}
      </div>
    </div>
    );
  }
}
