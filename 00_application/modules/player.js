const playerModule = (function () {
    'use strict';

	const audio = new (window.AudioContext || window.webkitAudioContext)();
	const gainNode = audio.createGain();
    gainNode.connect(audio.destination);
    gainNode.gain.value = 0.3; // 10 %

	const Instrument = function () {
		this.duration = .5;
		this.play = (pitch, when) => {
			if (!pitch && pitch !== 0) { return }
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
	const playSong = (pattern, x) => {
		if (x >= pattern.section.length) { return }
		// console.log('bar', x + 1);
		const bps = pattern.bpm / 60;
		const delay = 1000 / bps;
		const instrument = new Instrument();
		let i = 0;
		if (x === 0) {
			instrument.play(pattern.section[x][i]);
			i += 1;
		}
		let interval = window.setInterval(() => {
			instrument.play(pattern.section[x][i]);
			i += 1;
			if (i >= 4) { //end of bar
				window.clearInterval(interval);
				window.setTimeout(playSong(pattern, x + 1), delay);
			}
		}, delay);
	};
	/*
	// ================
	// probably useless, delete that
	const btnInit = () => {
        const btnArray = document.querySelectorAll('button');
        btnArray.forEach((btn, i) => {
			const instrument = new Instrument();
			btn.onclick = () => {
				console.log(i);
				instrument.play(i);
			}
            btn.textContent = i + 1;
        });
    }
	//=================
    const init = () => {
        // btnInit();
		// playSong(patternModule.metronome, 0);
		// playSong(patternModule.bassline, 0);
    };
    window.addEventListener('DOMContentLoaded', init);
	*/
	return {
		playSong,
		Instrument
	}
}());
