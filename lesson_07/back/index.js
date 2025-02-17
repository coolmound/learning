const express = require("express");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const cors = require("cors");
const uri =
  "mongodb+srv://Julia:banana1909@cluster0.p9vhf.mongodb.net/todoDB?retryWrites=true&w=majority";

const app = express();
const port = 5000;
const databse = "sanchez";

// Створюємо MongoClient
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// Підключення до MongoDB
async function connectToMongo() {
  await client.connect();
  console.log("MongoDB підключено");
}

connectToMongo().catch(console.error);

// Middleware для обробки JSON
app.use(cors());
app.use(express.json());
const db = client.db(databse);
const collection = db.collection("todo");
// Маршрут
app.get("/insert", async (req, res) => {
  try {
    const { title, body, idea } = req.query;

    const result = await collection.insertOne({ title, body, idea });
    console.log("reques done!");
    res.json(result);
  } catch (err) {
    console.log(err);
  }
});

app.get("/data", async (req, res) => {
  try {
    const result = await collection.find({}).toArray();
    // console.log(result);
    res.json(result);
  } catch (err) {
    console.log(err);
  }
});

app.get("/update", async (req, res) => {
  try {
    const { title, body, idea, id } = req.query;

    const result = await collection.updateOne(
      { _id: new ObjectId(id) }, // Знаходження документа за _id
      {
        $set: {
          title: title,
          body: body,
          idea: idea,
        },
      }
    );
    console.log("reques done!");
    res.json(result);
  } catch (err) {
    console.log(err);
  }
});

app.get("/delete", async (req, res) => {
  try {
    const { _id } = req.query;
    console.log(req.query);
    const result = await collection.deleteOne({ _id: new ObjectId(_id) });
    console.log(result);
    res.json(result);
  } catch (err) {
    console.log(err);
  }
});
// Запуск сервера
app.listen(port, () => {
  console.log(`Сервер працює на http://localhost:${port}`);
});
//http://127.0.0.1:5000/insert/?name=julia&age=129
