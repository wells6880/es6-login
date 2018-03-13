'use strict';

var _fetchMock = require('fetch-mock');

var _fetchMock2 = _interopRequireDefault(_fetchMock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_fetchMock2.default.mock('/login', function (url, opts) {
    var params = opts.params;
    if (params.account === '15812345678') {
        if (params.password === '123456') {
            return { code: 200, message: 'success' };
        } else {
            return { code: 401, message: '密码错误' };
        }
    } else {
        return { code: 400, message: '用户名错误' };
    }
});
//# sourceMappingURL=mock.js.map