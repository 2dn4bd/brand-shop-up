const express = require('express');
const cors = require('cors')
const app = express()
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const port = process.env.PORT || 5003;

//middleware
app.use(cors());
app.use(express.json());


//sohelmahmud047
//C2N7L3LaFZ4E0gv6
app.get('/', (req, res) =>{
    res.send('server is running')
})
const uri = "mongodb+srv://sohelmahmud047:C2N7L3LaFZ4E0gv6@brand-shop.jqhxn0w.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
    });

    async function run() {
    try {
        
        const itemCollection = client.db('itemsDB').collection('items')
        const orderCollection = client.db('itemsDB').collection('orders')

        app.get('/items/:name', async(req, res) =>{
            const name = req.params.name
            const query = {brand_name: name}
            const result = await itemCollection.find(query).toArray()
            res.send(result)
        })
        
        app.get('/item', async(req, res) =>{
            const cursor = itemCollection.find()
            const result = await cursor.toArray()
            res.send(result)
        })

        app.put('/item/:id', async(req, res) =>{
            const id = req.params.id
            const updatedItem = req.body

            console.log(id);
            const filter = {_id: new ObjectId(id)}

            console.log(updatedItem);
            const changedItem = {
                $set:{
                    name:updatedItem.name,
                    brand:updatedItem.brand,
                    type:updatedItem.type,
                    image:updatedItem.image,
                    price:updatedItem.price,
                    rating:updatedItem.rating,
                    description:updatedItem.description
                }
            }
            const result = await itemCollection.updateOne(filter, changedItem)
            res.send(result)
        })
        app.get('/item/:id', async(req, res) =>{
            const id = req.params.id
            const query = {_id: new ObjectId(id)};
            const result = await itemCollection.findOne(query)
            res.send(result)
        })

        app.post('/addtocart',async(req,res) =>{
            const data = req.body;
            const result = await orderCollection.insertOne(data);
            res.send(result)
        })

        app.get('/addtocartdata/:mail',async(req,res) => {
            const mail = req.params.mail;
            const mailquery = {userMail : mail};
            const result = await orderCollection.find(mailquery).toArray();
            res.send(result)
        })

        
        app.post('/item', async(req, res) =>{
            const newProduct = req.body;
            const result = await itemCollection.insertOne(newProduct)
            res.send(result)
        })
        app.delete('/item/:id', async(req, res) =>{
            const id = req.params.id;
            const query = {_id: new ObjectId(id)}
            const result = await orderCollection.deleteOne(query)
            res.send(result)
        })


        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);



app.listen(port, () =>{
    console.log(`server is running on port ${port}`);
})