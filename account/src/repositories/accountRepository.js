
import { MongoClient } from 'mongodb';

export const client = new MongoClient(process.env.DATABASE_URL);

export function getUsersCollection(client) {
  const db = client.db('accounts');
  const usersCollection = db.collection('users');
  return usersCollection;
}

export async function saveAccount(accounts) {
  await client.connect();
  const usersCollection = await getUsersCollection(client);
  await usersCollection.insertOne(accounts);
  await client.close();
}

