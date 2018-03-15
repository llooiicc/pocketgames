class DbAcces {

    constructor(){
        this.sqlite = require('sqlite3').verbose();
        this.db = new this.sqlite.Database('db.db', (err) => {
            if (err) {
                return console.error(err.message);
            }
            console.log('Connected to the SQlite database.');
        });
    }

    insertCustomer(mail){

        return new Promise((resolve, reject) => {

            let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if(!re.test(mail)){
                reject(11);
            }
            else {

                this.readCustomerMail(mail).then((result) => {

                    let sql = "insert into customers (id , mail) values(null , '" + mail + "');";

                    this.db.run(sql, [], function (err) {
                        if (err) {
                            console.log(err.message);
                            reject(1);
                        } else {
                            // get the last insert id
                            console.log(`A row has been inserted with rowid ${this.lastID}`);
                            resolve(0);
                        }
                    });

                }).catch((err) => {
                    console.log("mail allready used status code : " + err);
                    reject(err);
                });
            }

        });

    }

    readCustomerMail(mail){

        return new Promise((resolve, reject) => {
            let sql = "select * from customers where mail = '"+mail+"';";
            this.db.all(sql, [], (err, rows) => {

                if(err){
                    reject(1);
                }
                else if(rows.length > 0){
                    reject(12)
                }
                else{
                    resolve(0);
                }

            });
        });

    }
}

module.exports = DbAcces;