console.log("Working")
document.querySelector("button").addEventListener("click", (e) => {
    e.preventDefault()
    console.log("Clicked...")
    console.log(username.value, password.value)
    let passwords = localStorage.getItem("passwords")
    console.log(passwords)
    if(passwords == null) {
        let json = [];
        json.push({username: username.value, password: password.value})
        alert("password saved successfully")
        localStorage.setItem("passwords", JSON.stringify(json))
    } else {
        let json = JSON.parse(localStorage.getItem("passwords"))
        json.push({username: username.value, password: password.value})
        alert("password saved successfully")
        localStorage.setItem("passwords", JSON.stringify(json))
    }
})
