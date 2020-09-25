function validate(){

    var nama = document.forms["register"]["Name"].value;
    var email = document.forms["register"]["Email"].value;
    var pass = document.forms["register"]["Password"].value;
    var address = document.forms["register"]["Address"].value;
    var choice = document.forms["register"]["choice"].value;
    var gender = document.forms["register"]["gender"].value;

    if(nama == ""){
       window.alert("You must input your username");
       nama.focus();
       return false;
    }
    if(email == ""){
        window.alert("You must input your email");
        name.focus();
        return false;
     }
     if(pass == ""){
        window.alert("You must input password");
        pass.focus();
        return false;
     }
     if(address == ""){
        window.alert("You must input your address");
        address.focus();
        return false;
     }
     if(choice == "skintype"){
        window.alert("You must choose one of these skin types");
        choice.focus();
        return false;
     }
     if(gender == ""){
        window.alert("You must choose one of these gender");
        gender.focus();
        return false;
     }
     if(!document.getElementById("check").checked){
         window.alert("You must agree with our terms and conditions");
         return false;
     }
     if(pass.length < 8){
        window.alert("Your password must be at least 8 character");
        pass.focus();
        return false;
     }
     if(isNaN(pass)){
        window.alert("You can only input number in your password");
        pass.focus();
        return false;
     }

     else{
         return true;
     }
}