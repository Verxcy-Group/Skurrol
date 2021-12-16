module.exports = {
    name: 'status',
    code: `**api.leref.ga:**
  $jsonRequest[https://endpoint.apivoid.com/urlstatus/v1/pay-as-you-go/?key=$randomText[$getVar[apikeys]]&url=https://api.leref.ga;data.report.response_headers.status;Could not load class "lerefapi.pinger" in "de.bycrxhit.jsonapi.statusChecker.pinger"]

  **some-aandom-api.ml:**
  $jsonRequest[https://endpoint.apivoid.com/urlstatus/v1/pay-as-you-go/?key=$randomText[$getVar[apikeys]]&url=https://some-random-api.ml;data.report.response_headers.status;Could not load class "sra.pinger" in "de.bycrxhit.jsonapi.statusChecker.pinger"]

  **api.bycrxhit.de:**
  $jsonRequest[https://endpoint.apivoid.com/urlstatus/v1/pay-as-you-go/?key=$randomText[$getVar[apikeys]]&url=https://api.bycrxhit.de;data.report.response_headers.status;Could not load class "bycrxhitapi.pinger" in "de.bycrxhit.jsonapi.statusChecker.pinger"]`
}