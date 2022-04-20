$(document).ready(function () {
    var i= 1;
    $("#btnLogIn").click(function () {
        $("#logInModal").modal();
    })
    function kiemTraUserNameRegister() {
        var re = /^[a-z0-9_-]{3,16}$/;
        if ($("#txtUserNameRegister").val()=="") {
            $("#tbUserNameRegister").html("* bắt buộc nhập");
            return false
        }
        if (!re.test($("#txtUserNameRegister").val())) {
            $("#tbUserNameRegister").html("* Tên đăng nhập không hợp lệ");
            return false;
        }
        $("#tbUserNameRegister").html("*");
        return true;
    }
    $("#txtUserNameRegister").blur(kiemTraUserNameRegister);
    function kiemTraPassRegister() {
        var re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if ($("#txtPassRegister").val()=="") {
            $("#tbPassRegister").html("* bắt buộc nhập");
            return false
        }
        if (!re.test($("#txtPassRegister").val())) {
            $("#tbPassRegister").html("* Mật khẩu ít nhất 8 kí tự có chữ và số");
            return false;
        }
        $("#tbPassRegister").html("*");
        return true;
    }
    $("#txtPassRegister").blur(kiemTraPassRegister);

    var password = document.getElementById("txtPassRegister")
  , confirm_password = document.getElementById("txtPassConfirm");

    function validatePassword(){
        if(password.value != confirm_password.value) {
            confirm_password.setCustomValidity("Passwords Don't Match");
        } else {
             confirm_password.setCustomValidity('');
        }
    }
    password.onchange = validatePassword;
    confirm_password.onkeyup = validatePassword;

    function kiemTraEmailRegister() {
        var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if ($("#txtEmailRegister").val()=="") {
            $("#tbEmailRegister").html("* bắt buộc nhập");
            return false
        }
        if (!re.test($("#txtEmailRegister").val())) {
            $("#tbEmailRegister").html("* Nhập Email theo mẫu : xxxxxx@gmail.com");
            return false;
        }
        $("#tbEmailRegister").html("*");
        return true;
    }
    $("#txtEmailRegister").blur(kiemTraEmailRegister);
    function kiemTraPhoneRegister() {
        var re =/^(0){1}[0-9]{9}$/;
        if ($("#txtPhoneRegister").val()=="") {
            $("#tbPhoneRegister").html("* bắt buộc nhập");
            return false
        }
        if (!re.test($("#txtPhoneRegister").val())) {
            $("#tbPhoneRegister").html("* Nhập số phone theo mẫu : 0XXXXXXXXX");
            return false;
        }
        $("#txtPhoneRegister").html("*");
        return true;
    }
});