function getpassword(){

    var len=document.getElementById("get-length").value;
    var password = '';
    var pwdvalues = '';

    if(len==null||len==''){
        alert("enter the length");
    }
    else if(document.getElementById("upper").checked==false &&
     document.getElementById("lower").checked==false && 
     document.getElementById("num").checked==false && document.getElementById("special").checked==false){
        alert("select atleast one option");
    }
    else{
        if(document.getElementById("upper").checked==true){
            pwdvalues=pwdvalues+'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        }
    
        if(document.getElementById("lower").checked==true){
            pwdvalues=pwdvalues+'abcdefghijklmnopqrstuvwxyz';
        }
    
        if(document.getElementById("num").checked==true){
            pwdvalues=pwdvalues+'0123456789';
        }
    
        if(document.getElementById("special").checked==true){
            pwdvalues=pwdvalues+'@#$&';
        }
        
        for (var i = 0; i < len; i++) {
            let addpwd = Math.floor(Math.random() * pwdvalues.length + 1);
            password += pwdvalues.charAt(addpwd);
        }
    
        document.getElementById("put-password").innerHTML=password;
    }
}