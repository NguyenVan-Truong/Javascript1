let user = document.querySelector("#user");
let email=document.querySelector("#email");
let password=document.querySelector("#password");
let sonam=document.querySelector("#sonam");
let checkpassword=document.querySelector("#checkpassword");
let checkuser=document.querySelector("#checkuser");
let checkemail=document.querySelector("#checkemail");
let checksonam=document.querySelector("#checksonam");
let btn=document.querySelector("#btn");
let arr=[];
function check1(){
    a= email.value.indexOf("@");
    dot=email.value.indexOf(".");
    if(a<1||(dot-a<2)){
        checkemail.innerHTML="*Email chưa đúng định dạng"
        return false;
    }else{
        checkemail.innerHTML=""
        return true;
    }
    
    }
function check2(){
    let checkreult=true;
    if(user.value.trim()==""){
        checkuser.innerHTML="* bắt buộc nhập tên user"
        checkreult=false
    }else{
        checkuser.innerHTML="";
        checkreult=true;
    }
    if(password.value.trim()==""){
        checkpassword.innerHTML="* bắt buộc nhập password"
        checkreult=false
    }else{
        checkpassword.innerHTML="";
        checkreult=true;
    }
    if(sonam.value.trim()==""){
        checksonam.innerHTML="* bắt buộc nhập số năm"
        checkreult=false
    }else{
        checksonam.innerHTML="";
        checkreult=true;
    }
    if(check1()){
        checkreult=true;
    }else{
        checkreult=false;
    }


return checkreult;
}
btn.addEventListener("click", function(){
    if(check2()==true && check1()==true){
        let taikhoan={
            user:user.value,
            email:email.value,
            password:password.value,
            sonam:sonam.value
        }
        arr.push(taikhoan);
        alert("đăng kí thành công")
        console.log(arr)
    }

})
