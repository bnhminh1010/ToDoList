function updateProfile() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;

    if (name === "" || email === "" || phone === "") {
        alert("Please fill all information");
        return;
    }

    document.getElementById("msg").innerText = "Profile updated successfully!";
}
