const pg = require('pg');
const uri = 'postgres://sqbtvtnq:C8VT4uFIv9Ynt18DhfhmJb7npcHet97b@isilo.db.elephantsql.com:5432/sqbtvtnq';


let dbRef;
//this is our connection
  pg.connect(uri, (err, db) => {
  if (err) throw new Error(err);
    //saving the database to the variable outside of scope for access
  dbRef = db;
});

