var should = require('chai').should();
var adobeAnalyticsHelper = require('../index')

it('should set reporting suite ID', function () {
    adobeAnalyticsHelper.setReportingSuiteId("MY-REPORTING-SUITE-ID");
    adobeAnalyticsHelper.getReportingSuiteId().should.equal("MY-REPORTING-SUITE-ID")
});

it('should set reporting host', function () {
    adobeAnalyticsHelper.setReportingHost("MY-REPORTING-HOST");
    adobeAnalyticsHelper.getReportingHost().should.equal("MY-REPORTING-HOST")
});

it('should create a DI xml object to post', function () {
    var callData = {
        visitorID: 'myvisitorId',
        pageName: 'My Home Page',
        channel: 'My Channel name',
        eVar10: 'test evar10 value',
        prop10: 'test prop10 value',
        events: "event10,event11"
    };

    var testResult = '<visitorID>myvisitorId</visitorID><pageName>My Home Page</pageName><channel>My Channel name</channel><eVar10>test evar10 value</eVar10><prop10>test prop10 value</prop10><events>event10,event11</events><referrer>MY-REPORTING-SUITE-ID</referrer><reportSuiteID>MY-REPORTING-SUITE-ID</reportSuiteID>';

    var myDi = adobeAnalyticsHelper.getDataInsertion(callData);

    myDi.getPostXmlRequestBody().should.equal(testResult);
});