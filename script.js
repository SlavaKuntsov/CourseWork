async function getData() {
	try {
		let response = await fetch("http://localhost:3001/rooms")
		let data = await response.json()
		dataOutput(data)
	} 
	catch (err) {
		console.log(err);
		roomsCarts.innerHTML = `<h3>No rooms found</h3>`
	}
}
getData() 

dataOutput = (data) => {
	if(data.length === 0) {
		roomsCarts.innerHTML = `<h3>No rooms found</h3>`
	}
	else{
		for (let key in data) {
			roomsCarts.innerHTML += `
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