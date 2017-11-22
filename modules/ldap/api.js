var ldapCfg = require('../../config/ldap.js');
var ldap = require('ldapjs');

var search = function(filter, scope, attribute){
  var opts = {
    filter: filter,
    scope: scope,
    attributes: attribute
  }
  var client = ldap.createClient({
    url: ldapCfg.connectionString
  });
  client.bind(ldapCfg.rootDN, ldapCfg.rootPassword, function(err) {
    console.log(err);
  });
  client.search(ldapCfg.baseDN, opts, function(err, res) {
    console.log("serach");

    res.on('searchEntry', function(entry){
        console.log(JSON.stringify(entry.object));
        client.unbind(function(err){
            console.log(err);
            return "search";
        });
    });

    res.on('error', function(err){
      console.error('error: ' + err.message);
    });

    res.on('end', function(result){
      console.log('status: ' + result.status);
    });





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
