import dotenv from 'dotenv';
dotenv.config();

const config = {
  port: Number(process.env.PORT || 3000),
  database: {
    lobobot: {
      uri: process.env.LOBOBOT_DATABASE_URI || 'mongodb://localhost:27017',
      name: process.env.LOBOBOT_DATABASE_NAME || 'lobobot',
    },
  },
};

export default config;
