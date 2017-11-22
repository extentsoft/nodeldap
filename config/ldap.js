var protocol = "ldap";
var ipaddr = "10.57.1.31";
var port = "389";
var connectionString = protocol + "://" + ipaddr + ":" + port;
var rootDN = "cn=ldapadm,dc=excise,dc=go,dc=th";
var rootPassword = "P@ssw0rd";
var baseDN = "ou=People,dc=excise,dc=go,dc=th";


module.exports = {
  'rootDN': rootDN,
  'rootPassword': rootPassword,
  'baseDN': baseDN,
  'connectionString': connectionString
};
