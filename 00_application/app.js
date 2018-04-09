const application = (function () {
	'use strict';

	let pattern;
	const editSong = (element) => {
		console.log(element);
		const bar = Number(element.attributes['data-bar'].value);
		const beat = Number(element.attributes['data-beat'].value);
		const pitch = Number(element.attributes['data-pitch'].value);
		console.log(typeof bar,typeof  beat,typeof  pitch);
		pattern.insertNote(bar, beat, pitch);
		console.log(pattern.section[bar]);
	};
	const toggleActiveNotes = (element) => {
		element.classList.toggle('active');
		const currentColumn = element.classList.item(0);
		const columnNotes = document.querySelectorAll('.' + currentColumn);
		columnNotes.forEach((note) => {
			if (note.classList.contains('active') && note !== element) {
				note.classList.remove('active');
			}
		});
	};
	const playNote = (element) => {
		console.log(element);
	};
	const createPianoRoll = () => {
		let td;
		let tr;
		const notes = [
			'La',
			'Si',
			'Do',
			'Re',
			'Mi',
			'Fa',
			'Sol',
		];
		const main = document.querySelector('#app');
		const pianoRoll = document.createElement('table');
		notes.forEach((note, pitch) => {
			tr = document.createElement('tr');
			let i = 0;
			pattern.section.forEach((bar, k) => {
				bar.forEach((beat, j) => {
					td = document.createElement('td');
					td.textContent = note;
					td.setAttribute('data-pitch', pitch);
					td.setAttribute('data-bar', k);
					td.setAttribute('data-beat', j);
					td.classList.add('index_' + (i + 1));
					td.onclick = (e) => {
						editSong(e.target);
						toggleActiveNotes(e.target);
						// playNote(e.target);
					};
					tr.appendChild(td);
					i += 1;
				});
			});
			pianoRoll.appendChild(tr);
		});
		pianoRoll.classList.add('piano-roll');
		main.appendChild(pianoRoll);
	};
	const init = () => {
		pattern = new patternModule.Pattern();
		createPianoRoll();
		const startBtn = document.querySelector('.play');
		startBtn.onclick = () => {
			playerModule.playSong(pattern, 0)

		};
		// console.log(playerModule.Instrument);
	};
	window.addEventListener('DOMContentLoaded', init);
}());
