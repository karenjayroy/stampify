const {Client} = require('pg')  // what is {Client}?
//database outside of my local host
const uri = 'postgres://sqbtvtnq:C8VT4uFIv9Ynt18DhfhmJb7npcHet97b@isilo.db.elephantsql.com:5432/sqbtvtnq';
// connects to database
const client = new Client({
  connectionString: uri,
})
client.connect()

// adding new rows to user table
const addUser = (req, res, next) => {
    client.query('INSERT INTO users ("user_name", "user_password", "phone_number") VALUES ($1, $2, $3) RETURNING *;', [req.body.name, req.body.password, req.body.phone_number], (err, result) => {
        if(err) {
            console.log(err);
            return res.status(400).send('Failed to create user!');
        }
        // console.log('successful add');
        res.locals.addUser = result.rows;
        return next();
    })
}

// adding new row to user_store table
const addCard = (req, res, next) => {
    // console.log(req.params);
    client.query('INSERT INTO user_store ("user_id", "store_id", "stamp_count") VALUES ((SELECT user_id from users where user_name = $1), (SELECT store_id from stores where store_name= $2), 0) returning *', [req.body.name, req.params.store], (err, result) => {
        if(err) {
            // console.log(req.params.store)
            return res.status(400).send('Failed to create new card!');
        }
        res.locals.userCard = result;
        return next();
    });
}

// getting stamp count data from user_store table. 
const stampCount = (req, res, next) => {
    client.query('select stamp_count, store_name from user_store inner join stores on user_store.store_id = stores.store_id where user_id = $1;', [res.locals.user.rows[0].user_id], (err, result) => {
        if(err) {
            return res.status(400).send('Failed to find stamp cards.');
        }
        res.locals.stamps = result;
        // console.log('stampsss', res.locals.stamps);
        return next();
    })
}


const userLogin = (req, res, next) => {
     client.query(`SELECT * FROM users WHERE user_name=$1 and user_password=$2;`, [req.body.name, req.body.password], (err, result) => {
         if(err) {
             return res.status(400).send('Failed to login!');
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
            return res.status(400).send('Failed login!');
        }
        // console.log('this is the result' , result);
        res.locals.store = result;
        return next();
     })
}

const addStamp = (req, res, next) => {
    const number = req.params.phone;
    const id = req.body.storeid;
    client.query('update user_store set stamp_count = (Select stamp_count from user_store inner join users on user_store.user_id = users.user_id where phone_number=$1 and user_store.store_id = $2) + 1 where user_store.store_id = $2 and user_id = (select user_id from users where phone_number = $1)', [number, id], (err, result) => {
        if(err) {
            return res.status(400).send('Failed login!');
        }
        // console.log('updated')
        res.locals.stampCount = result;
        return next();
    })
}

module.exports = {addUser, addCard, userLogin, storeLogin, stampCount, addStamp};


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
    // client.query('select stamp_count, store_name from user_store inner join stores on user_store.store_id = store_id where user_id = $1'), [req.body.userId]

//     from customers
// join orders
//    on customers.customer_id = orders.customer_id
// where customer_id = 3

// query to increment stamp cards
    // first find the user
// client.query(`SELECT users.user_id, store.store_id FROM USER_STORES ON phoneNumber= $1;`, [phoneNumber]
// client.query(`SELECT store_id FROM STORES WHERE = store_name= $1;`, [storename]
    // if it matches
//  client.query(`SELECT stamp_count FROM USER_STORES WHERE user_id=$1 and store_id=$2;`, [name, password]

// (')
