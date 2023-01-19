const mongoose = require("mongoose");

async function startDB() {
	mongoose.set("strictQuery", true);
	try {
		await mongoose.connect(
			"mongodb+srv://marianemoreira777:alohomora7@cluster0.bpm0spe.mongodb.net/?retryWrites=true&w=majority"
		);
		console.log("Banco de dados conectado!");
	} catch (error) {
		console.log("Banco de dados deu problema!" + error);
	}
}

module.exports = startDB;
