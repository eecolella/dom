var timeout = function () {
    var fails = document.getElementsByClassName('test fail'),
        passs = document.getElementsByClassName('test pass');

    fails.length + passs.length || setTimeout(timeout, 500);

    (fails.length || !mocha.showOnlyWithErr) && (document.getElementById('mocha').style.display = 'block');

};

setTimeout(timeout, 500);