const mongoose = require("mongoose");
const app = mongoose.connection;
const Vampires = require('./models/vampire.js');


mongoose.connect('mongodb://localhost:27017/vampires');

app.on('error', (err) => {
	console.log(err, ' this is the error message')
});

app.on('connected', () => {
	console.log('mongoose is connected to mongodb')
});



// 1. Require your node modules

// 2. Require your model (and possibly your extra data source);

// 3. Connect your database and collection name

// 4. Open your mongoose connection

/////////////////////////////////////////////////
//Write your answers to add, query, update, remove, and Hungry for More below.

// Note: Remember to close your connection after you add, update, remove from your database
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// INSERT USING MONGOOSE

// Vampires.collection.insertMany([
//   {
//     name: 'Count Chocula',
//     hair_color: 'brown',
//     eye_color: 'brown',
//     dob: new Date(1971, 2, 13, 7, 47),
//     loves: ['cereal','marshmallows'],
//     location: 'Minneapolis, Minnesota, US',
//     gender: 'm',
//     victims: 2
//   },{
//     name: 'Dracula',
//     dob: new Date(937, 0, 24, 13, 0),
//     hair_color: 'brown',
//     eye_color: 'blue',
//     loves: ['Winona Ryder', 'top hats', 'fancy cloaks', 'handlebar   mustaches'],
//     location: 'Transylvania, Romania',
//     gender: 'm',
//     victims: 1238
//   },{
//     name: 'Elizabeth Bathory ',
//     dob: new Date(1560, 8, 7, 22, 10),
//     hair_color: 'brown',
//     eye_color: 'brown',
//     loves: ['virgin blood', 'fancy cloaks','frilly collars'],
//     location: 'Nyírbátor, Hungary',
//     gender: 'f',
//     victims: 980
//   },{
//     name: 'Lestat',
//     dob: new Date(1760, 11, 9, 18, 44),
//     hair_color: 'blonde',
//     eye_color: 'blue',
//     loves: ['frilly shirtsleeves', 'frilly collars', 'lurking in   rotting mansions', 'Louis'],
//     location: 'Auvergne, France',
//     gender: 'm',
//     victims: 324
//   },{
//     name: 'Louis de Pointe du Lac',
//     dob: new Date(1766, 6, 4, 2, 1),
//     hair_color: 'brown',
//     eye_color: 'blue',
//     loves:['brooding', 'Claudia', 'staring longingly into the   distance'],
//     location: 'New Orleans, Louisiana, US',
//     gender:'m',
//     victims: 150
//   },{
//     name:'Claudia',
//     dob: new Date(1793, 2, 7, 8, 30),
//     hair_color: 'blonde',
//     eye_color: 'blue',
//     loves: ['doll babies', 'ribbons', 'appearing innocent', '  trickery'],
//     location: 'New Orleans, Louisiana, US',
//     gender: 'f',
//     victims: 290
//   },{
//     name:'Armand',
//     dob: new Date(1481, 6, 1, 10, 42),
//     hair_color: 'red',
//     eye_color: 'brown',
//     loves: ['theatre', 'painting', 'velvet robes', 'being tragic'],
//     location: 'Kiev, Russia',
//     gender: 'm',
//     victims: 1045
//   },{
//     name:'Santino',
//     dob: new Date(1465, 6, 1, 10, 42),
//     hair_color: 'brown',
//     eye_color: 'brown',
//     loves: ['trickery', 'vampiric cults', 'fancy cloaks'],
//     location: 'Rome, Italy',
//     gender: 'm',
//     victims: 1103
//   },{
//     name:'Akasha',
//     dob: new Date(-8000, 6, 1, 10, 42),
//     hair_color: 'brown',
//     eye_color: 'green',
//     loves: ['eating hearts', 'bathing in roses', 'elaborate   headdresses', 'R&B music'],
//     location: 'Kemet, Egypt',
//     gender: 'f',
//     victims: 210234,
//     title: 'Queen of the Damned'
//   },{
//     name: 'Edward Cullen',
//     dob: new Date(1901, 6, 20, 0, 57),
//     hair_color: 'brown',
//     eye_color: 'brown',
//     loves: ['brooding', 'diamond skin', 'calling people spider   monkeys'],
//     location: 'Chicago, Illinois, US',
//     gender: 'm',
//   },{
//     name: 'Persephone Bourignon',
//     dob: new Date(1801, 5, 17, 14, 53),
//     hair_color: 'red',
//     eye_color: 'green',
//     loves: ['wine', 'fancy cloaks', 'appearing innocent'],
//     location: 'Paris, France',
//     gender: 'f',
//     victims: 450
//   },{
//     name: 'René Tremblay',
//     dob: new Date(1922, 2, 8, 5, 3),
//     hair_color: 'brown',
//     eye_color: 'green',
//     loves: ['frilly shirtsleeves', 'trickery', 'card games'],
//     location: 'Bucharest, Romania',
//     gender: 'm',
//     victims: 134
//   },{
//     name: 'Caroline Belmont',
//     hair_color: 'blonde',
//     eye_color: 'brown',
//     dob: new Date(1799, 4, 21, 16, 15),
//     loves: ['marshmallows', 'ribbons', 'being tragic'],
//     location: 'Ljubljana, Slovenia',
//     gender: 'f',
//     victims: 567
//   },{
//     name: 'Francis Frost',
//     hair_color: 'black',
//     eye_color: 'blue',
//     dob: new Date(1976, 6, 18, 18, 18),
//     loves: ['brooding', 'frilly shirtsleeves'],
//     location: 'New York, New York, US',
//     gender: 'm',
//     victims: 112
//   },{
//     name: 'Barnabas Spenser',
//     hair_color: 'brown',
//     eye_color: 'brown',
//     dob: new Date(1984, 6, 3, 13, 12),
//     loves: ['being merry', 'being insane', 'card games'],
//     location: 'New York, New York, US',
//     gender: 'm',
//     title: 'Osiris of Sewer Rats'
//   }
// ],(err, data) => {
//     console.log("added provided vampire data")
//     mongoose.connection.close();
//   });

// ### Add the vampire data that we gave you

// ### Add some new vampire data

// Vampires.create(
//   {
//     name: 'Ed Booch',
//     dob: new Date(221, 0, 24, 13, 0),
//     hair_color: 'orange',
//     eye_color: 'green',
//     loves: ['kittens', 'ducks', 'kombocha'],
//     location: 'Hilo, Hawaii',
//     gender: 'm',
//     victims: 1230
//   },
// {
//     name: 'Fancy Pants',
//     dob: new Date(202, 0, 24, 13, 0),
//     hair_color: 'yellow',
//     eye_color: 'green',
//     loves: ['milk', 'peonies', 'blue jays'],
//     location: 'London, England',
//     gender: 'f',
//     victims: 123
//   },{
//     name: 'Tom Henkle',
//     dob: new Date(160, 8, 7, 22, 10),
//     hair_color: 'black',
//     eye_color: 'black',
//     loves: ['edamame', 'rap music','beef'],
//     location: 'Tokyo, Japan',
//     gender: 'm',
//     victims: 80
//   },(err, resVampires) => {
//     if(err){
//       console.log("vampire NOT added");
//     } else {
//       console.log("resVampires");
//     }
//     })

/////////////////////////////////////////////////
// ## QUERYING
/////////////////////////////////////////////////
// ### Select by comparison

// Vampires.find({'gender': 'f'}, (err, resFemales) => {
//   if(err){
//     console.log("females not found");
//   } else {
//     console.log("FEMALES FOUND!");
//   }
// });

// Vampires.find({'victims': {$gt : 500}}, (err, resVictims) => {
//   if(err){
//     conosle.log("victims not found");
//   } else {
//     console.log("VICTIMS FOUND")
//   }
// });

// Vampires.find({'victims': {$lt : 150}}, (err, resVictims) => {
//   if(err){
//     console.log("victims not found");
//   } else {
//     console.log("VICTIMS FOUND");
//   }
// });

// Vampires.find({'victims': {$ne: 210234}}, (err, resVictims) => {
//   if(err) {
//     console.log("not found");
//   } else {
//     console.log("FOUND");
//   }
// });

// Vampires.find({'victims': {$gt: 150}} && {'victims': {$lt: 500}}, (err, resVictims) => {
//   if(err) {
//     console.log("not found");
//   } else {
//     console.log("FOUND");
//   }
// });
/////////////////////////////////////////////////
// ### Select by exists or does not exist
// Vampires.find({'title': {$exists: true}}, (err, resTitle) => {
//   if(err) {
//     console.log("NOT FOUND");
//   } else {
//     console.log("FOUND");
//   }
// })

// Vampires.find({'title': {$exists: false}}, (err, resTitle) => {
//   if(err) {
//     console.log("NOT FOUND");
//   } else {
//     console.log(resTitle);
//   }
// })

// Vampires.find({'title': {$exists: true} && {'victims': null}}, (err, resand) => {
//   if(err) {
//     console.log("NOT FOUND");
//   } else {
//     console.log("FOUND");
//   }
// })

// Vampires.find({'victims': {$exists: true}} && {'victims': {$gt: 1000}}, (err, resvictims) => {
//   if(err) {
//     console.log("NOT FOUND");
//   } else {
//     console.log(resvictims);
//   }
// })
/////////////////////////////////////////////////
// ### Select with OR

// Vampires.find({ $or:[{'location': {$eq: ['New York, New York, US']}}, {'location': {$eq: ['New Orleans, Louisiana, US']}}]}, (err, location) => {
//   if(err) {
//     console.log("error");
//   } else {
//     console.log(location)
//   }
// })

// Vampires.find({ $or:[{'loves': {$eq: 'brooding'}}, {'loves': {$eq: 'being tragic'}}]},
//   (err, loves) => {
//   if(err) {
//     console.log("error");
//   } else {
//     console.log(loves)
//   }
// });

// Vampires.find({ $or:[{'loves': {$eq: 'brooding'}}, {'loves': {$eq: 'being tragic'}}]},
//   (err, loves) => {
//   if(err) {
//     console.log("error");
//   } else {
//     console.log(loves)
//   }
// });

// Vampires.find({ $or:[{'victims': {$gt : 1000}}, {'loves': {$eq : 'marshmallows'}}]},
//   (err, loves) => {
//   if(err) {
//     console.log("error");
//   } else {
//     console.log(loves)
//   }
// });
  
  // Vampires.find({ $or:[{"hair_color": {$eq: 'red'}}, {"eye_color": {$eq: 'green'}}]},
  //     (err, colors) => {
  //       if(err) {
  //       console.log("error");
  //     } else {
  //       console.log(colors)
  //       }
  //     });


/////////////////////////////////////////////////
//### Select objects that match one of several values
// Vampires.find({ $or:[{'loves': {$eq: "frilly shirtsleeves"}}, {'loves': {$eq: "frilly collars"}}]},
//   (err, shirts) => {
//     if(err) {
//       console.log("error");
//     } else {
//       console.log(shirts);
//     }
//   });

// Vampires.find({'loves': {$eq: 'brooding'}},
//     (err, brooding) => {
//     if(err) {
//       console.log("error");
//     } else {
//       console.log(brooding);
//     }
//   });
  
// Vampires.find({ $or: [{'loves': {$eq: "appearing innocent"}}, {'loves': {$eq: 'trickery'}}, {'loves': {$eq: 'lurking in rotting mansions'}}, {'loves': {$eq: "R&B music"}}]},
//   (err, lovelist)=> {
//     if(err) {
//       console.log("error");
//     } else {
//       console.log(lovelist);
//     }
//   });

// Vampires.find({ $and: [{'loves': {$eq: "fancy coats"}}, {$or: [{'loves': {$nin: "top hats"}}, {'loves': {$nin: "virgin blood"}}]}]},

//   (err, conditions) => {
//     if(err) {
//       console.log("error");
//     } else {
//       console.log(conditions);
//     }
//   });
//*** error

/////////////////////////////////////////////////
//### Negative Selection

// Vampires.find({ $or: [{'loves': {$eq: 'ribbons'}}, {'eye_color': {$not: {$eq: 'brown'}}}]},
//   (err, eyes) => {
//     if(err){
//     console.log("error");
//   } else{
//     console.log(eyes);
//   }
//   })

// Vampires.find({'location': {$not: {$eq: ['Rome, Italy']}}},
//     (err, location) => {
//     if(err){
//     console.log("error");
//   } else{
//     console.log(location);
//   }
//   })

// Vampires.find({ $and: [{'loves': {$nin: ['fancy cloaks']}}, {'loves': {$nin: ['frilly shirtsleeves']}}, 
// {'loves': {$nin: ['appearing innocent']}}, {'loves': {$nin: ['being tragic']}}, 
// {'loves': {$nin: ['brooding']}}]},
//     (err, lovehates) => {
//     if(err){
//     console.log("error");
//   } else{
//     console.log(lovehates);
//   }
//   })

// Vampires.find({'victims': {$not: {$gt: 200}}},
//    (err, victims) => {
//     if(err){
//     console.log("error");
//   } else{
//     console.log(victims);
//   }
//   })


/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REPLACE

// Vampires.findOneAndUpdate(
//   {name: 'Claudia'},
//   {$set: { name: 'Eve', portrayed_by: 'Tilda Swinton'}},
//   {new: true},
//     (err, res) => {
//     if(err){
//       console.log("error");
//     } else{
//       console.log(res);
//     }
// });

//** difference?


// Vampires.findOneAndUpdate(
//   { gender: 'm' },
//   { $set: { name: 'Guy Man', is_actually: 'were-lizard' } },
//    {new: true},
//   (err, res) => {
//     if(err){
//       console.log("error");
//     } else{
//       console.log("worked");
//     }
// });

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## UPDATE

// Vampires.findOneAndUpdate(
//   { name: 'Guy Man' },
//   { $set: { gender: 'f'}},
//   {new: true},
//   (err, res) => {
//     if(err){
//       console.log("error");
//     } else{
//       console.log(res);
//     }
//   });

// Vampires.findOneAndUpdate(
//   { name: 'Eve' },
//   { $set: {gender: 'm'}},
//   {new: true},
//   (err, res) => {
//     if(err){
//       console.log("error");
//     } else{
//       console.log(res);
//     }
//   });

// Vampires.findOneAndUpdate(
//   { name: 'Guy Man' },
//   {$set: {hates: ['clothes', 'jobs']}},
//   {new: true},
//   (err, res) => {
//     if(err){
//       console.log("error");
//     } else{
//       console.log(res);
//     }
//   });

// Vampires.findOneAndUpdate(
//   { name: 'Guy Man' },
//   {$push: {hates: ['alarm clocks', 'jackalopes']}},
//   {new: true},
//   (err, res) => {
//     if(err){
//       console.log("error");
//     } else{
//       console.log(res);
//     }
//   });

// Vampires.findOneAndUpdate(
//   { name: 'Eve' },
//   {$rename: {name: 'moniker'}},
//   {new: true},
//   (err, res) => {
//     if(err){
//       console.log("error");
//     } else{
//       console.log(res);
//     }
//   });

// Vampires.updateMany(
//   {gender: 'f'},
//   {$set: {gender: 'fems'}},
//    {new: true},
//     (err, res) => {
//     if(err){
//       console.log("error");
//     } else{
//       console.log(res);
//     }
//   });


/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REMOVE

// Vampires.removeOne(
//   {hair_color: 'brown'},
//   (err, res) => {
//     if(err){
//       console.log("error");
//     } else{
//       console.log(res);
//     }
//   });

// Vampires.removeMany(
//   {eye_color: 'blue'},
//   (err, res) => {
//     if(err){
//       console.log("error");
//     } else{
//       console.log(res);
//     }
//   });



/////////////////////////////////////////////////
/////////////////////////////////////////////////

// ## HUNGRY FOR MORE
/////////////////////////////////////////////////
//## Select objects that match one of several values

/////////////////////////////////////////////////
//## Negative Selection

/////////////////////////////////////////////////
