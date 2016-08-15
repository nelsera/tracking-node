
function TrackingController() {
}

function get(req, res, next) {
  res.status(200).json({ nelson: 'bonito' });
}

TrackingController.prototype = {
  get: get
};

var trackingController = new TrackingController();

module.exports = trackingController;
