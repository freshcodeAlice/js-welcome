const arrArr = ['laptops', 'mp3-players', 'tablets'];

const categories = new Set(arrArr);
categories.add('phones');
categories.add('tablets');

const arr = [...categories.values()];

/* ------ */

const nums = [1, 1, 2, 4, 1, 1, 1 ,2, 3, 2, 1, 1, 6,2, 1];


const resultArray = [...new Set(nums)];

/* ----- */

const nums1 = [9, 2, 0, -10, 5];
const nums2 = [2, 8, 0, 5, 11];



// Вернуть "разницу" массивов - массив, состоящий из них обоих минус повторения

const unitedArray = [...new Set([...nums1, ...nums2])];


/* ---- */

[...categories.entries()]