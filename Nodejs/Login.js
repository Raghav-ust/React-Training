function Validate() {
  var username = document.getElementById("username");
  var password = document.getElementById("password");
  var label = document.getElementById("error-label");
  var label1 = document.getElementById("error-label1");

  if (username.value.trim() == "") {
    username.style.border = "3px solid red";
    label.innerHTML = "Username cannot be empty";
    // window.location.reload();
    return false;
  } else if (password.value.trim() == "") {
    password.style.border = "3px solid red";
    label1.innerHTML = "Password cannot be empty";
    return false;
  } else if (
    username.value == localStorage.getItem("username") &&
    password.value == localStorage.getItem("password")
  ) {
    return true;
  } else {
    alert("Please enter correct values");
    return false;
  }
}
