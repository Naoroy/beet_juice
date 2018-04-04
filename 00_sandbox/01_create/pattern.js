const patternModule = (function () {
	'use strict';
	const Pattern = function (beats, bars) {
		const initPattern = (beats, bars) => {
			const pattern = [];
			for (let i = 0; i < this.bars; i += 1) {
				const bar = [];
				for (let i = 0; i < this.beats; i += 1) {
					bar.push(null);
				}
				pattern.push(bar);
			}
			return pattern;
		};
		this.beats = beats ? beats : 4;
		this.bars = bars ? bars : 4;
		this.bpm = 120;
	    this.section = initPattern(this.beats, this.bars);
	    this.insertIntoBeat = (bar, beat ,pitch) => {
			this.section[bar][beat] = this.section[bar][beat] === pitch ?
				null :
				pitch;
			// console.log(this.section[bar][beat]);
		};
		this.setBPM = (bpm) => { this.bpm = bpm; };
		this.resetBar = () => { this.section = initPattern(this.beats, this.bars); };
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
        ]
    };
	return {
		Pattern,
        metronome,
		bassline,
    };
}());
