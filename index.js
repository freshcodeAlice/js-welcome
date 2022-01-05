const user = {
    'favorite color': 'green',
    0: 'test'
}

user.favoriteColor // Доступ к свойству

user['favorite color'] //Доступ к свойству с возможностью вычисления
user[0]
user['0']

const test = 'favorite color';

user[test]
