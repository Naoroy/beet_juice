const testPattern = (function () {
	'use strict';
	const Pattern = function (beats, bars) {
		const initPattern = (beats, bars) => {
			const pattern = [];
			for (let i = 0; i < this.bars; i += 1) {
				let bar = [];
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
	    this.insertIntoBeat = (bar ,beat , note) => {
			this.section[bar][beat] = note;
		};
		this.setBPM = (bpm) => {
			console.log(bpm, this);
			this.bpm = bpm;
		};
		this.resetBar = () => {};
	};
    // const p = new Pattern();
    // p.section.forEach((bar, i) => {
	// 	p.setBPM(180);
    //     p.insertIntoBeat(i, 0, 0);
    //     p.insertIntoBeat(i, 2, 5);
    //     p.insertIntoBeat(i, 3, -8);
    // });
	// console.log(p);

	// ===========test data===========

    // const testSeq = {
	//
    //     sections: [
    //         [
    //             [-11, null, -8, -11],
    //             [11, 1, null, 8],
    //             [-11, null, -8, -11],
    //             [11, 1, null, 8]
    //         ],
    //         [
    //             [-11, null, -8, -11],
    //             [11, 1, null, 8],
    //             [-11, null, -8, -11],
    //             [11, 1, null, 8]
    //         ],
    //         [
    //             [-11, null, -8, -11],
    //             [11, 1, null, 8],
    //             [-11, null, -8, -11],
    //             [11, 1, null, 8]
    //         ],
    //         [
    //             [-11, null, -8, -11],
    //             [11, 1, null, 8],
    //             [-11, null, -8, -11],
    //             [11, 1, null, 8]
    //         ]
    //     ]
    // };
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
        metronome,
		bassline,
    };
}());
