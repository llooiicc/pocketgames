class Mailer {

    constructor(){

        this.mailjet = require ('node-mailjet')
            .connect("8212d49be1af4c46a82e49e19849f67f", "5816ee8b455bdb7cde898599f69d6715");
    }

    checkFormValidity(requestBody){

        if(requestBody.mail != null || requestBody.mail != ""){
            console.log('[Mailer] mail is ' + requestBody.mail);
            if(!this.checkMailValidity(requestBody.mail)){
                return 101;
            }
        }
        else{
            return 102;
        }

        if(requestBody.content == null || requestBody.content == ""){
            return 103;
        }

        return 0;

    }

    checkMailValidity(mail){

        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(mail).toLowerCase());
    }

    sendMail(requestBody){

        return new Promise( (resolve, reject) => {

            const mailjet = require ('node-mailjet')
                .connect("8212d49be1af4c46a82e49e19849f67f", "5816ee8b455bdb7cde898599f69d6715");
            const request = mailjet
                .post("send")
                .request({
                    "FromEmail":"pocketgamesapp@gmail.com",
                    "FromName":requestBody.name || "undefined",
                    "Subject":requestBody.subject,
                    "Text-part":"[CONTACT] from " + requestBody.name || "undefined",
                    "Html-part":"<p>" +  requestBody.content + "</p>",
                    "Recipients":[{"Email":"pocketgamesapp@gmail.com"}]
                });
            request
                .then(result => {
                    resolve(0);
                })
                .catch(err => {
                    reject();
                })
        });



    }
}

module.exports = Mailer;