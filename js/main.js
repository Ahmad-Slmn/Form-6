var form1 = document.querySelector(".first");
var form2 = document.querySelector(".last");
var btn = document.querySelector(".box > div button");

function sign() {

    form1.style.left = 0;

    form2.style.left = "100%";

    btn.style.left = 0;

}

function log() {

    form2.style.left = 0;

    form1.style.left = "100%";

    btn.style.left = "50%";

}
var icun1 = document.querySelector(".first i");

var password1 = document.querySelector(".first input[type=password]")

icun1.onclick = function () {

    if (password1.type === "password") {

        password1.type = "text";

        this.className = "fa-regular fa-eye";

        this.style.color = "#039884";

    } else {
        password1.type = "password";
        this.className = "fa-regular fa-eye-slash";
        this.style.color = "#fff"
    }
}

var icun2 = document.querySelector(".last i");

var password2 = document.querySelector(".last input[type=password]")

icun2.onclick = function () {

    if (password2.type === "password") {

        password2.type = "text";

        this.className = "fa-regular fa-eye";

        this.style.color = "#039884";

    } else {
        password2.type = "password";
        this.className = "fa-regular fa-eye-slash";
        this.style.color = "#fff"
    }
}
