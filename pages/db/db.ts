import mongoose from 'mongoose';

const DBID = process.env.NEXT_PUBLIC_DBID;
const DBKEY = process.env.NEXT_PUBLIC_DBKEY;

interface Connect {
  isConnected?: number;
}

const connection: Connect = {};

const dbConnect = async () => {
  if (connection.isConnected) {
    return
  }

  const db = await mongoose.connect(`mongodb+srv://${DBID}:${DBKEY}@cluster0.8xydiec.mongodb.net/TourKorea?retryWrites=true&w=majority`);
  connection.isConnected = db.connections[0].readyState;
  console.log('mongodb connect!')
}

export default dbConnect