function timer() {
    let passedSeconds = 0;
    let timer;

    $('#start-timer').click(startTimer);
    $('#stop-timer').click(stopTimer);

    function startTimer() {
        if(!timer){
            timer = setInterval(increaseTime, 1000);
        }

        function increaseTime() {
            passedSeconds++;
            let h = Math.floor(passedSeconds / 60 / 60);
            let m = Math.floor((passedSeconds % (60 * 60)) / 60);
            let s = (passedSeconds % (60 * 60)) % 60;

            $('#hours').text(h > 9 ? h : '0' + h);
            $('#minutes').text(m > 9 ? m : '0' + m);
            $('#seconds').text(s > 9 ? s : '0' + s);
        }
    }

    function stopTimer() {
        clearInterval(timer);
        timer = null;
    }
}