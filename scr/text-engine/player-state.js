const SAVE_FORMAT_VERSION = 2;
const SAVE_SLOT_KEYS = [
  'Amnesia Save Slot 1',
  'Amnesia Save Slot 2',
  'Amnesia Save Slot 3',
];

const looksLikeFunctionString = (value) => {
  if (typeof value !== 'string') {
    return false;
  }
  const trimmed = value.trim();
  if (trimmed.startsWith('function') || trimmed.startsWith('async function')) {
    return true;
  }
  if (!trimmed.includes('=>')) {
    return false;
  }
  return trimmed.startsWith('(') || /^[A-Za-z_$][\w$]*\s*=>/.test(trimmed);
};

const saveJsonReplacer = (key, value) =>
  typeof value === 'function' ? value.toString() : value;

const saveJsonReviver = (key, value) => {
  if (!looksLikeFunctionString(value)) {
    return value;
  }
  try {
    return (0, eval)(`(${value})`);
  } catch (error) {
    return value;
  }
};

let isEmptyRoomDesc = (room) => !room || room.desc == null || room.desc === '';

let escapeHtml = (text) => String(text)
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;');

let removeClothingFromSlot = (slot, itemId) => {
  if (!Array.isArray(slot)) {
    return;
  }
  const idx = slot.indexOf(itemId);
  if (idx !== -1) {
    slot.splice(idx, 1);
  }
};

let randomDollars = (minCents, maxCents) =>
  (Math.floor(Math.random() * (maxCents - minCents + 1)) + minCents) / 100;

let collectPlayerState = () => ({
  hairColor,
  hairLength,
  hairFace,
  eyeColor,
  saveSlot,
  turnMapOn,
  earlyLeave,
  tipBellboy,
  isNaked,
  nightmare,
  safeDeposit,
  readApple,
  readC64,
  readIBM,
  sketches,
  roomNumber,
  metBette,
  betteActions,
  zRandomEncounter,
  betteCounter,
  bettesHome,
  dakotaEntered,
  playFat,
  playHung,
  prevHung,
  prevFat,
  playMon,
  detScore,
  charScore,
  survScore,
  moveCount,
  orderTotal,
  energyTotal,
  playCoord,
  playCloth,
  firstDial,
  tenementSpawned,
  xMinutes,
  yHours,
  zDays,
  qMeridiem,
  caughtCoords1,
  caughtCoords2,
  policeCaughtBegging,
  policeCaughtWashing,
  difficulty,
  encounterStreetNumber,
  encounterStreetName,
  encounterAnswer,
  xStreetC,
  xStreetD,
  firstEncounter,
  wackyEncounter,
  gottenRag,
  hungBelow40,
  hungBelow30,
  hungBelow20,
  hungBelow10,
  fatBelow40,
  fatBelow30,
  fatBelow20,
  fatBelow10,
  degradation,
  emptEnli,
  theShep,
  the1986,
  deatTexa,
  painMan,
  dawdHote,
  anAmn,
  zaneShot,
  eterWith,
  shepTux,
  elepAchi,
  styling: typeof styling !== 'undefined' ? styling : 'restored',
  difficultyChoice: typeof difficultyChoice !== 'undefined' ? difficultyChoice : 'modern',
  f_firstphonecall,
  prevInput,
  inputs,
  inputsPos,
});

let applyPlayerState = (state) => {
  if (!state || typeof state !== 'object') {
    return;
  }

  hairColor = state.hairColor ?? hairColor;
  hairLength = state.hairLength ?? hairLength;
  hairFace = state.hairFace ?? hairFace;
  eyeColor = state.eyeColor ?? eyeColor;
  saveSlot = state.saveSlot ?? saveSlot;
  turnMapOn = state.turnMapOn ?? turnMapOn;
  earlyLeave = state.earlyLeave ?? earlyLeave;
  tipBellboy = state.tipBellboy ?? tipBellboy;
  isNaked = state.isNaked ?? isNaked;
  if (state.nightmare) {
    nightmare = state.nightmare;
  }
  safeDeposit = state.safeDeposit ?? safeDeposit;
  readApple = state.readApple ?? readApple;
  readC64 = state.readC64 ?? readC64;
  readIBM = state.readIBM ?? readIBM;
  sketches = state.sketches ?? sketches;
  roomNumber = state.roomNumber ?? roomNumber;
  metBette = state.metBette ?? metBette;
  betteActions = state.betteActions ?? betteActions;
  zRandomEncounter = state.zRandomEncounter ?? zRandomEncounter;
  betteCounter = state.betteCounter ?? betteCounter;
  bettesHome = state.bettesHome ?? bettesHome;
  dakotaEntered = state.dakotaEntered ?? dakotaEntered;
  playFat = state.playFat ?? playFat;
  playHung = state.playHung ?? playHung;
  prevHung = state.prevHung ?? prevHung;
  prevFat = state.prevFat ?? prevFat;
  playMon = state.playMon ?? playMon;
  detScore = state.detScore ?? detScore;
  charScore = state.charScore ?? charScore;
  survScore = state.survScore ?? survScore;
  moveCount = state.moveCount ?? moveCount;
  orderTotal = state.orderTotal ?? orderTotal;
  energyTotal = state.energyTotal ?? energyTotal;
  playCoord = state.playCoord ?? playCoord;
  playCloth = state.playCloth ?? playCloth;
  firstDial = state.firstDial ?? firstDial;
  tenementSpawned = state.tenementSpawned ?? tenementSpawned;
  xMinutes = state.xMinutes ?? xMinutes;
  yHours = state.yHours ?? yHours;
  zDays = state.zDays ?? zDays;
  qMeridiem = state.qMeridiem ?? qMeridiem;
  if ('caughtCoords1' in state) {
    caughtCoords1 = state.caughtCoords1;
  }
  if ('caughtCoords2' in state) {
    caughtCoords2 = state.caughtCoords2;
  }
  policeCaughtBegging = state.policeCaughtBegging ?? policeCaughtBegging;
  policeCaughtWashing = state.policeCaughtWashing ?? policeCaughtWashing;
  difficulty = state.difficulty ?? difficulty;
  if ('encounterStreetNumber' in state) {
    encounterStreetNumber = state.encounterStreetNumber;
  }
  if ('encounterStreetName' in state) {
    encounterStreetName = state.encounterStreetName;
  }
  if ('encounterAnswer' in state) {
    encounterAnswer = state.encounterAnswer;
  }
  if ('xStreetC' in state) {
    xStreetC = state.xStreetC;
  }
  if ('xStreetD' in state) {
    xStreetD = state.xStreetD;
  }
  firstEncounter = state.firstEncounter ?? firstEncounter;
  wackyEncounter = state.wackyEncounter ?? wackyEncounter;
  gottenRag = state.gottenRag ?? gottenRag;
  hungBelow40 = state.hungBelow40 ?? hungBelow40;
  hungBelow30 = state.hungBelow30 ?? hungBelow30;
  hungBelow20 = state.hungBelow20 ?? hungBelow20;
  hungBelow10 = state.hungBelow10 ?? hungBelow10;
  fatBelow40 = state.fatBelow40 ?? fatBelow40;
  fatBelow30 = state.fatBelow30 ?? fatBelow30;
  fatBelow20 = state.fatBelow20 ?? fatBelow20;
  fatBelow10 = state.fatBelow10 ?? fatBelow10;
  degradation = state.degradation ?? degradation;
  emptEnli = state.emptEnli ?? emptEnli;
  theShep = state.theShep ?? theShep;
  the1986 = state.the1986 ?? the1986;
  deatTexa = state.deatTexa ?? deatTexa;
  painMan = state.painMan ?? painMan;
  dawdHote = state.dawdHote ?? dawdHote;
  anAmn = state.anAmn ?? anAmn;
  zaneShot = state.zaneShot ?? zaneShot;
  eterWith = state.eterWith ?? eterWith;
  shepTux = state.shepTux ?? shepTux;
  elepAchi = state.elepAchi ?? elepAchi;
  f_firstphonecall = state.f_firstphonecall ?? f_firstphonecall;
  prevInput = state.prevInput ?? prevInput;
  if (Array.isArray(state.inputs)) {
    inputs = state.inputs;
  }
  inputsPos = state.inputsPos ?? inputsPos;

  if (state.styling && typeof styling !== 'undefined') {
    styling = state.styling;
  }
  if (state.difficultyChoice && typeof difficultyChoice !== 'undefined') {
    difficultyChoice = state.difficultyChoice;
  }

  totalScore = detScore + charScore + survScore;

  if (typeof updateMon === 'function') {
    updateMon();
  }
  if (typeof updateHung === 'function') {
    updateHung(playHung);
  }
  if (typeof updateFat === 'function') {
    updateFat(playFat);
  }
  if (typeof updateScore === 'function') {
    updateScore();
  }
  if (typeof updateEndings === 'function') {
    updateEndings();
  }

  if (typeof internalSave === 'function') {
    internalSave();
  }
};

let buildSavePayload = (diskSnapshot) => ({
  version: SAVE_FORMAT_VERSION,
  disk: diskSnapshot,
  playerState: collectPlayerState(),
});

let parseStoredSave = (rawJson) => {
  const parsed = JSON.parse(rawJson, saveJsonReviver);
  if (parsed && parsed.version === SAVE_FORMAT_VERSION && parsed.disk) {
    return parsed;
  }
  return { version: 1, disk: parsed, playerState: null };
};

let loadGameFromStorage = (rawJson) => {
  if (!rawJson) {
    return null;
  }
  const { disk: savedDisk, playerState } = parseStoredSave(rawJson);
  disk = savedDisk;
  if (playerState) {
    applyPlayerState(playerState);
  }
  return disk;
};
