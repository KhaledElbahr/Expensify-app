"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

// Stateless Functional Component
var IndecisionApp = /*#__PURE__*/function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);

  var _super = _createSuper(IndecisionApp);

  function IndecisionApp(props) {
    var _this;

    _classCallCheck(this, IndecisionApp);

    _this = _super.call(this, props);
    _this.handleRemoveAll = _this.handleRemoveAll.bind(_assertThisInitialized(_this));
    _this.handlePickOption = _this.handlePickOption.bind(_assertThisInitialized(_this));
    _this.handleAddOption = _this.handleAddOption.bind(_assertThisInitialized(_this));
    _this.handleDeleteOption = _this.handleDeleteOption.bind(_assertThisInitialized(_this));
    _this.state = {
      options: []
    };
    return _this;
  }

  _createClass(IndecisionApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      try {
        var json = localStorage.getItem('options');
        var options = JSON.parse(json);

        if (options) {
          this.setState(function () {
            return {
              options: options
            };
          });
        }
      } catch (err) {
        console.log(err);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.options.length !== this.state.options.length) {
        var json = JSON.stringify(this.state.options);
        localStorage.setItem('options', json);
      }
    }
  }, {
    key: "handleRemoveAll",
    value: function handleRemoveAll() {
      this.setState(function () {
        return {
          options: []
        };
      });
    }
  }, {
    key: "handleDeleteOption",
    value: function handleDeleteOption(optionToDelete) {
      this.setState(function (prevState) {
        return {
          options: prevState.options.filter(function (option) {
            return optionToDelete !== option;
          })
        };
      });
    }
  }, {
    key: "handlePickOption",
    value: function handlePickOption() {
      var randomNum = Math.floor(Math.random() * this.state.options.length);
      var option = this.state.options[randomNum];
      alert(option);
    }
  }, {
    key: "handleAddOption",
    value: function handleAddOption(option) {
      if (!option) {
        return 'Enter Vaild value to add option';
      } else if (this.state.options.indexOf(option) > -1) {
        return 'This option already exists';
      } else {
        this.setState(function (prevState) {
          return {
            options: prevState.options.concat([option])
          };
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement(Action, {
        hasOptions: this.state.options.length > 0,
        handlePickOption: this.handlePickOption
      }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(Options, {
        options: this.state.options,
        handleDeleteOption: this.handleDeleteOption,
        handleRemoveAll: this.handleRemoveAll
      }), /*#__PURE__*/React.createElement(AddOption, {
        handleAddOption: this.handleAddOption
      }));
    }
  }]);

  return IndecisionApp;
}(React.Component);

var Header = function Header(props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Indecision"), /*#__PURE__*/React.createElement("h2", null, "Put your life in the hands of a computer"), /*#__PURE__*/React.createElement("p", null, props.title), props.subTitle && /*#__PURE__*/React.createElement("p", null, props.subTitle));
};

Header.defaultProps = {
  title: 'Default Title',
  subTitle: 'Sub Titile'
};

var Action = function Action(props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    onClick: props.handlePickOption,
    disabled: !props.hasOptions
  }, "What should I do?"));
};

var Options = function Options(props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    onClick: props.handleRemoveAll
  }, "Remove All"), props.options.length === 0 && /*#__PURE__*/React.createElement("p", null, "Please add an option to get started!"), /*#__PURE__*/React.createElement("ul", null, props.options.map(function (option, i) {
    return /*#__PURE__*/React.createElement(Option, {
      key: i,
      option: option,
      handleDeleteOption: props.handleDeleteOption
    });
  })));
};

var Option = function Option(props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("li", null, props.option), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick(e) {
      return props.handleDeleteOption(props.option);
    }
  }, "X"));
};

var AddOption = function AddOption(props) {
  var handleAddOption = function handleAddOption(e) {
    e.preventDefault();
    var option = e.target.elements.option.value.trim().toUpperCase();
    var error = props.handleAddOption(option);
    error ? alert(error) : e.target.reset();
  };

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("form", {
    onSubmit: handleAddOption
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "option"
  }), /*#__PURE__*/React.createElement("button", null, "Add Option")));
};

var appRoot = document.getElementById('root');
var root = ReactDOM.createRoot(appRoot);
root.render( /*#__PURE__*/React.createElement(IndecisionApp, null));
