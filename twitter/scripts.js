/*
    INSTRUCTIONS:
        1. Install Twitter Proxy Server: https://www.npmjs.com/package/twitter-proxy
        2. Create config.json file w/appropriate consumerKey and consumer secret values
        3. Navigate to twitter directory
        4. In a terminal shell, run: twitter-proxy config.json
        5. In another terminal shell, run: python -m SimpleHTTPServer 8000
        6. Navigate to http://localhost

    I couldn't figure out how to get a response using fetch API...using jQuery for now
*/
var getData = function () {
    var term = document.getElementById("term").value;
    fetch("http://localhost:7890/1.1/search/tweets.json?q=" + term)
        .then(function(response) { return response.json(); })
        .then(function(json) {
            document.getElementById("results").innerHTML = JSON.stringify(json, null, "    ");
        });
};
document.getElementById("go").addEventListener("click", getData);