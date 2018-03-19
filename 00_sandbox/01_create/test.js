const testPattern = (function () {

    const Pattern = function (beats, bars) {
        this.beats = beats ? beats : 4;
        this.bars = bars ? bars : 4;

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

        this.section = initPattern(this.beats, this.bars);

        this.insertIntoBeat = (bar ,beat , pitch) => {
            this.section[bar][beat] = pitch;
        };

        this.resetBar = () => {};
    }

    // const pattern = new Pattern(4, 4);

    /*pattern.section.forEach((bar, i) => {
        pattern.insertIntoBeat(i, 0, 0);
        pattern.insertIntoBeat(i, 2, 5);
        pattern.insertIntoBeat(i, 3, -8);
    });*/

    const testSeq = {

        sections: [
            [
                [-11, null, -8, -11],
                [11, 1, null, 8],
                [-11, null, -8, -11],
                [11, 1, null, 8]
            ],
            [
                [-11, null, -8, -11],
                [11, 1, null, 8],
                [-11, null, -8, -11],
                [11, 1, null, 8]
            ],
            [
                [-11, null, -8, -11],
                [11, 1, null, 8],
                [-11, null, -8, -11],
                [11, 1, null, 8]
            ],
            [
                [-11, null, -8, -11],
                [11, 1, null, 8],
                [-11, null, -8, -11],
                [11, 1, null, 8]
            ]
        ]
    };

    const bassline = {

        sections: [
            [
                [-11, null, -11, null],
                [null, null, null, null],
                [-11, null, -11, null],
                [null, null, null, null]
            ],
            [
                [-13, null, -13, null],
                [null, null, null, null],
                [-13, null, -13, null],
                [null, null, null, null]
            ],
            [
                [-14, null, -14, null],
                [null, null, null, null],
                [-14, null, -14, null],
                [null, null, null, null]
            ],
            [
                [-18, null, -18, null],
                [null, null, null, null],
                [-18, null, -18, null],
                [null, null, null, null]
            ],

        ]
    };

    const testChord = {

        sections: [
            [
                [-8, null, -4, -8],
                [8, 1, null, 4],
                [-8, null, -4, -8],
                [8, 1, null, 4]
            ],
            [
                [-8, null, -4, -8],
                [8, 1, null, 4],
                [-8, null, -4, -8],
                [8, 1, null, 4]
            ],
            [
                [-8, null, -4, -8],
                [8, 1, null, 4],
                [-8, null, -4, -8],
                [8, 1, null, 4]
            ],
            [
                [-8, null, -4, -8],
                [8, 1, null, 4],
                [-8, null, -4, -8],
                [8, 1, null, 4]
            ]
        ]
    }
    return {
        testSeq,
        testChord,
        bassline
    };
}());
