module.exports = {
    name: 'status',
    code: `
    **api.leref.ga:**
    $jsonRequest[https://endpoint.apivoid.com/urlstatus/v1/pay-as-you-go/?key=$randomText[$getVar[apikeys]]&url=https://api.leref.ga;data.report.response_headers.status;Something went wrong!]

    **some-aandom-api.ml:**
    $jsonRequest[https://endpoint.apivoid.com/urlstatus/v1/pay-as-you-go/?key=$randomText[$getVar[apikeys]]&url=https://some-random-api.ml;data.report.response_headers.status;Something went wrong!]`
}