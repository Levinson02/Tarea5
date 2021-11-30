const express = require('express');
const fetch = require('fetch').fetchUrl;
const app = express();
let contactos;
app.set('PORT', 5000)
app.get("/", (req, res) => {
	fetch("http://www.raydelto.org/agenda.php", (error, meta, body) => {
		contactos = body.toString();
		res.send(contactos);
	})
})
app.listen(app.get('PORT'), () => {
	console.log(`El servidor esta corriendo en el puerto ${app.get("PORT")}`)
})

