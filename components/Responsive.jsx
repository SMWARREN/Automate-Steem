// --------------------------------------------------------------------------------------------
//  Responsive Table Component
//
//  Based on: https://techblog.livingsocial.com/blog/2015/04/06/responsive-tables-in-pure-css/
// --------------------------------------------------------------------------------------------

var ResponsiveTable = React.createClass({
  displayName: 'ResponsiveTable',

  _head: function _head() {
    var columns = _.map(this.props.columns, function (colName) {
      return React.createElement(
        'th',
        null,
        colName
      );
    });
    return React.createElement(
      'tr',
      null,
      columns
    );
  },

  _rows: function _rows() {
    var _this = this;
    return _.map(_this.props.rows, function (row) {
      var values = _.map(_this.props.columns, function (colName, colKey) {
        return React.createElement(
          'td',
          { 'data-label': colName },
          row[colKey]
        );
      });
      return React.createElement(
        'tr',
        null,
        values
      );
    });
  },

  render: function render() {
    return React.createElement(
      'table',
      { className: 'responsive-table' },
      React.createElement(
        'thead',
        null,
        this._head()
      ),
      React.createElement(
        'tbody',
        null,
        this._rows()
      )
    );
  }
});
