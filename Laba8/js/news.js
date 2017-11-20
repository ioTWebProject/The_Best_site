window.addEventListener('load', function() {

    function updateOnlineStatus(event) {
        if(isOnline()){
            ReadOflineNews();
        }
    }
    window.addEventListener('online',  updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);
});

function isOnline() {
    return window.navigator.onLine;
}


function ReadOflineNews() {
    len = localStorage.length + 1;
    for (var k = 1; k < len; k++) {
        $("#news_list").prepend("<li class=\"list-group-item\">\n" +
            "    <article class=\"element\">\n" +
            "        <div class=\"excerpt\">\n" +
            "            <h6 class=\"heading\"></h6>\n" +
            "            <p class=\"longdescription\"></p>\n" +
            "            <p class=\"shortdescription\"></p>\n" +
            "        </div>\n" +
            "    </article>\n" +
            "</li></br>");

        news = JSON.parse(localStorage.getItem(k));
        console.log(news[0].name);
        console.log(news[0].shortdescription);
        console.log(news[0].longdescription);

        $('#news_list li:first .heading').append(news[0].name);
        $('#news_list li:first .shortdescription').append(news[0].shortdescription);
        $('#news_list li:first .longdescription').append(news[0].longdescription);

        localStorage.removeItem(k);
    }
}
