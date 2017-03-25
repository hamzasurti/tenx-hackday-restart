const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UserSchema = new Schema({
  user_id: ObjectId,
  username: {
    type: String,
    unique: true,
  },
  password: String,
  first_name: String,
  last_name: String,
  bio: {
    sex: String,
    age: Number,
  },
});

const User = module.exports = mongoose.model('UserSchema', UserSchema);

// hashed password
module.exports.createUser = (newUser) => {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      // Store hash in your password DB.
      newUser.password = hash;

      newUser.save((err) => {
        if (err) {
          console.log(err);
        } else {
          console.log('New User has been created');
        }
      });
    });
  });
};

module.exports.getUserByUsername = (username, callback) => {
  const query = {username};
  User.findOne(query, callback);
};

//
// const jon = new User({
//     username: 'Ankie',
//     password: 'password',
//     first_name: 'Jonathan',
//     last_name: 'Ankiewicz',
//     bio:{
//       sex: 'male',
//       age: 260
//     }
// })
//
// jon.save(function(err){
//   if(err) {
//     console.log(err)
//
//   } else {
//     console.log("Winning")
//   }
// })
