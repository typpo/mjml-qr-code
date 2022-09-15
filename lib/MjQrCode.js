"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mjmlValidator = require("mjml-validator");

var _mjmlCore = require("mjml-core");

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

(0, _mjmlValidator.registerDependencies)({
  'mj-image-text': [],
  'mj-body': ['mj-qr-code'],
  'mj-section': ['mj-qr-code'],
  'mj-wrapper': ['mj-qr-code'],
  'mj-column': ['mj-qr-code']
});

var MjQrCode = /*#__PURE__*/function (_BodyComponent) {
  _inherits(MjQrCode, _BodyComponent);

  var _super = _createSuper(MjQrCode);

  function MjQrCode() {
    _classCallCheck(this, MjQrCode);

    return _super.apply(this, arguments);
  }

  _createClass(MjQrCode, [{
    key: "getUrl",
    value: function getUrl() {
      var val = this.getAttribute('value');

      if (!val) {
        throw new Error('You must specify a "value" attribute for mjml-qr-code');
      }

      var content = encodeURIComponent(val);
      var width = this.getAttribute('width');
      var foregroundColor = encodeURIComponent(this.getAttribute('color').replace('#', ''));
      var backgroundColor = encodeURIComponent(this.getAttribute('background-color').replace('#', ''));
      var ecLevel = this.getAttribute('error-correction-level');
      var margin = this.getAttribute('qr-margin');
      return "".concat(this.getAttribute('protocol'), "://").concat(this.getAttribute('host'), "/qr?text=").concat(content, "&size=").concat(width, "&dark=").concat(foregroundColor, "&light=").concat(backgroundColor, "&ecLevel=").concat(ecLevel, "&margin=").concat(margin, "&ref=mjml");
    }
  }, {
    key: "renderImage",
    value: function renderImage() {
      var _this = this;

      var attributes = {};
      Object.keys(MjQrCode.allowedAttributes).forEach(function (key) {
        attributes[key] = _this.getAttribute(key);
      });
      attributes.src = this.getUrl();
      return "\n      <mj-image\n        ".concat(this.htmlAttributes(attributes), "\n      >\n      </mj-image>\n    ");
    }
  }, {
    key: "render",
    value: function render() {
      return this.renderMJML(this.renderImage());
    }
  }]);

  return MjQrCode;
}(_mjmlCore.BodyComponent);

exports["default"] = MjQrCode;

_defineProperty(MjQrCode, "endingTag", true);

_defineProperty(MjQrCode, "allowedAttributes", {
  // QR-related attributes
  value: 'string',
  color: 'color',
  'background-color': 'color',
  'qr-margin': 'integer',
  'error-correction-level': 'string',
  width: 'unit(px)',
  host: 'string',
  protocol: 'string',
  // Image attributes
  alt: 'string',
  href: 'string',
  name: 'string',
  src: 'string',
  srcset: 'string',
  title: 'string',
  rel: 'string',
  align: 'enum(left,center,right)',
  border: 'string',
  'border-bottom': 'string',
  'border-left': 'string',
  'border-right': 'string',
  'border-top': 'string',
  'border-radius': 'unit(px,%){1,4}',
  'container-background-color': 'color',
  'fluid-on-mobile': 'boolean',
  padding: 'unit(px,%){1,4}',
  'padding-bottom': 'unit(px,%)',
  'padding-left': 'unit(px,%)',
  'padding-right': 'unit(px,%)',
  'padding-top': 'unit(px,%)',
  target: 'string',
  height: 'unit(px,auto)',
  'max-height': 'unit(px,%)',
  'font-size': 'unit(px)',
  usemap: 'string'
});

_defineProperty(MjQrCode, "defaultAttributes", {
  // QR-related attributes
  value: null,
  color: '#000000',
  'background-color': '#ffffff',
  'qr-margin': 4,
  'error-correction-level': 'M',
  width: 200,
  host: 'quickchart.io',
  protocol: 'https'
});