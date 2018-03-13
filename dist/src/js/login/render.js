'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _utils = require('../common/utils');

var tpl = function tpl(opts) {
    var autotempleteTpl = '\n    <div id="no-autotemplete">\n        <input type="text">\n        <input type="password">\n    </div>';

    var autotempleteValue = opts.autocomplete ? 'no' : 'off';
    var autotempleteAdapter = opts.autocomplete ? '' : autotempleteTpl;
    var showRemember = opts.showRemember ? 'black' : 'none';

    var tpl = '\n        <div class="login-wrapper">\n            <span id="login-error" class="login-error"></span>\n            <form id="login-form" onsubmit="return false">\n                ' + autotempleteAdapter + '\n                <ul>\n                    <li class="login-account-wrapper">\n                        <label for="login-form-account">' + opts.accountText + '</label>\n                        <input type="text" id="login-form-account" placeholder="' + opts.accountPlaceholder + '" autocomplete="' + autotempleteValue + '" valid="present,mobile">\n                        <span id="clear-account" class="del">&#10006</span>\n                    </li>\n                    <li class="login-password-wrapper">\n                        <label for="login-form-password">' + opts.passwordText + '</label>\n                        <input type="password" id="login-form-password"  placeholder="' + opts.passwordPlaceholder + '" autocomplete="' + autotempleteValue + '" valid="present">\n                        <span id="clear-password" class="del">&#10006</span>\n                    </li>\n                    <li class="login-remember-wrapper" style="display: ' + showRemember + '">\n                        <input type="checkbox" id="login-form-remember">\n                        <label for="login-form-remember">\u8BB0\u4F4F\u5BC6\u7801</label>\n                    </li>\n                </ul>\n                \n                <input type="submit" id="login-btn" value="' + opts.loginBtnText + '">\n                \n                <div class="login-extra-wrapper">\n                    <a href="forget.html">\u5FD8\u8BB0\u5BC6\u7801</a>\n                    <a href="signup.html">\u514D\u8D39\u6CE8\u518C</a>\n                </div>\n            </form>\n        </div>\n';
    return tpl;
};

exports.default = function () {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    opts.container.innerHTML = tpl(opts);
    var noAutocomplete = (0, _utils.getId)('no-autotemplete');
    if (noAutocomplete) {
        noAutocomplete.style.height = 0;
        noAutocomplete.style.opacity = 0;
    }
};
//# sourceMappingURL=render.js.map