
 var button = document.getElementById('counter');

 button.onclick = function () {
    
 var request = new XMLHttpRequest();

 request.onreadystatechange = function () {
 if (request.readystate === XMLHttpRequest.DONE) {
 if (request.status === 200) {
 var counter = request.responseText;
 var span = document.getElementById('count');
 span.innerHTML = counter.toStrimg();
}

    
}



};
request.open('GET', 'http://cloud.imad.hasura.io/counter',true);
request.send(null);

};