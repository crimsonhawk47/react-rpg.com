const tiles = [
  [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5],
  [6, 6, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 5],
  [6, 6, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5],
  [6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5],
  [6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5],
  [6, 6, 6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5],
  [6, 6, 6, 6, 6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5],
  [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5],
  [6, 6, 6, 6, 6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5],
  [6, 6, 6, 6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5],
  [6, 6, 6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5],
  [6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5],
  [6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
  [6, 6, 6, 6, 0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
  [6, 6, 6, 6, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
];

const monsters = [
  {
    type: 'goblin',
    position: [ 400, 320 ]
  },
  {
    type: 'goblin',
    position: [ 480, 360 ]
  },
  {
    type: 'stone-golem',
    position: [ 440, 240 ]
  }
];

export default {
  tiles,
  monsters
};
