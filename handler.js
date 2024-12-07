require('dotenv').config()
const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const uri = process.env.MONGO;

const client = new MongoClient(uri);

async function create(name, content) {
    const database = client.db('note-jar');
    const notes = database.collection('notes');

    const doc = { name: name, content: content }
    const result = await notes.insertOne(doc);

    return(`A document was inserted with the _id: ${result.insertedId}`)
}

async function update(id, name, content) {

}

async function remove(id) {

}

async function run() {
    try {
        const database = client.db('note-jar');
        const notes = database.collection('notes');

        console.log(await create('Movie', 'Parasite'))

        // Query for a movie that has the title 'Back to the Future'
        //const query = { title: 'Back to the Future' };
        //const note = await notes.findOne(query);

        //console.log(movie);
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
run()