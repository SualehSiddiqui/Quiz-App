num = 0;

function store() {
    ++num
    var pass = document.getElementById("sign-password");
    var email = document.getElementById("sign-email");
    var userName = document.getElementById("sign-name");

    localStorage.setItem(`login${num}`, JSON.stringify({ password: pass.value, mail: email.value, name: userName.value }))

    pass.value = "";
    email.value = "";
    userName.value = "";
}

function check() {
    var pass = document.getElementById("login-password");
    var email = document.getElementById("login-email");
    for (var i = 1; i < localStorage.length + 1; i++) {
        var checking = JSON.parse(localStorage.getItem(`login${i}`))
        var checkPassword = checking.password;
        var checkEmail = checking.mail;
        var checkName = checking.name;
        var firstLetter = checkName.slice(0, 1);
        var capital = firstLetter.toUpperCase();
        var newName = capital + checkName.slice(1);
        checkName = newName;

        if (checkPassword == pass.value && checkEmail == email.value) {
            Swal.fire({
                title: `Welcome ${checkName}`,
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            })
            break
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Sorry...',
                text: 'We cannot find your account',
                footer: "<a href='index.html'>Don't have an account?</a>"
            })


        }
    }
    pass.value = "";
    email.value = "";

}