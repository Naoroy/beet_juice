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
    
    const pattern = new Pattern(4, 4);

    pattern.section.forEach((bar, i) => {
        pattern.insertIntoBeat(i, 0, 0);
        pattern.insertIntoBeat(i, 2, 0);
        pattern.insertIntoBeat(i, 3, 0);
    });

    return {
        pattern
    };
}());
