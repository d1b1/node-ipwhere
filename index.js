"use strict";

var http  = require('http');
var libxmljs = require("libxmljs");

var Client = module.exports = function(config) {
  this.apikey  = config.apikey;
  this.host    = 'api.ipinfodb.com';
  this.format  = 'json';  // Accepts: raw, xml, json
  this.timeout = 5000;
};

(function() {
 
  this.city = function(ip, opts, cb) {
    this._get('city', ip, opts, cb);
  }

  this.country = function(ip, opts, cb) {
    this._get('country', ip, opts, cb);
  }

  // Helper function for API request.
  this._get = function(type, ip, opts, cb) {

    if (typeof opts == 'function') {
      cb = opts;
      opts = {};
    }

    var format = opts.format || this.format;
    var data;
    var chunkData = '';
    var options = {
      host:        this.host,
      path:        '/v3/ip-' + type + '/?key=' + this.apikey + '&ip=' + ip + '&format=' + format,
      method:      'GET',
      contenttype: 'application/json',
      datatype:    'json'
    };

    var call = http.request(options, function(result) {
      result.setEncoding('utf8');

      result.on('data', function(chunk) { chunkData += chunk; });

      result.on('end', function() {
        if (result.statusCode == 404) return cb(null, null);
        if (result.statusCode == 500) return cb({ message: 'Error accessing this information' }, null);

        if (chunkData.substring(0,5) == 'ERROR') {
          var error = new Error('Error in API Call.');
          error.statuscode = 500;

          return cb(error, null);
        } 
        
        switch (format) {
          case 'json':
            data = JSON.parse(chunkData);
            break;
          case 'xml':
            data = chunkData;
            break;
          default:
            data = chunkData;
        }
  
        cb(null, data);
      });
    });

    // Set the timeout value for the request.
    call.setTimeout(this.timeout, function() {
      call.abort();

      cb(null, null);
    })

    // Set the error state for the request.
    call.on('error', function(err) { cb(err, null); });

    call.end();
  }

}).call(Client.prototype);
