/** Minimal game disk for engine tests (no story content). */
const minimalTestDisk = {
  roomId: 'test-room',
  currPos: [10, 10],
  inventory: [
    {
      name: ['readable note', 'note'],
      itemId: 'test-note',
      passage: 'The note says: testing works.',
      isHidden: false,
      isTakeable: true,
    },
  ],
  characters: [],
  rooms: [
    {
      id: 'test-room',
      name: 'Test Room',
      desc: 'A bare room for automated tests.',
      coord: [10, 10],
      items: [
        {
          name: ['desk pamphlet', 'pamphlet'],
          itemId: 'test-pamphlet',
          passage: 'Pamphlet text on the desk.',
          isHidden: false,
          isTakeable: false,
        },
      ],
      exits: [],
    },
  ],
};
