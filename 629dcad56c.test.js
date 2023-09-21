import mongoose from 'mongoose';

describe('Database Connection', () => {
  let db;

  beforeAll(async () => {
    db = await mongoose.connect("mongodb://127.0.0.1:27017", {
      dbName: "backend"
    });
  });

  test('should be able to connect to database', async () => {
    const isConnected = db.connections[0].readyState;
    expect(isConnected).toBe(1);
  });

  test('should have the correct database name', async () => {
    const dbName = db.connections[0].name;
    expect(dbName).toBe('backend');
  });

  afterAll(async () => {
    await mongoose.disconnect();
  });
});
