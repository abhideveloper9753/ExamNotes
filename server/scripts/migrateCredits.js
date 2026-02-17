import dotenv from 'dotenv';
import connectDb from '../utils/connectDb.js';
import UserModel from '../models/user.model.js';

dotenv.config();

const migrate = async () => {
  try {
    await connectDb();
    const result = await UserModel.updateMany(
      { $or: [ { credits: { $lt: 100 } }, { credits: { $exists: false } } ] },
      { $set: { credits: 100, isCreditAvailable: true } }
    );

    console.log('Migration complete. Modified count:', result.modifiedCount || result.nModified || 0);
    process.exit(0);
  } catch (err) {
    console.error('Migration failed:', err);
    process.exit(1);
  }
};

migrate();
