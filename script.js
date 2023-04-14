// Tambahkan kode JavaScript kalian di file ini
function handleGetFormData(){
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let city = document.getElementById("city").value
    let zipCode = document.getElementById("zip-code").value
    let status = document.getElementById("status").checked
    return {name, email, city, zipCode, status}
}

function isNumber(string){
    if(isNaN(string)) {
        return false;
    }
    else {
        return true;
    }
}

function checkboxIsChecked() {
    let status = document.getElementById("status").checked

    if(status==true) {
        return true;
    }
    else {
        return false;
    }
}

function checkboxIsChecked(){
    if( handleGetFormData().status){
        return true
    }else{
        return false
    }
}

function validateFormData (obj) {
    if( obj.name != ""&& obj.city != ""&& obj.email != "" && obj.zipCode != ""&& obj.status != ""&& isNumber(obj.zipCode) && checkboxIsChecked()){
        return true
    }else{
        return false
    }
}

function submit (){
  if(validateFormData(handleGetFormData())){
     warning.innerText = ""
  }else{
      warning.innerText = "Periksa form anda sekali lagi"
  }
    
}

let form = document.getElementById("submit-form");
let warning = document.getElementById("warning");
form.addEventListener("click", (event) => {
  event.preventDefault();
  submit()
});