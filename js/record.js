let btn = document.querySelector('#btn');
let mask = document.querySelector('#mask');
let login = document.querySelector('.login');
let title = document.querySelector('.title');
let closeBtn = document.querySelector('#closeBtn');
let loginBtn = document.querySelector('#loginBtn');
let checkbox = document.querySelector('.checkbox');
let showName = document.querySelector('#showName');

btn.onclick = event => {
    let e = event || window.event;
    e.returnValue = false;
    mask.style.display = 'block';
    setStyle();
}
window.onresize = setStyle;

closeBtn.onclick = () => mask.style.display = 'none';

document.onkeyup = event => {
    let e = event || window.event;
    if (e.keyCode === 27) mask.style.display = 'none';
}

title.onmousedown = (event) => {
    let e1 = event || window.event;
    let x = e1.offsetX;
    let y = e1.offsetY;
    document.onmousemove = (e) => {
        login.style.left = e.clientX - x + 'px';
        login.style.top = e.clientY - y + 'px';
    }
}

document.onmouseup = () => {
    document.onmousemove = null;
}

function setStyle() {
    login.style.left = (innerWidth - login.offsetWidth) / 2 + 'px';
    login.style.top = (innerHeight - login.offsetHeight) / 2 + 'px';
}

// 验证匹配
let userName = document.querySelector('#userName');
let password = document.querySelector('#password');
let testObj = {};

userName.onchange = function () {
    let userNameTest = /^[a-z][0-9A-Za-z]{5,11}$/i.test(userName.value);
    if (!userNameTest) {
        this.nextElementSibling.innerText = '用户名不正确';
    } else {
        testObj.userNameTest = userNameTest;
        this.nextElementSibling.innerText = '';
    }
    chnage(testObj);
}
password.onchange = function () {
    let passwordTest = /^[^\s]{6,18}$/.test(password.value);
    if (!passwordTest) {
        this.nextElementSibling.innerText = '密码验证不通过';
    } else {
        testObj.passwordTest = passwordTest;
        this.nextElementSibling.innerText = '';
    }
    chnage(testObj);
}
checkbox.onclick = function () {
    testObj.checkbox = this.checked;
    chnage(testObj);
}

loginBtn.onclick = function () {
    showName.innerText = userName.value;
    mask.style.display = 'none';
}

function chnage(testObj) {
    if (testObj.checkbox && testObj.userNameTest && testObj.passwordTest) {
        loginBtn.disabled = false;
    } else {
        loginBtn.disabled = true;
    }
}
// 登录，注册页面的隐藏，显现
var TurnToLogin = () =>{
    document.getElementById('login').style.display = 'block';
    document.getElementById('login').style.display = 'none';
}
var TurnToRegister = () => {
    document.getElementById('register').style.display = 'block';
    document.getElementById('register').style.display = 'none';
}