function Validate() {
  var password = document.getElementById("password");
  var confirmPassword = document.getElementById("cpassword");
  let fname = document.getElementById("fname").value
  let lname = document.getElementById("lname").value
  let dob = document.getElementById("dob").value
  let age = document.getElementById("age").value
  
  if (password.value.trim() == "") {
    password.style.border = "3px solid red";
    return false
  } else if (confirmPassword.value.trim() == "") {
    cpassword.style.border = "3px solid red";
    return false
  } else if (password.value != confirmPassword.value) {
    alert("Passwords do not match.");
    return false
  } else {
    localStorage.setItem("fname", fname);
    localStorage.setItem("lname", lname);
    localStorage.setItem("dob", dob);
    localStorage.setItem("age", age);
    return true;
  }
}

  
