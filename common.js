function getHost() {
    var protocol = window.location.protocol;
    var hostname = window.location.hostname;
    var div = document.getElementById('result');
    div.innerHTML = 'protocol:' + protocol + '<br>' + 'hostname:' + hostname;
}

function getSize() {
    var width = window.screen.width;
    var height = window.screen.height;
    var div = document.getElementById('result');
    div.innerHTML = 'width: ' + width + '<br>' + 'height: ' + height;
}
