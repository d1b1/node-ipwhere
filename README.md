# JavaScript GitHub API for Node.JS

Node.js implimentation of the [IPInfoDB.com](http://www.ipinfodb.com/) lite GEO IP. 

## Installation

  Install with the Node.JS package manager [npm](http://npmjs.org/):

      $ npm install ipinfodb

## Documentation

This package implements the free open geo IP. No data file required. The accuracy of the lite version is not perfect, but provides
decent country, state and city. To use this service, register on their site and store the api key in an enviroment variable.

Register and request API Key, the [IPInfoDB.com Site](http://www.ipinfodb.com/)

You can find the docs for the API of this client at [https://github.com/d1b1/node-ipinfodb/](https://github.com/d1b1/node-ipinfodb)

Builds of the [enginkizil JQuery](https://github.com/enginkizil/jqIpLocation)

## Example

Print all followers of the user "mikedeboer" to the console.

    var ipinfodb = require("ipinfodb");

    var ip = new ipinfodb({
        // required
        apikey: process.env.IFAPIDB_KEY, // "XXXXXXXXXXXXXX"
        // optional
        timeout: 5000
    });

    ip.city('213.243.4.20', function(err, data) {
       console.log('JSON Result (IPv4)', data);
    });

    ip.country('213.243.4.20', { format: 'raw' }, function(err, data) {
      console.log('Raw Result (IPv4)', data);
    });

    // Sample Result

    { statusCode: 'OK',
      statusMessage: '',
      ipAddress: '213.243.4.20',
      countryCode: 'TR',
      countryName: 'TURKEY',
      regionName: 'ISTANBUL',
      cityName: 'ISTANBUL',
      zipCode: '-',
      latitude: '41.0138',
      longitude: '28.9497',
      timeZone: '+02:00' 
    }


## LICENSE

MIT license. See the LICENSE file for details.