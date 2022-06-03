const { sounds } = require('./Sounds.js');

const musicBpms = {
  music: 110,
  drum: 30,
  guitar: 20,
  piano: 30,
  whistle: 10
};

const bpmToMs = (BPM) => 1000 / (BPM / 60);

const setSound = (instrument, bpm) => setTimeout(() => {
  sounds.emit(instrument);
}, bpmToMs(bpm));

const generateMusic = ( BPMs, duration) => {
  const { music, ...instrumentBpms } = BPMs;
  const musicBpm = bpmToMs(music);
  let playDuration = 0;
  
  const playId = setInterval(() => {
    for (const instrument in instrumentBpms) {
      setSound(instrument, instrumentBpms[instrument]);
    }
    
    if (playDuration / 1000 >= duration) {
      clearInterval(playId);
      return;
    }
    playDuration += musicBpm;
  }, musicBpm);
};

generateMusic(musicBpms, 10);
