'use strict';


function truncat(string, maxLength) {

    if(string.length > maxLength) {
        return string.substring(0, maxLength) + '...';
    }

    return string;
}