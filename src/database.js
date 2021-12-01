// or as an es module:
import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb+srv://edwin:edwin@cluster0.mimzr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const client = new MongoClient(url);

// Database Name
const dbName = 'myProject';
(async () => {
	try {
		await client.connect();
		console.log('Connected successfully to server');
		const db = client.db(dbName);
		const collection = db.collection('users');

		// the following code examples can be pasted here...

		return 'done.';
	} catch (error) {
		console.error(error);
	}
})();
async function insertData(body) {
	try {
		await client.connect();
		console.log('Connected successfully to server');
		const db = client.db(dbName);
		const collection = db.collection('users');
		await collection.insertMany(body);
	} catch (error) {
		if (error) {
			console.log(error); // special case for some reason
		}



	}
}
export default insertData;

	// Use connect method to connect to the server

