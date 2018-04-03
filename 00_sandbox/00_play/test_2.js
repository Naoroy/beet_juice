const writerModule = (function () {
    'use strict';
	const audio = new (window.AudioContext || window.webkitAudioContext)();
	const gainNode = audio.createGain();
    const frameDelay = 140;
    gainNode.connect(audio.destination);
    gainNode.gain.value = 0.1; // 10 %
	const Instrument = function () {
		this.duration = .1;
		this.play = (pitch, when) => {
			if (!pitch) { return }
			if (this.oscillator) { this.oscillator.disconnect(); }
			if (typeof when !== 'number') { when = 0; }
			this.oscillator = audio.createOscillator();
			this.oscillator.frequency.value = 440;
			this.oscillator.detune.value = pitch * 100;
			this.oscillator.connect(gainNode);
			this.oscillator.start(audio.currentTime + when);
			this.oscillator.stop(audio.currentTime + when + this.duration);
		};
		this.setType = (type) => {};
		this.setDuration = (duration) => {};
	};
	const playBar = (pattern, x) => {
		if (x >= pattern.section.length) { return }
			console.log('bar', x + 1);
			const bps = (!pattern.bpm ? 120 : pattern.bpm) / 60;
			const delay = 1000 / bps;
			const instrument = new Instrument();
			let i = 0;
			if (x === 0) {
				instrument.play(pattern.section[x][i]);
				i += 1;
			}
			let m = window.setInterval(() => {
				instrument.play(pattern.section[x][i]);
				i += 1;
				if (i >= 4) { //end of bar
					window.clearInterval(m);
					window.setTimeout(playBar(pattern, x + 1), delay);
				}
			}, delay);

	};
	const btnInit = () => {
        const btnArray = document.querySelectorAll('button');
        btnArray.forEach((btn, i) => {
			const instrument = new Instrument();
			btn.onclick = () => {
				playBar(testPattern.metronome, 0);
				playBar(testPattern.bassline, 0);
				// playBar(testPattern.p, 0);
			}
            btn.textContent = i + 1;
        });
    }
    const init = () => {
        btnInit();
    };
    window.addEventListener('DOMContentLoaded', init);
}());
