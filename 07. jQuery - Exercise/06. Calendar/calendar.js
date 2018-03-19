function calendar([day, month, year]) {
    let inputDate = new Date(year, month - 1, day);

    let cal = $('<table>');
    cal.append($('<caption>').text(`${getMonthName()} ${inputDate.getFullYear()}`)); // Append caption
    cal.append($('<tbody>')); // Append Body

    appendDayNames(); // Append day names

    let firstDay = new Date(inputDate.getFullYear(), inputDate.getMonth(), 1);
    let lastDay = new Date(inputDate.getFullYear(), inputDate.getMonth() + 1, 0);

    let dayCounter = 1;
    appendFirstWeek();
    appendFullWeeks();
    appendRemainingDays();


    $('#content').append(cal); // Append generated calendar to document

    function appendRemainingDays() {
        if(dayCounter <= lastDay.getDate()){
            let lastWeek = $('<tr>');

            for (let i = 0; i < 7 ; i++) {

                if (i <= lastDay.getDay() - 1){
                    // Append day
                    if(dayCounter === inputDate.getDate()){
                        lastWeek.append($('<td>').text(dayCounter++).addClass('today')); // Mark today date
                    } else {
                        lastWeek.append($('<td>').text(dayCounter++));
                    }
                } else {
                    lastWeek.append($('<td>')); // Append empty boxes
                }
            }

            cal.append(lastWeek);
        }
    }

    function appendFullWeeks() {
        let totalFullWeeks = Math.floor((lastDay.getDate() - (dayCounter - 1)) / 7);

        for (let i = 0; i < totalFullWeeks; i++) {
            let currentWeek = $('<tr>');

            for (let i = 0; i < 7; i++) {
                if(dayCounter === inputDate.getDate()){
                    currentWeek.append($('<td>').text(dayCounter++).addClass('today')); // Mark today date
                } else {
                    currentWeek.append($('<td>').text(dayCounter++));
                }
            }

            cal.append(currentWeek);
        }
    }

    function appendFirstWeek(){
        let firstWeekStartDay = firstDay.getDay() - 1;

        if(firstWeekStartDay < 0){
            firstWeekStartDay = 6;
        }

        let firstWeek = $('<tr>');

        for (let i = 0; i < 7; i++) {
            if(i < firstWeekStartDay){
                firstWeek.append($('<td>')); // Append empty box if date is before start day of month
            } else {
                if(dayCounter === inputDate.getDate()){
                    firstWeek.append($('<td>').text(dayCounter++).addClass('today')); // Mark today date
                } else {
                    firstWeek.append($('<td>').text(dayCounter++));
                }
            }
        }

        cal.append(firstWeek); // Append week to calendar
    }

    function appendDayNames() {
        cal.append($('<tr>').append($('<th>').text('Mon'))
            .append($('<th>').text('Tue'))
            .append($('<th>').text('Wed'))
            .append($('<th>').text('Thu'))
            .append($('<th>').text('Fri'))
            .append($('<th>').text('Sat'))
            .append($('<th>').text('Sun'))
        );
    }

    function getMonthName() {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        return months[inputDate.getMonth()];
    }
}