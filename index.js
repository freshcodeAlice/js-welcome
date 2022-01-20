class Friend {
    constructor(amount, friends = []){
        this.amount = amount;
        this.friends = friends;
    }

    getSum() {

        if(this.friends.length) {
            return this.friends.reduce(
                (result, friend)=>{
                    return result + friend.getSum();
                },
                this.amount);
        }
        return this.amount;
    }
}

const myFriend = new Friend(10);
const myFriend2 = new Friend(20, [new Friend(5)]);
const me = new Friend(5, [myFriend, myFriend2]);


me.getSum();
