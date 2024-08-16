const connect = ()=>{
    const client = new MongoClient(process.env.MONGODBURI, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(err => {
        if(err) throw err;
        console.log('Connected to MongoDB');
        const db = client.db('mydatabase');
        const collection = db.collection('mycollection');
    });
}