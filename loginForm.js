
let confirmPassword = document.getElementById("confirm_password")

confirmPassword.addEventListener('input', function(){
    passwordMatch()
})


function passwordMatch(){

    let warning = document.getElementById("nomatch")

    let password = document.getElementById("password").value

    let compareValue = confirmPassword.value

    if (compareValue !== password){
        console.log('The passwords do not match')
        warning.style.visibility="visible"
    } else {
        console.log('They match now')
        warning.style.visibility="hidden"
    }
}
