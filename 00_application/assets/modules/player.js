const playerModule = (function playerModule() {
  const audio = new (window.AudioContext || window.webkitAudioContext)();
  const gainNode = audio.createGain();
  gainNode.connect(audio.destination);
  gainNode.gain.value = 0.3; // 10 %

  const Instrument = function Instrument() {
    this.duration = 0.5;
    // this.setType = (type) => {};
    this.play = (pitch, when) => {
      if (!pitch && pitch !== 0) { return; }
      // if (this.oscillator) {
      //   setTimeout(() => {
      //     this.oscillator.disconnect()
      //   }, audio.currentTime + when + this.duration);
      // }
      // if (typeof when !== 'number') {
      //   when = 0;
      // }
      this.oscillator = audio.createOscillator();
      this.oscillator.frequency.value = 440;
      this.oscillator.detune.value = pitch * 100;
      this.oscillator.connect(gainNode);
      this.oscillator.start(audio.currentTime + when);
      this.oscillator.stop(audio.currentTime + when + this.duration);
    };
    this.setDuration = (duration) => {
      this.duration = duration;
    };
  };
  const playSong = (pattern, x) => {
    if (x >= pattern.section.length) { return; }
    // console.log('bar', x + 1);
    const bps = pattern.bpm / 60;
    const delay = 1000 / bps;
    const instrument = new Instrument();
    let i = 0;
    if (x === 0) {
      instrument.play(pattern.section[x][i]);
      i += 1;
    }
    const interval = window.setInterval(() => {
      instrument.play(pattern.section[x][i]);
      i += 1;
      if (i >= 4) { // end of bar
        window.clearInterval(interval);
        window.setTimeout(playSong(pattern, x + 1), delay);
      }
    }, delay);
  };
  const playJSON = () => {
    const instrument = new Instrument();
    const getData = (method, url) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method, url);
      xhr.onload = (e) => {
        const file = JSON.parse(e.target.response);
        // console.log(instrument);
        file.tracks.forEach((data) => {
          data.notes.forEach((note) => {
            instrument.setDuration(note.duration);
            instrument.play(note.midi - 69, note.time);

            // console.log(note.name);
            // console.log(note.midi - 69);
            // console.log(note.duration);
          });
        });
      };
      xhr.send();
    };
    getData('GET', './assets/star_wars.json');
  };
  return {
    playSong,
    playJSON,
    Instrument,
  };
}());
