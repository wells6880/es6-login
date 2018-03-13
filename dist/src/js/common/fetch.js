'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var fetchGet = function fetchGet(url, params) {
    fetch(url, {
        method: 'GET',
        headers: {},
        credentials: 'include',
        params: params
    }).then(function (res) {
        if (!res.ok) {
            throw Error(res.statusText);
        }
        return res.json();
    });
};

var fetchPost = function fetchPost(url, params) {
    return fetch(url, {
        method: 'POST',
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        credentials: 'include',
        params: params
    }).then(function (res) {
        if (!res.ok) {
            throw Error(res.statusText);
        }
        return res.json();
    });
};

exports.fetchGet = fetchGet;
exports.fetchPost = fetchPost;
//# sourceMappingURL=fetch.js.map