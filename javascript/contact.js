function copyEmail() {
    navigator.clipboard.writeText(email);
    var copyEmailSection = document.getElementById("copy-email");
    copyEmailSection.innerText = "Email copied!";
    setTimeout(() => {
        copyEmailSection.innerText = "Copy Email";
    }, 3000);
}