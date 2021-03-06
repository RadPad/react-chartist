'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var ChartistGraph = (function (_Component) {
  _inherits(ChartistGraph, _Component);

  function ChartistGraph() {
    _classCallCheck(this, ChartistGraph);

    _get(Object.getPrototypeOf(ChartistGraph.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(ChartistGraph, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      this.updateChart(newProps);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.chartist) {
        try {
          this.chartist.detach();
        } catch (err) {
          throw new Error('Internal chartist error', err);
        }
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.updateChart(this.props);
    }
  }, {
    key: 'updateChart',
    value: function updateChart(config) {
      var Chartist = require('chartist');

      var type = config.type;
      var data = config.data;

      var options = config.options || {};
      var responsiveOptions = config.responsiveOptions || [];
      var event = undefined;

      if (this.chartist) {
        this.chartist.update(data, options, responsiveOptions);
      } else {
        this.chartist = new Chartist[type](this.refs.chart, data, options, responsiveOptions);

        if (config.listener) {
          for (event in config.listener) {
            if (config.listener.hasOwnProperty(event)) {
              this.chartist.on(event, config.listener[event]);
            }
          }
        }
      }

      return this.chartist;
    }
  }, {
    key: 'render',
    value: function render() {
      var className = this.props.className ? ' ' + this.props.className : '';
      var style = this.props.style ? this.props.style : {};
      return _react2['default'].createElement('div', { className: 'ct-chart' + className, ref: 'chart', style: style });
    }
  }]);

  return ChartistGraph;
})(_react.Component);

ChartistGraph.propTypes = {
  type: _react2['default'].PropTypes.string.isRequired,
  data: _react2['default'].PropTypes.object.isRequired,
  className: _react2['default'].PropTypes.string,
  options: _react2['default'].PropTypes.object,
  responsiveOptions: _react2['default'].PropTypes.array,
  style: _react2['default'].PropTypes.object
};

exports['default'] = ChartistGraph;
module.exports = exports['default'];

