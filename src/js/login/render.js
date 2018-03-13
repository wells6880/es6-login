import { getId as $ } from "../common/utils";

const tpl = (opts) => {
    const autotempleteTpl = `
    <div id="no-autotemplete">
        <input type="text">
        <input type="password">
    </div>`;

    const autotempleteValue = opts.autocomplete ? 'no' : 'off';
    const autotempleteAdapter = opts.autocomplete ? '' : autotempleteTpl;
    const showRemember = opts.showRemember ? 'black' : 'none';

    const tpl = `
        <div class="login-wrapper">
            <span id="login-error" class="login-error"></span>
            <form id="login-form" onsubmit="return false">
                ${autotempleteAdapter}
                <ul>
                    <li class="login-account-wrapper">
                        <label for="login-form-account">${opts.accountText}</label>
                        <input type="text" id="login-form-account" placeholder="${opts.accountPlaceholder}" autocomplete="${autotempleteValue}" valid="present,mobile">
                        <span id="clear-account" class="del">&#10006</span>
                    </li>
                    <li class="login-password-wrapper">
                        <label for="login-form-password">${opts.passwordText}</label>
                        <input type="password" id="login-form-password"  placeholder="${opts.passwordPlaceholder}" autocomplete="${autotempleteValue}" valid="present">
                        <span id="clear-password" class="del">&#10006</span>
                    </li>
                    <li class="login-remember-wrapper" style="display: ${showRemember}">
                        <input type="checkbox" id="login-form-remember">
                        <label for="login-form-remember">记住密码</label>
                    </li>
                </ul>
                
                <input type="submit" id="login-btn" value="${opts.loginBtnText}">
                
                <div class="login-extra-wrapper">
                    <a href="forget.html">忘记密码</a>
                    <a href="signup.html">免费注册</a>
                </div>
            </form>
        </div>
`;
    return tpl;
};

export default (opts = {}) => {
    opts.container.innerHTML = tpl(opts);
    let noAutocomplete = $('no-autotemplete');
    if(noAutocomplete){
        noAutocomplete.style.height = 0;
        noAutocomplete.style.opacity = 0;
    }
}