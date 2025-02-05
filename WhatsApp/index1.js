function SendToWhatsapp() {
    let number = "+923434263899";
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    var url = "http://wa.me/" +number+ "?text="
    +"*Name :*"+name+"%0a"
    +"*Email :*"+email+"%0a"
    +"*message :*"+message+"%0a%0a";



    window.open(url, '_blank').focus();
}
