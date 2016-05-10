var commodities = {
 
  getAll: function(req, res) {
    var allusers = data; // Spoof a DB call
    res.json(allusers);
  },
 
  getOne: function(req, res) {
    var id = req.params.id;
    var user = data[0]; // Spoof a DB call
    res.json(user);
  }
};
 
var data = [{
  id: 1,
  name: 'Alphabet Inc.',
  symbol: 'GOOG',
  lastTradePrice: 719.50,
  change: '+6.60',
  daysLow: 715.72,
  daysHigh: 721.35
}, {
  id: 2,
  name: 'Yahoo! Inc.',
  symbol: 'YHOO',
  lastTradePrice: 27.44,
  change: '+0.26',
  daysLow: 0,
  daysHigh: 37.48
}, {
  id: 3,
  name: 'Corn Mar 16',
  symbol: 'CH16.CBT',
  lastTradePrice: 364.50,
  change: '-2.25',
  daysLow: 364.25,
  daysHigh: 367.75
}, {
  id: 4,
  name: 'Corn Futures,Mar-2017,Composite',
  symbol: 'CH17.CBT',
  lastTradePrice: 386.75,
  change: '+0.25',
  daysLow: 385.25,
  daysHigh: 389.00
}];
 
module.exports = commodities;