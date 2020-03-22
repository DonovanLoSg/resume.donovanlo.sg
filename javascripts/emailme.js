function sendEmail() {
    Email.send({
    Host: "smtp.gmail.com",
    Username : "DLo9511374",
    Password : "F24Jsf!324",
    To : 'donovan.lo@mensa.org.sg',
    From : "DLo9511374@gmail.com",
    Subject : "Online Contact Me Form",
    Body : "<email body>",
    })
.then(function(message){
        alert("mail sent successfully")
    });
}