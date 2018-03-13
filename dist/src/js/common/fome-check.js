'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.check = undefined;

var _from = require('babel-runtime/core-js/array/from');

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rules = {
    present: function present(v) {
        if (!v) {
            return {
                type: 'present',
                message: '必填'
            };
        }
    }
};

var check = function check(form) {
    var elements = form.elements;
    console.log(elements);
    console.log((0, _from2.default)(elements));
    (0, _from2.default)(elements).filter(function (element) {
        return element.getAttribute('valid');
    }).map(function (item) {
        console.log(item, 'map');
        var valids = item.getAttribute('valid').split(',');
        valids.forEach(function (vaild) {
            if (rules[vaild]) {
                var result = rules[vaild](item.value);
            }
        });
    });
};

exports.check = check;
//# sourceMappingURL=form-check.js.map