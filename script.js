var list = []
var cash = []
var debet = []
var ids = []
var id = 1

function updateCash() {
	let sale = document.getElementById('sale-amount')
	let sumA = 0
	let sumB = 0
	for (e of document.getElementsByTagName('input')) {
		if (e.checked && (e.name != 'sale')) {
			e.checked = false
			cash.push(Math.round((sale) ? parseInt(e.value) * (1 - sale.value / 100) : parseInt(e.value)))
			list.push(id + ') ' + e.id + ' ' + e.value + 'Н')
			id++
		}
	}
	for (p of cash) {
		sumA += p		
	}
	document.getElementById('cash').innerHTML = sumA + '₽'
	for (p of debet) {
		sumB += p
	}
	document.getElementById('overall').innerHTML = sumA + sumB + '₽'
	sale.value = null
	callList()
}

function updateDebet() {
	let sale = document.getElementById('sale-amount')
	let sumA = 0
	let sumB = 0
	for (e of document.getElementsByTagName('input')) {
		if (e.checked && (e.name != 'sale')) {
			e.checked = false
			debet.push(Math.round((sale) ? parseInt(e.value) * (1 - sale.value / 100) : parseInt(e.value)))
			list.push(id + ') ' + e.id + ' ' + e.value + 'Б')
			id++
		}
	}
	for (p of debet) {
		sumA += p		
	}
	document.getElementById('debet').innerHTML = sumA + '₽'
	for (p of cash) {
		sumB += p
	}
	document.getElementById('overall').innerHTML = sumA + sumB + '₽'
	sale.value = null
	callList()
}

function callList() {
	let str = ''
	for (e of list) {
		str += e + '<br>'
	}
	document.getElementById('sold').innerHTML = str
}