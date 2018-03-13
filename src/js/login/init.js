import '../common/polyfill';
import render from './render';
import bindEvent from './event';

const login = (opts = {}) => {
    const defaultOpts = {
        loginBtnText: '登录'
    };
    const login = Object.assign(defaultOpts, opts);
    render(opts);
    bindEvent(opts);
};
export {
    login
}