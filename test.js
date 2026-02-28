function sorte(userBet) {
    const numSort = Math.floor(Math.random()*100)+1;
    console.log(numSort);

    if (numSort <= 50) {
        return `${userBet * 0}`
    } else if (numSort <= 80) {
        return userBet
    } else if (numSort <= 95) {
        return userBet * 1.5
    } else if (numSort <= 99) {
        return userBet * 2
    } else {
        return userBet * 10
    }
}

console.log(sorte(1));


