function runPass() {
    var textBox = document.getElementById("pass1").value,
        reject = [];
    if (textBox.length < 8) {
        reject.push("Your password must be at least 8 characters.");
    }
    if (textBox.length > 20) {
        reject.push("Your password must be between 8-20 characters.")
    }
    if (textBox.search(/[a-z]/i) < 0) {
        reject.push("Your password must contain at least one letter.");
    }
    if (textBox.search(/[A-Z]/) < 0) {
        reject.push("Your password must contain at least one uppercase letter.")
    }
    if (textBox.search(/[0-9]/) < 0) {
        reject.push("Your password must contain at least one digit.");
    }
    if (textBox.search(/\W|_/g) < 0) {
        reject.push("Your password must contain at least one special character.")
    }
    if (textBox.search(/^\S*$/) < 0) {
        reject.push("Your password shouldn't contain any spaces.");
    }
    if (reject.length > 0) {
        alert(reject.join("\n"));
        return false;
    }
    return true;
}
function visible() {
    var box = document.getElementById("input").checked;
    if (box) {
        document.getElementById("pass1").type = "text";
    } else {
        document.getElementById("pass1").type = "password";
    }
}