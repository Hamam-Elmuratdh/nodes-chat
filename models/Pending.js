const con = require("../db");

const PendingSchema = `CREATE TABLE IF NOT EXISTS pending(
    requester VARCHAR(255) NOT NULL,
    target VARCHAR(255) NOT NULL
)`;
con.query(PendingSchema, (err, data) => {
    if (err) console.error(err);
    else console.log("Pending Table IS UP");
});

function SendFriendRequest(requester, target) {
    return con.query(`INSERT into pending(requester,target) VALUES (${requester}, ${target})`)
}

function CheckFriendRequest(username) {
    return con.query(`SELECT * FROM pending WHERE target = ${username}`);
}


module.exports.SendFriendRequest = SendFriendRequest;
module.exports.CheckFriendRequest = CheckFriendRequest;
