import express from 'express';
import { fetchUrl as fetch } from 'fetch';
import './database.js';
import insertData from './database.js';
const app = express();
let contactos;
app.use(express.urlencoded({ extended: false }))
app.use(express.json());
app.set('PORT', 5000)
app.get("/", (req, res) => {
	fetch("http://www.raydelto.org/agenda.php", async (error, meta, body) => {
		contactos = await JSON.parse(body);
		res.send(contactos)
		try {

			insertData(contactos);

		} catch (error) {
			console.log(error)

		}
	})

})
app.listen(app.get('PORT'), () => {
	console.log(`El servidor esta corriendo en el puerto ${app.get("PORT")}`)
})

