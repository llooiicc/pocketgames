class PostgresAcces {

    constructor(){

        this.Pg = require('pg');        this.client = new this.Pg.Pool({
            user: 'cjekqxcx',
            host: 'stampy.db.elephantsql.com',
            database: 'cjekqxcx',
            password: 'lCwJHzTC7TC2s97zARvWtSs-yeQBtSFX',
            port: 5432,
        });
        this.client.connect().then((result) => {

        }).catch((err) => {

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

                    let sql = "insert into mails (id , mail) values(DEFAULT , '" + mail + "');";

                    this.client.query(sql, function (err) {
                        if (err) {
                            console.log(err.message);
                            reject(1);
                        } else {
                            // get the last insert id
                            console.log(`A row has been inserted`);
                            resolve(0);
                        }
                    });

                }).catch((err) => {
                    reject(err);
                })
            }

        });
    }

    readCustomerMail(mail){

        return new Promise((resolve, reject) => {
            let sql = "select * from mails where mail = '"+mail+"';";
            this.client.query(sql, (err, res) => {

                if(err){
                    reject(1);
                }
                else if(res.rows.length > 0){
                    reject(12)
                }
                else{
                    resolve(0);
                }

            });
        });

    }


}

module.exports = PostgresAcces;