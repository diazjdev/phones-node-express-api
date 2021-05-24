class Phone {

	constructor({ id, name, manufacturer, price, screen, size, ram, color, imageFileName, processor, description }) {
		this.id = id;
		this.name = name;
		this.manufacturer = manufacturer;
		this.description = description;
		this.price = price;
		this.screen = screen;
		this.size = size;
		this.ram = ram;
		this.color = color;
		this.imageFileName = imageFileName;
		this.processor = processor;
	}

}

module.exports = Phone;
