var ldapCfg = require('../../config/ldap.js');
var ldap = require('ldapjs');

var search = function(filterOrNewDN, scope, attribute){
  var opts = {
    filter: filterOrNewDN,
    scope: 'sub',
    attributes: []
  }
  var client = ldap.createClient({
    url: ldapCfg.connectionString
  });
  client.bind(rootDN, rootPassword, function(err) {
    console.log(err);
  });
  client.search(baseDN, opts, function(err, res) {
    console.log("serach");
    client.unbind(function(err){
        console.log(err);
    });
    return "search";
  });
}

var add = function(){
  return "add";
}
module.exports = function(){
  console.log(ldapCfg.connectionString);
  this.search = search;
  this.add = add;
}
