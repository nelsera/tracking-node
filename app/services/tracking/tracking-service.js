
function TrackingService() {
}

function lookupExample(id) {
  return { id: id };
}

TrackingService.prototype = {
  lookupExample: lookupExample
};

var trackingService = new TrackingService();

module.exports = trackingService;
