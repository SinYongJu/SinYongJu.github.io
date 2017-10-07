const mysql = require('mysql');
// 추후 db 사용 예정

const con = mysql.createConnection({
  database: '',
  user: '',
  password: ''
})
con.connect()


module.exports = {
  getConnection() {
    return con
  }
}
/*
module.exports.getConnection = function(){
return con;
}
*/
