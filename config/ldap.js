
var ipaddr = "192.168.126.110";
var port = "389";
var connectionString = "ldap://" + ipaddr + ":" + port;
var rootDN = "cn=Manager,dc=excise,dc=go,dc=th";
var rootPassword = "P@ssw0rd";
var baseDN = "ou=People,dc=excise,dc=go,dc=th";


module.exports = {
  'rootDN': rootDN,
  'rootPassword': rootPassword,
  'baseDN': baseDN,
  'connectionString': connectionString
};
