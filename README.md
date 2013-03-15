# JavaScript GitHub API for Node.JS

Node.js implimentation of the [IPInfoDB.com](http://www.ipinfodb.com/) lite GEO IP. 

## Installation

  Install with the Node.JS package manager [npm](http://npmjs.org/):

      $ npm install ipinfodb

or

  Install via git clone:

      $ git clone git://github.com/d1b1/node-ipinfodb.git
      $ cd node-ipinfodb
      $ npm install

Request an IP to setup and use the API Service.

## Documentation

You can find the docs for the API of this client at [https://github.com/d1b1/node-ipinfodb/](https://github.com/d1b1/node-ipinfodb)

## Authentication

To use the IPINfoDB.com API you need an API key. 

Additionally, the [IPInfoDB.com Site](http://www.ipinfodb.com/)

Builds of the [enginkizil JQuery](https://github.com/enginkizil/jqIpLocation)


## Example

Print all followers of the user "mikedeboer" to the console.

    var ipinfodb = require("ipinfodb");

    var ip = new ipinfodb({
        // required
        apikey: "XXXXXXXXXXXX",
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