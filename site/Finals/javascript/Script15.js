function getData()
{
    var name = document.getElementById("fname").value;
    var age = document.getElementById("age").value;
    var phone = document.getElementById("pn").value;
    var email = document.getElementById("ea").value;
    var mailing = document.getElementById("ma").value;
    var program= document.getElementById("pro").value; 
    var idnum= document.getElementById("id").value; 
    var year= document.getElementById("yl").value;
    var section = document.getElementById("sec").value;
    localStorage.setItem("txtValue", name);
    localStorage.setItem("txtValue1", age);
    localStorage.setItem("txtValue2", phone);
    localStorage.setItem("txtValue3", email);
    localStorage.setItem("txtValue4", mailing); 
    localStorage.setItem("txtValue5", program); 
    localStorage.setItem("txtValue6", idnum); 
    localStorage.setItem("txtValue7", year);
    localStorage.setItem("txtValue8", section);    
}