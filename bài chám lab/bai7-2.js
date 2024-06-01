let name =document.querySelector("#name");
let matKhau=document.querySelector("#matKhau");
let nhaplaimk=document.querySelector("#nhaplaimk");
let btn=document.querySelector("#dangKi");
let checkmatkhau=document.querySelector("#checkmatkhau");
let checkname=document.querySelector("#checkname");
let checknhaplaimk=document.querySelector("#checknhaplaiml");


let arr=[];

function check(){
    let checkreult=true;
    
if(name.value.trim()==""){
    document.querySelector("#checkname").innerHTML=" * bắt buộc nhập tên đăng nhập";
    checkreult=false;
}else{
    document.querySelector("#checkname").innerHTML='';
    checkreult=true;
}
if(matKhau.value.trim()==""){
    document.querySelector("#checkmatkhau").innerHTML=" * bắt buộc nhập tên mk";
    checkreult=false
}else{
    document.querySelector("#checkmatkhau").innerHTML='';
    checkreult=true;
}
if(nhaplaimk.value!=matKhau.value||nhaplaimk.value.trim()==''){
    document.querySelector("#checknhaplaimk").innerHTML=" * không trùng với mật khẩu bạn đặt!!";
    checkreult=false
}else if(nhaplaimk.value==matKhau.value){
    document.querySelector("#checknhaplaimk").innerHTML='';
    checkreult=true;
}


return checkreult;
}

btn.addEventListener("click", function(){
    let thongbao=document.querySelector("#thongbao");
    if(check()==true){
    
    let taikhoan={
        name:name.value,
        matKhau:matKhau.value,
        nhaplaimk:nhaplaimk.value
    }
    
    arr.push(taikhoan);
    
}
if(check()==false){
    thongbao.innerHTML=''
}else{
    thongbao.innerHTML='Đã Dăng Ký Thành Công'
}
    console.log(arr)
})