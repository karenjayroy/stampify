const {Client} = require('pg')  // what is {Client}?
//database outside of my local host
const uri = 'postgres://sqbtvtnq:C8VT4uFIv9Ynt18DhfhmJb7npcHet97b@isilo.db.elephantsql.com:5432/sqbtvtnq';
// connects to database
const client = new Client({
  connectionString: uri,
})
client.connect()

const addUser = (req, res, next) => {
    client.query('INSERT INTO users ("user_name", "user_password", "phoneNumber") VALUES ($1, $2, $3) RETURNING *;', [req.body.name, req.body.password, req.body.phoneNumber], (err, result) => {
        if(err) {
            console.log(err);
            return res.status(400).send('Failed to create user!');
        } 
        // console.log('successful add');
        res.locals.addUser = result.rows;
        return next();
    })
}

const addCard = (req, res, next) => {
    client.query('INSERT INTO user_store ("user_id", "store_id", "stamp_count") VALUES ((SELECT user_id FROM users WHERE user_name = $1), (SELECT store_id from stores where store_name= $2), 0) returning *', [req.body.name, req.body.store], (err, result) => {
        if(err) {
            console.log('it is not working')
            return res.status(400).send('Failed to create new card!');
        } 
        // console.log('success!');
        res.locals.userCard = result;
        return next();
    });
}

const stampCounts = (req, res, next) => {

}

const userLogin = (req, res, next) => {
     client.query(`SELECT * FROM users WHERE user_name=$1 and user_password=$2;`, [req.body.name, req.body.password], (err, result) => {
         if(err) {
             console.log('Failed login. Please check username and password');
             return res.status(400).send('Failed to create user!');
         } 
         res.locals.user = result;
         return next()
     })
}

const storeLogin = (req, res, next) => { 
     const name = req.body.name;
     const password = req.body.password;
     client.query(`SELECT * FROM stores WHERE store_name=$1 and store_password=$2;`, [name, password], (err, result) => {
        if(err) {
            return res.status(400).send('Failed login!')
        } 
        res.locals.store = result;
        return next();
     })
}

module.exports = {addUser, addCard, userLogin, storeLogin};


// *****query to add new users and stores into user table & store table*****
   
// adding new rows to user table when someone signs up *done*
    //  client.query(INSERT INTO user ("user_name", "user_password", "phoneNumber") VALUES ($1, $2, $3) RETURNING user_id; [req.body.name, req.body.password, req.body.phoneNumber])
// adding new rows to store table *don't need it*
    //  client.query(INSERT INTO store ("store_name", "store_password") VALUES ('starbucks', 'gold star') RETURNING store_id;)
// adding new rows to user_store table *done*
    // select user_id from users and store_id from stores and insert user_id, store_id, stamp_count 0 
    // client.query(INSERT INTO user_store ("user_id", "store_id", "stamp_count") VALUES ((SELECT user_id FROM users WHERE user_name = 'jay'), (SELECT store_id from stores where store_name= 'starbucks'), 0) returning *;



//  query to check when user & store logs in
//  client.query(`SELECT * FROM users WHERE user_name=$1 and user_password=$2;`, [name, password]
//  client.query(`SELECT * FROM stores WHERE store_name=$1 and store_password=$2;`, [name, password]

// query to get stamp counts 
    // client.query('select stamp_counts from user_store where user_id = $1'), [req.body.userId]


// query to increment stamp cards
    // first find the user 
// client.query(`SELECT users.user_id, store.store_id FROM USER_STORES ON phoneNumber= $1;`, [phoneNumber]
// client.query(`SELECT store_id FROM STORES WHERE = store_name= $1;`, [storename]
    // if it matches 
//  client.query(`SELECT stamp_count FROM USER_STORES WHERE user_id=$1 and store_id=$2;`, [name, password]






