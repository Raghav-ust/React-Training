function fetchDetails(){
    console.log(localStorage.getItem("fname"))
    document.getElementById("fname").value = localStorage.getItem("fname")
    document.getElementById("lname").value = localStorage.getItem("lname")
    document.getElementById("age").value = localStorage.getItem("age")
    document.getElementById("dob").value = localStorage.getItem("dob")
}

fetchDetails();