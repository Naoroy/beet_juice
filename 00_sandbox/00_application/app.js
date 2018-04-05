const application = (function () {
	'use strict';

	let pattern;
	const toggleActiveNotes = (e) => {
		e.target.classList.toggle('active');
		const currentColumn = e.target.classList.item(0);
		const columnNotes = document.querySelectorAll('.' + currentColumn);
		columnNotes.forEach((note) => {
			if (note.classList.contains('active') && note !== e.target) {
				note.classList.remove('active');
			}
		});
	};
	const playNote (note) = {}
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
						editPattern(e.target);
						toggleActiveNotes(e);
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
	const editPattern = (element) => {
		const bar = element.attributes['data-bar'].value;
		const beat = element.attributes['data-beat'].value;
		const pitch = element.attributes['data-pitch'].value;
		pattern.insertIntoBeat(bar, beat, pitch);
		console.log(pattern.section);
	}
	const init = () => {
		pattern = new patternModule.Pattern();
		createPianoRoll();
		const playbtn = document.querySelector('.play');
		playbtn.onclick = () => {
			console.log(pattern);
			playerModule.playBar(pattern, 0);
		}
	};
	window.addEventListener('DOMContentLoaded', init);
}());
