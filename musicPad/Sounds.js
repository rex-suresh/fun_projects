const { EventEmitter } = require('events');

const drum = () => console.log('drum'); //{name:'drum', property: 'bass'}
const flute = () => console.log('flute');
const whistle = () => console.log('whistle');
const piano = () => console.log('piano');
const guitar = () => console.log('guitar');

const sounds = new EventEmitter();
sounds.on('drum', drum);
sounds.on('flute', flute);
sounds.on('whistle', whistle);
sounds.on('guitar', guitar);
sounds.on('piano', piano);

exports.sounds = sounds;
