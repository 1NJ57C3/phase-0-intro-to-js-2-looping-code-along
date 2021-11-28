const gifts = ["teddy bear", "drone", "doll"];

// const wrapGift = gift => console.log(`Wrapped ${gift} and added a bow!`);

// // for (let age = 30; age < 40; age++) {
// //     console.log(`I'm ${age} years old. Happy birthday to me!`);
// //     debugger;
// // }

// const wrapGifts = gifts => {
//     for (let i = 0; i < gifts.length; i++) {
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
//         debugger;
//     }
//     return gifts;
// }

// wrapGifts(gifts);

const writeCards = (array, event) => {
    const cards = [];
    for (let i = 0 ; i < array.length ; i++) {
        cards.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`);
    }
    return cards;
}

const countDown = number => {
    // let i = number;
    // while (i >= 0) {
    //     console.log(i);
    //     i--;
    // }
    while (number >= 0) {
        console.log(number);
        number--;
    }
}