function maskPassword(pass) {
    let str = ""
    for(let index = 0; index<pass.length; index++) {
        str += "*"
    }
    return str
}

function copyText(txt) {
    navigator.clipboard.writeText(txt)
    .then(() => {
        // alert("Copied the text: " + txt)
        document.getElementById("alert").style.display= "inline"
        setTimeout(() => {
        document.getElementById("alert").style.display= "none"
        }, 2000)
    })
    .catch(() => {
        alert("Failed")
    })
}

const deletePassword = (website) => {
    let data = localStorage.getItem("passwords");
    let arr = JSON.parse(data);
    arrUpdated = arr.filter((e) => {
        return e.website != website
    })
    localStorage.setItem("passwords", JSON.stringify(arrUpdated))
    alert(`Sucessfully deleted ${website}'s password`)
    showPasswords()
}

const showPasswords = () => {
//Logic to fill the table
let tb = document.querySelector("table");
let data = localStorage.getItem("passwords");

if(data == null || JSON.parse(data).length == 0 ) {
    tb.innerHTML = "No data to show"
} else {
    tb.innerHTML = `<tr>
    <th>Website</th>
    <th>Username</th>
    <th>Password</th>
    <th>Action</th>
</tr>`
    let arr = JSON.parse(data);
    let str = "";
    for(let index=0; index<arr.length; index++) {
        const element = arr[index];
    
str += `<tr>
<td>${element.website}  <img src="./copy.svg" alt="copy button" width="15" height="15" onclick="copyText('${element.website}')"> </td>
<td>${element.username} <img src="./copy.svg" alt="copy button" width="15" height="15" onclick="copyText('${element.username}')"> </td>
<td>${maskPassword(element.password)} <img src="./copy.svg" alt="copy button" width="15" height="15" onclick="copyText('${element.password}')"> </td>
<td><button class="btnsm" onclick="deletePassword('${element.website}')">Delete</button></td>
</tr>`
}
    tb.innerHTML = tb.innerHTML + str ;
}
website.value = ""
username.value = ""
password.value = ""
}
console.log("Working");
showPasswords();
document.querySelector("button").addEventListener("click", (e) => {
    e.preventDefault()
    console.log("Clicked...")
    console.log(username.value, password.value)
    let passwords = localStorage.getItem("passwords")
    console.log(passwords)
    if(passwords == null) {
        let json = [];
        json.push({website: website.value, username: username.value, password: password.value})
        alert("password saved successfully")
        localStorage.setItem("passwords", JSON.stringify(json))
    } else {
        let json = JSON.parse(localStorage.getItem("passwords"))
        json.push({website: website.value, username: username.value, password: password.value})
        alert("password saved successfully")
        localStorage.setItem("passwords", JSON.stringify(json))
    }
    showPasswords();
})
