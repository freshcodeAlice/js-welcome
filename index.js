const weekPlan = {
    Mon: 'Visit to stomatologist',
    Tue: 'Got salary',
    Wed: 'Meet friends',
    Thu: 'Hard working',
    Fri: 'Free day',
    Sat: 'Go to party'
}


function getPlanning() {
    const dayWeek = prompt('Type the day: \nMon - for monday \nTue - thuesday\n Wed - Wednesday \n Thu - Thuesday \n Fri - Friday \n Sat - Saturday');

//    alert(weekPlan[dayWeek] ? weekPlan[dayWeek] : 'Nothing planned for this day');

console.log(dayWeek in weekPlan ? weekPlan[dayWeek] : 'There is no such day in our plan'); // 'key' in object

}

getPlanning();

