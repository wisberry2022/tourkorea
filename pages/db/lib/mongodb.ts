// This approach is taken from https://github.com/vercel/next.js/tree/canary/examples/with-mongodb
import { MongoClient } from 'mongodb'

const DBID = process.env.NEXT_PUBLIC_DBID;
const DBKEY = process.env.NEXT_PUBLIC_DBKEY;
const MONGO_URI = `mongodb+srv://${DBID}:${DBKEY}@cluster0.8xydiec.mongodb.net/TourKorea?retryWrites=true&w=majority`

if (!MONGO_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"')
}

const uri = MONGO_URI;
const options = {}

let client
let clientPromise: Promise<MongoClient>

client = new MongoClient(uri, options)
clientPromise = client.connect()

export default clientPromise