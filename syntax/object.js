var members = ['Albert', 'Bethany', 'Charles'];
console.log(members[1]);  // Bethany
var i = 0;
while (i < members.length) {
  console.log('array loop', members[i]);
  i += 1;
}

var roles = {
  'programmer': 'Albert', 
  'designer': 'Bethany',
  'manager': 'Charles'
}
console.log(roles.designer);  // Bethany
console.log(roles['designer']); // Bethany

for (var name in roles) {
  console.log('object =>', name, 'value =>', roles[name]);
}