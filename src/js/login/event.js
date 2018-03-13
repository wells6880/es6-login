import { getId  as $ } from '../common/utils';
import {fetchPost} from '../common/fetch'
import {check} from "../common/form-check";

export default (opts = {}) => {
    const loginFormAccount = $('login-form-account');
    const loginFormPassword = $('login-form-password');
    const loginFormRemember = $('login-form-remember');
    const clearAccount = $('clear-account');
    const clearPassword = $('clear-password');
    const loginBtn = $('login-btn');
    const loginError = $('login-error');

    //清除账号
    clearAccount.onclick = () => {
        loginFormAccount.value = '';
        clearAccount.style.display = 'none';
    };
    //清除密码
    clearPassword.onclick = () => {
        loginFormPassword.value = '';
        clearPassword.style.display = 'none';
    };
    loginBtn.onclick = async () => {
        const form = $('login-form');
        check(form);
        let data = await fetchPost('/login', {
            account: loginFormAccount.value,
            password: loginFormPassword.value,
            remember: loginFormRemember.value
        });
        console.log(data);
    }
}