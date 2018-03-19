const writerModule = (function () {
    'use strict';

    const audio = new (window.AudioContext || window.webkitAudioContext)();
    const gainNode = audio.createGain();
    gainNode.connect(audio.destination);
    gainNode.gain.value = 0.1; // 10 %

    const Oscillator = function (pitch) {
        this.o = audio.createOscillator();
        this.o.connect(gainNode);
        this.o.frequency.value = 440;
        this.o.type = 'sawtooth';
        if (pitch) { this.o.detune.value = pitch * 100; }
    }

    const SoundInit = function(pitch, duration) {
        this.osc = new Oscillator(pitch);
        this.play = () => {
            this.osc.o.start();
            this.osc.o.stop(audio.currentTime + duration);
            // this.osc.o.ended = () => {
            //     this.osc.o.disconnect(gainNode);
            // };
            this.osc = new Oscillator(pitch);
        };
    };

    const btnInit = () => {
        const click = new MouseEvent('click', {
            'view': window,
            'bubbles': true,
            'cancelable': true
        });
        const btnArray = document.querySelectorAll('button');
        btnArray.forEach((btn, i) => {
            btn.textContent = i + 1;
            let inst = new SoundInit(i - 12, .8);
            btn.onclick = () => {
                inst.play();
            }
        });
    }

    const playPattern = () => {
        testPattern.pattern.section.forEach((bar) => {
            
        });
    }

    const init = () => {
        btnInit();
        playPattern()
    }

    window.addEventListener('DOMContentLoaded', init);

}());
