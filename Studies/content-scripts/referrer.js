// Function encapsulation to maintain unique variable scope for each content script
(function() {

browser.runtime.sendMessage({
    type: "WebScience.referrerUpdate",
    referrer: document.referrer
});

})();
