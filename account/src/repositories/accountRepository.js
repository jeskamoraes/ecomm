
import { MongoClient } from 'mongodb';

export const client = new MongoClient('mongodb://jessica:123456789@localhost:27017');

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

// export async function listAccounts() {
//   const collection = await getUsersCollection();
//   const accounts = collection.find().toArray();

//   return accounts;
// }

// export async function findAccountByEmail(email) {
//   const collection = await getUsersCollection();
//   const account = collection.findOne({ email });

//   return account;
// }

// export async function existsAccountByEmail(email) {
//   const account = await findAccountByEmail(email);

//   return account !== null;
// }