const submit_btn = document.getElementById("submit");
const toggle = document.getElementById("toggle");

toogle.addEventListener("click", () => {
    const password = document.getElementById("password");
    if (password.type === "password") {
        password.type = "text";
    } else {
        password.type = "password";
    }
});

submit_btn.addEventListener("click", () => {
    console.log("login");
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    console.log(username);
    // username=ahmad2017 , password=integrity
    if (username === "ahmad2017" && password === "integrity") {
        alert("Login sukses!");
        window.location.href = "home.html";
    }else{
        alert("Login gagal!");
    }
})