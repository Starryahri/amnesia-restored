let time = new Date('May 4, 1986 09:05:00')
let playFat = 100;
let playHung = 100;
let playMon = 0.00;
let detScore = 0;
let charScore = 0;
let survScore = 0;
let totalScore = (detScore + charScore + survScore);
let moveCount = 0;
let playCoord = [];

const player ={

    id: 'playChar',
    clothes: [],
    fatigue: playFat,
    hunger: playHung,
    money: playMon,
    dScore: detScore,
    cScore: charScore,
    sScore: survScore,
    tScore: totalScore,
    moves: moveCount,
    pCorrds: playCoord,
    inventory: initializedDisk.inventory,

}