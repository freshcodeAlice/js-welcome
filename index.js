/* Задача. Выведите на экран текущие день, месяц и год в формате 'год-месяц-день'.
*/

function getFormatDate() {
    const now = new Date();
    return `${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()}`
}

const test = getFormatDate();