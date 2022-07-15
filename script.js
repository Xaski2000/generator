const ABC = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
symbol = ["!", "@", "#", "$", "%", "^", "&", "*", ".", ","]


const input = document.querySelector('#input'),
		range = document.querySelector('#range'),
		rangeIndex = document.querySelector('.range__index'),
		gen = document.querySelector('#gen__but'),
		copy = document.querySelector('#copy__but'),
		ABCBox = document.querySelector('#ABC__box'),
		abcBox = document.querySelector('#abc__box'),
		symbolBox = document.querySelector('#symbol__box');

let rangeNum = '10';

function generate(e) {
	let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
	if (ABCBox.checked){
		arr = arr.concat(ABC)
	} if (abcBox.checked){
		arr = arr.concat(abc)
	} if (symbolBox.checked){
		arr = arr.concat(symbol)
	}
	let a = [];
	for(let i = 1; i <= e; i++) {
		a[i] = arr[Math.floor(Math.random() * arr.length)];
	}
	input.value = a.join('');
}

range.addEventListener('input', e => {
	rangeNum = e.target.value;
	rangeIndex.innerText = e.target.value;
	generate(rangeNum);
})

ABCBox.addEventListener('input', e => {
	generate(rangeNum);
})
abcBox.addEventListener('input', e => {
	generate(rangeNum);
})
symbolBox.addEventListener('input', e => {
	generate(rangeNum);
})
gen.addEventListener('click', e => {
	generate(rangeNum);
})
copy.addEventListener('click', e => {
	navigator.clipboard.writeText(input.value).then(function() {
		/* clipboard successfully set */
	 }, function() {
		/* clipboard write failed */
	 });

	 document.querySelector('.bubble').classList.add('bubble__active');
	 setTimeout(bubbleHide, 3000);
})

function bubbleHide() {
	document.querySelector('.bubble').classList.remove('bubble__active');
}

generate(rangeNum);
