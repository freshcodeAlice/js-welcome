'use strict';

function logItem(item, index) {
        console.log(`${this.title} - ${index+1}: ${item}`);
}


const newsPaper = {
    title: 'Our NewsPaper',
    articles:['Heading 1', 'Article 2', 'Super News 3'],
   
    showArticles: function showArticles() {
        this.articles.forEach((item, index) => {
            console.log(`${this.title} - ${index+1}: ${item}`);
    });
    }

/*    showArticles: function showArticles() { // forEach native options
    this.articles.forEach(logItem, this);
} */

/*    showArticles: function showArticles() { // forEach native options
    this.articles.forEach(logItem.bind(this));
} */


}

newsPaper.showArticles();