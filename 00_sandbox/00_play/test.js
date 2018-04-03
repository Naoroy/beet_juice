const writerModule = (function () {
    'use strict';

    const timeStamp = 140;
    const audio = new (window.AudioContext || window.webkitAudioContext)();
    const gainNode = audio.createGain();

    gainNode.connect(audio.destination);
    gainNode.gain.value = 0.1; // 10 %

    const Oscillator = function (pitch) {
        this.o = audio.createOscillator();
        this.o.connect(gainNode);
        this.o.frequency.value = 440;
        this.o.type = 'sine';
        if (pitch) { this.o.detune.value = pitch * 100; }
    }

    const SoundInit = function(pitch, duration) {
        this.osc = new Oscillator(pitch);
        this.play = () => {
            this.osc.o.start();
            this.osc.o.stop(audio.currentTime + duration);
			// this.osc.o.disconnect(gainNode);
            this.osc = new Oscillator(pitch);
        };
    };

    // const SoundInit = function(pitch, duration) {
    //     this.o = audio.createOscillator();
    //     this.o.connect(gainNode);
    //     this.o.frequency.value = 440;
    //     this.o.type = 'sawtooth';
    //     if (pitch) { this.o.detune.value = pitch * 100; }
    //
    //     this.play = () => {
    //         // this.osc.o.start();
    //         console.log(this.o);
    //         // this.osc.o.mute(audio.currentTime + duration);
    //     }
    // }

    const btnInit = () => {
        const btnArray = document.querySelectorAll('button');

        btnArray.forEach((btn, i) => {
            btn.textContent = i + 1;
            let inst = new SoundInit(i - 12, .8);
            btn.onclick = () => {
                inst.play();
            }
        });
    }

    const playPattern = (bar) => {
        let start = null;
        let progress;
        let i = 0;

        let step = (time) => {
            if (start === null) { start = time; }

            progress = time - start;

            if (progress < timeStamp) {
                requestAnimationFrame(step);
            }
            else if (progress > timeStamp) {
                let pitch = bar[i];
                console.log('beat: ' + i + ' tone: ' + pitch);
                if (pitch !== null) {
                    let inst = new SoundInit(pitch, .1);
                    inst.play();
                }
                i+=1;
                if (i < 4) {
                    start = null;
                    requestAnimationFrame(step);
                }
            }
        }
        let requestID = window.requestAnimationFrame(step);
    }

    const playSequence = (seq) => {
        let start = null;
        let progress;
        let i = 0;

        const step = (time) => {
            if (start === null) { start = time; }

            progress = time - start;
            if (progress < timeStamp * 4) {
                requestAnimationFrame(step);
            }
            else if (progress > timeStamp * 4) {
                playPattern(seq[i]);
                i+=1;
                if (i < 4) {
                    start = null;

                    requestAnimationFrame(step);
                }
            }
        }
        let requestID = window.requestAnimationFrame(step);
    };

    const flow = (pattern) => {

        let start = null;
        let progress;
        let i = 0;

        const step = (time) => {
            if (start === null) {
                start = time;
                // playSequence(testPattern.pattern.section)
            }
            progress = time - start;
            if (progress < (timeStamp * 4) * 4) { requestAnimationFrame(step);
            } else if (progress > timeStamp * 4) {
                playSequence(pattern[i]);
                i+=1;
                if (i < 4) {
                    start = null;
                    requestAnimationFrame(step);
                }
            }
        }
        let requestID = window.requestAnimationFrame(step);
    }

    const init = () => {
        btnInit();
        // playSequence(testPattern.pattern.section)
        flow(testPattern.metronome.sections);
        // flow(testPattern.testChord.sections);
        // flow(testPattern.bassline.sections);
    };

    window.addEventListener('DOMContentLoaded', init);

}());
