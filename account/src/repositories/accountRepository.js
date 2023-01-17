
import { MongoClient } from 'mongodb';

export async function getUsersCollection() {
  const connectionURL = 'mongodb://jessica:123456789@mongodb:27017';
  const connection = new MongoClient(connectionURL);
  await connection.connect();

  const database = connection.db('accounts');
  return database.collection('users');
}

export async function saveAccount(accounts) {
  const collection = await getUsersCollection();
  // promise
  await collection.insertOne(accounts);
}

export async function listAccounts() {
  const collection = await getUsersCollection();
  const accounts = collection.find().toArray();

  return accounts;
}

export async function findAccountByEmail(email) {
  const collection = await getUsersCollection();
  const account = collection.findOne({ email });

  return account;
}

export async function existsAccountByEmail(email) {
  const account = await findAccountByEmail(email);

  return account !== null;
}