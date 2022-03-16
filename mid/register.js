window.onload = pageLoad;

function pageLoad(){
    var form = document.getElementById("myForm");
    form.onsubmit = validateForm;
}

function validateForm() {

    let pass = document.getElementById("password").value;
    let repass = document.getElementById("repassword").value;
    
    if (pass != repass){
        alert("password not match")
        document.getElementById('errormsg').innerHTML = "Error";
        return false
    }
    alert ("Register Success")
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย

}