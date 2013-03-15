# JavaScript IPinfoDB.com API for Node.JS

Node.js Geographic IP lookup framework.

Services Implements:
* [IPInfoDB.com](http://www.ipinfodb.com/) lite GEO IP. (Done)
* [Hostip.info](http://api.hostip.info/get_html.php?ip=12.215.42.19) (Pending)
* [LocatorHQ.com](http://api.locatorhq.com) (Pending)

## Installation

  Install with the Node.JS package manager [npm](http://npmjs.org/):

      $ npm install ipwhere

## Documentation

This package implements the free open geo IP. No data file required. The accuracy of the lite version is not perfect, but provides
decent country, state and city. To use this service, register on their site and store the api key in an enviroment variable.

* Register and request API Key, [IPInfoDB.com Site](http://www.ipinfodb.com/).
* Builds of the [enginkizil JQuery](https://github.com/enginkizil/jqIpLocation).

## Example

    var ipwhere = require("ipwhere");

    var ip = new ipwhere({
        // required
        apikey: process.env.IFAPIDB_KEY, // "XXXXXXXXXXXXXX"
        // optional
        timeout: 5000
    });

    ip.city('213.243.4.20', function(err, data) {
       console.log('JSON Result (IPv4)', data);
    });

    // Options: { format: 'json|xml|raw (defaults to JSON)' }

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
