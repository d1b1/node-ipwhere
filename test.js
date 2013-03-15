var ipinfodb = require('./index');

var ip = new ipinfodb({
    // required
    apikey: "06de0bbf08573bd22d425ee8171a577644b4b472e2549564cbbe97f287346b66",
    // optional
    timeout: 5000
});

ip.city('213.243.4.20', function(err, data) {
  console.log('JSON Result (IPv4)', data);
});

ip.country('213.243.4.20', { format: 'raw' }, function(err, data) {
  console.log('Raw Result (IPv4)', data);
});

ip.country('213.243.4.20', { format: 'xml' }, function(err, data) {
  console.log('XML Result (IPv4)', data);
});
