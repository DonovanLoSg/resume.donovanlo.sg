
document.getElementById("submitform").onclick() = 
    document.Email.send({
        apikey : "9AE2E1240D851D95446D75806C226044C407CED61B4F57700A95BAEFFF23F0A5FC2FFC32BC68782501954769A24DA65F",
        subject : "From online form at www.donovanlo.sg",
        to : "donovan.lo@mensa.org.sg",
        from : "donovanlo1174@gmail.com.sg",
        bodyHtml : document.getElementById("sendername").value+"\n"+document.getElementById("senderemail").value+"\n"+document.getElementById("bodyHtml".value)}).then(
    message => alert(message)
    )