'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.login = undefined;

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

require('../common/polyfill');

var _render = require('./render');

var _render2 = _interopRequireDefault(_render);

var _event = require('./event');

var _event2 = _interopRequireDefault(_event);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var login = function login() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var defaultOpts = {
        loginBtnText: '登录'
    };
    var login = (0, _assign2.default)(defaultOpts, opts);
    (0, _render2.default)(opts);
    (0, _event2.default)(opts);
};
exports.login = login;
//# sourceMappingURL=init.js.map