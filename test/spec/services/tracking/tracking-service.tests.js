
describe('TrackingService Tests', function() {

  var trackingService;

  beforeEach(function() {
    trackingService = require('../../../../app/services/tracking/tracking-service');
  });

  describe('lookupExample', function() {

    it('should be a function', function(done) {
      expect(trackingService.lookupExample).to.be.a('function');
      done();
    });

  });
});
