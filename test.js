var chrono = require('./chrono.js');

console.log(chrono.parseDate('tomorrow', null, {timezone: 'Asia/Singapore'}));
console.log(chrono.parseDate('tomorrow', null));