const Bus = class Bus {

	constructor(name, soc) {
		this.name = name
		this.soc = soc
		this.driving = false
	}

	energyConsumed() {
		return 5.8 + Math.random() * 1.7
	}

	energyCharged() {
		return 5.0
	}

	// create methods that simulate a driving and thus energy consuming vehicle

	stop() {
		console.log(`Bus ${this.name} stopped`)

	}

	start() {
		console.log(`Bus ${this.name} started`)

		// this is the starting point
		this.driving = true
	}
}

module.exports = Bus
