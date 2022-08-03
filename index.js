function shout(string) {
    return string.toUpperCase();
}
function whisper(string) {
    return string.toLowerCase();
}
function logShout(string) {
    // return string.toUpperCase();
    console.log(string.toUpperCase());
}
function logWhisper(string) {
    // return string.toUpperCase();
    console.log(string.toLowerCase());
}
// const string = [`I can't hear you!` , `YES INDEED!` , `I would love to!` ]

function sayHiToHeadphonedRoommate(string) {
    if (string.toLowerCase() === string) {
        return `I can't hear you!`;
    } else if (string.toUpperCase() === string) {
        return `YES INDEED!`
    } else if (`Let's have dinner together!` === string) {
        return `I would love to!`
    }

} 
// string === string.toUpperCase();
// function sayHiToHeadphonedRoommate(string) {
//     return `YES INDEED! === I can't hear you!`;
// }