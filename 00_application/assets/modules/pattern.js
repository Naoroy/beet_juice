const patternModule = (function patternModule() {
  const initSection = (beats, bars) => {
    if (typeof beats !== 'number' || typeof bars !== 'number') {
      return;
    }
    // const pattern = [];
    for (let i = 0; i < this.bars; i += 1) {
      const bar = [];
      for (let j = 0; j < this.beats; j += 1) {
        bar.push(null);
      }
      this.section.push(bar);
    }
    // return pattern;
  };
  const Pattern = function Pattern(option) {
    this.section = [];
    this.beats = option && option.beats ? option.beats : 4;
    this.bars = option && option.bars ? option.bars : 4;
    this.bpm = option && option.bpm ? option.bpm : 120;
    initSection(this.beats, this.bars);
    this.insertNote = (bar, beat, pitch) => {
      if (typeof bar !== 'number' ||
        typeof beat !== 'number' ||
        typeof pitch !== 'number') {
        // console.log('type not ok');
        return;
      }
      // console.log('type ok');
      this.section[bar][beat] = this.section[bar][beat] === pitch ?
        null :
        pitch;
    };
    this.setBPM = (bpm) => {
      if (typeof bpm !== 'number') {
        return
      }
      this.bpm = bpm;
    };
    this.resetSection = () => {
      this.section = initSection(this.beats, this.bars)
    };
  };

  // ===========test data===========

  const bassline = {
    bpm: 180,
    section: [
      [-16, null, -16, null],
      [null, null, -21, null],
      [-16, null, -16, null],
      [null, null, -21, null],
      [-16, null, -16, null],
      [null, null, -21, null],
      [-16, null, -16, null],
      [null, null, -21, null],
      [-16, null, -16, null],
      [null, null, -21, null],
      [-16, null, -16, null],
      [null, null, -21, null],
      [-16, null, -16, null],
      [null, null, -21, null],
      [-16, null, -16, null],
      [null, null, -21, null],

    ]
  };
  const metronome = {
    bpm: 180,
    section: [
      [8, 8, 8, 8],
      [7, 7, 7, 7],
      [6, 6, 6, 6],
      [5, 5, 5, 5],
      [8, 8, 8, 8],
      [7, 7, 7, 7],
      [6, 6, 6, 6],
      [5, 5, 5, 5],
      [8, 8, 8, 8],
      [7, 7, 7, 7],
      [6, 6, 6, 6],
      [5, 5, 5, 5],
      [8, 8, 8, 8],
      [7, 7, 7, 7],
      [6, 6, 6, 6],
      [5, 5, 5, 5],
    ],
  };
  return {
    Pattern,
    bassline,
    metronome,
  };
}());
