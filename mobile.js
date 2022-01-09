$(document).ready(function() {
    animateLockscreen();
    setInterval(function(e) {
     animateLockscreen();        
    }, 10000);
});

function animateLockscreen() {
    var dials = $('.dial');
    var pass = $('.pass li');
    var passCode = [2, 3, 9, 0];
    for (var i=0; i<passCode.length; i++) {
        console.log(pass[i]);
        //  if code is 0, it means we actually want index 10
        var code = passCode[i]-1 == -1 ? 9 : passCode[i]-1;
        var time = parseInt(500+(500*i));
        // console.log(code);
        // console.log(time);
        // console.log($(dials[code]));
        $(dials[code]).delay(time).queue(function(e) {   
            console.log($(this));
            $(this).addClass('press').dequeue();
        });
        $(pass[i]).delay(time).queue(function(e) {
            console.log($(this));
            $(this).addClass('fill').dequeue();
        });
    }
    setTimeout(function(e) {
        $('.phone-lockscreen').addClass('slide-down');
    }, 3500);
    setTimeout(function(e) {
        $('.fill').removeClass('fill');
        $('.press').removeClass('press');
        $('.phone-lockscreen').removeClass('slide-down');
    }, 8500);   
};