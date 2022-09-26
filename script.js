var list = []
var cash = []
var debet = []

function updateCash() {
	let sumA = 0
	let sumB = 0
	for (e of document.getElementsByTagName('input')) {
		if (e.checked) {
			e.checked = false
			cash.push(parseInt(e.value))
			list.push(e.id)
		}
	}
	for (p of cash) {
		sumA += p		
	}
	document.getElementById('cash').innerHTML = sumA + 'руб.'
	for (p of debet) {
		sumB += p
	}
	document.getElementById('overall').innerHTML = sumA + sumB + 'руб.'
	callList()
}

function updateDebet() {
	let sumA = 0
	let sumB = 0
	for (e of document.getElementsByTagName('input')) {
		if (e.checked) {
			e.checked = false
			debet.push(parseInt(e.value))
			list.push(e.id)
		}
	}
	for (p of debet) {
		sumA += p		
	}
	document.getElementById('debet').innerHTML = sumA + 'руб.'
	for (p of cash) {
		sumB += p
	}
	document.getElementById('overall').innerHTML = sumA + sumB + 'руб.'
	callList()
}

function callList() {
	let str = ''
	for (e of list) {
		str += e + '<br>'
	}
	document.getElementById('sold').innerHTML = str
}