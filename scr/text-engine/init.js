// global properties, assigned with let for easy overriding by the user
let disk;

// global values for character creation
let hairColor = 'dark';
let hairLength = 'short';
let hairFace = 'beard';
let eyeColor = 'blue';

// store user input history
let inputs = [''];
let inputsPos = 0;

// define list style
let bullet = '•';

//specific timer var for anns house
let annTimer;

// reference to the input element
let input = document.querySelector('#input');

// add any default values to the disk
let init = (disk) => {
  const initializedDisk = Object.assign({}, disk);
  initializedDisk.rooms = disk.rooms.map((room) => {
    room.visits = 0;
    return room;
  });

  if (!initializedDisk.inventory) {
    initializedDisk.inventory = [];
  }

  if (!initializedDisk.characters) {
    initializedDisk.characters = [];
  }

  initializedDisk.characters = initializedDisk.characters.map(char => {
    char.chatLog = [];
    return char;
  });

  return initializedDisk;
};

let quickResponse = (e) => {
  const ENTER = 13;

  if (e.keyCode === ENTER) {
    applyInput();
  }
};

let setup = () => {
  input.addEventListener('keypress', quickResponse);

  input.addEventListener('keydown', (e) => {
    input.focus();

    const UP = 38;
    const DOWN = 40;
    const TAB = 9;

    if (e.keyCode === UP) {
      navigateHistory('prev');
    } else if (e.keyCode === DOWN) {
      navigateHistory('next');
    } else if (e.keyCode === TAB) {
      e.stopPropagation();
      e.preventDefault();
      autocomplete();
    }
  });

  input.addEventListener('focusout', () => {
    input.focus({ preventScroll: true });
  });
};

let persistSave = (name, removeExisting = true) => {
  if (removeExisting && localStorage.getItem(name)) {
    localStorage.removeItem(name);
  }
  const payload = buildSavePayload(disk);
  localStorage.setItem(name, JSON.stringify(payload, saveJsonReplacer));
};

let save = (name = 'Amnesia Restored Save') => {
  persistSave(name);
  const slotIndex = parseInt(saveSlot, 10) - 1;
  if (slotIndex >= 0 && slotIndex < SAVE_SLOT_KEYS.length) {
    persistSave(SAVE_SLOT_KEYS[slotIndex]);
  }
  const line = name.length ? `Game saved as "${name}".` : `Game saved.`;
  println(line);
};

let autoSave = () => {
  const saveDate = new Date();
  const month = saveDate.getMonth() + 1;
  const saveFileTime = `Autosave: ${saveDate.getFullYear()}-${month}-${saveDate.getDate()} ${saveDate.getHours()}:${saveDate.getMinutes()}`;
  persistSave(saveFileTime, false);
};

let load = (name = 'Amnesia Restored Save') => {
  const save = localStorage.getItem(name);

  if (!save) {
    println(`Save file not found.`);
    return;
  }

  loadGameFromStorage(save);

  const line = name.length ? `Game "${name}" was loaded.` : `Game loaded.`;
  println(line);
  enterRoom(disk.roomId);
};

let loadDisk = (uninitializedDisk) => {
  disk = init(uninitializedDisk);
  enterRoom(disk.roomId);
  setup();
  input.focus();
};

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = loadDisk;
}

let internalSave = (saveStats = 'stats') => {
  saveLoadChar.shepEnd = theShep;
  saveLoadChar.monkEnd = emptEnli;
  saveLoadChar.clasEnd = the1986;
  saveLoadChar.texaEnd = deatTexa;
  saveLoadChar.pianEnd = painMan;
  saveLoadChar.dawdEnd = dawdHote;
  saveLoadChar.trueEnd = anAmn;
  saveLoadChar.zaneEnd = zaneShot;
  saveLoadChar.eterEnd = eterWith;
  saveLoadChar.she2End = shepTux;
  saveLoadChar.elephant = elepAchi;

  localStorage.setItem(saveStats, JSON.stringify(saveLoadChar));
};

let internalLoad = (statsToLoad = 'stats') => {
  const saveStats = localStorage.getItem(statsToLoad);

  if (!saveStats) {
    return;
  }

  const globalStats = JSON.parse(saveStats);

  theShep = globalStats.shepEnd;
  emptEnli = globalStats.monkEnd;
  the1986 = globalStats.clasEnd;
  deatTexa = globalStats.texaEnd;
  painMan = globalStats.pianEnd;
  dawdHote = globalStats.dawdEnd;
  anAmn = globalStats.trueEnd;
  zaneShot = globalStats.zaneEnd;
  eterWith = globalStats.eterEnd;
  shepTux = globalStats.she2End;
  elepAchi = globalStats.elephant;
};

let clearTemps = () => {
  // reserved for game-over temp flag resets
};

internalLoad();