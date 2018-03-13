'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _utils = require('../common/utils');

var _fetch = require('../common/fetch');

var _formCheck = require('../common/form-check');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new _promise2.default(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return _promise2.default.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = function () {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var loginFormAccount = (0, _utils.getId)('login-form-account');
    var loginFormPassword = (0, _utils.getId)('login-form-password');
    var loginFormRemember = (0, _utils.getId)('login-form-remember');
    var clearAccount = (0, _utils.getId)('clear-account');
    var clearPassword = (0, _utils.getId)('clear-password');
    var loginBtn = (0, _utils.getId)('login-btn');
    var loginError = (0, _utils.getId)('login-error');

    //清除账号
    clearAccount.onclick = function () {
        loginFormAccount.value = '';
        clearAccount.style.display = 'none';
    };
    //清除密码
    clearPassword.onclick = function () {
        loginFormPassword.value = '';
        clearPassword.style.display = 'none';
    };
    loginBtn.onclick = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var form, data;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        form = (0, _utils.getId)('login-form');

                        (0, _formCheck.check)(form);
                        _context.next = 4;
                        return (0, _fetch.fetchPost)('/login', {
                            account: loginFormAccount.value,
                            password: loginFormPassword.value,
                            remember: loginFormRemember.value
                        });

                    case 4:
                        data = _context.sent;

                        console.log(data);

                    case 6:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));
};
//# sourceMappingURL=event.js.map