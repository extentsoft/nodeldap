LDAP = require('./modules/ldap/api.js');
ldap = new LDAP();
console.log(ldap.add());
ldap.search("uid=achita","sub",[]);
ldap.search("uid=natthawat_a","sub",[]);
