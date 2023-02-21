let dataLength = 0;

async function getData() {
	try {
		let response = await fetch('http://localhost:3001/rooms')
		let data = await response.json()
		console.log(data)
		cardDataOutput(data)
	} 
	catch (err) {
		console.log(err);
		// roomsCarts.innerHTML = `<h3>No rooms found</h3>`
	}
}
getData() 

cardDataOutput = (data) => {
	getLength(data)
	if(data.length === 0) {
		roomsCarts.innerHTML = `<h3>No rooms found</h3>`
		leftButton.style.display = "none"
		rightButton.style.display = "none"
	}
	else{
		for (let key in data) {
			track.innerHTML += `
				<div class="room-cart">
					<img src="${data[key].image}" alt="">
					<div class="cart-text">
						<h4>${data[key].name}</h4>
						<div class="small-carts">
							<div class="small">
								<img src="/img/main/small.svg" alt="">
								<p>${data[key].sqm} sqm</p>
							</div>
							<div class="small">
								<img src="/img/main/small2.svg" alt="">
								<p>${data[key].bed} Bed</p>
							</div>
							<div class="small">
								<img src="/img/main/small3.svg" alt="">
								<p>${data[key].bathroom} Bathroom</p>
							</div>
						</div>
						<h3><span>$${data[key].price}</span> / Night</h3>
					</div>
				</div>
			`
		}
		
	}	
}

getLength = (data) => {
	dataLength = data.length
}

let position = 0;
let itemWidth = 379.99;

leftButton.addEventListener('click', () => {
	position += itemWidth
	setPosition()
})

rightButton.addEventListener('click', () => {
	position -= itemWidth
	setPosition()
})

setPosition = () => {
	track.style.transform = `translateX(${position}px)`
	track.style.transition = `transform .3s ease-in-out`
	checkButtons()
}

checkButtons = () => {
	if(position == 0) {
		leftButton.setAttribute('disabled', true)
	}
	else{
		leftButton.removeAttribute('disabled')
	}
	if(position === -((dataLength - 3) * itemWidth)) {
		rightButton.setAttribute('disabled', true)
		rightButton.style.background = ''
	}
	else{
		rightButton.removeAttribute('disabled')
	} 
}
checkButtons()

// =================================================================

async function getComment() {
	try {
		let response = await fetch('http://localhost:3001/customers')
		let data = await response.json()
		console.log(data)
		cardDataOutput(data)
	} 
	catch (err) {
		console.log(err);
		// roomsCarts.innerHTML = `<h3>No rooms found</h3>`
	}
}
getComment() 