const redis = require('redis');
const dotenv = require('dotenv');

dotenv.config();
// Create Redis client
const client = redis.createClient({
    url: process.env.REDIS_URL,
});

client.on('error', (err) => {
    console.log('Redis Client Error', err);
});

const connectRedis = async () => {
    await client.connect();
    console.log('Connected to Redis');
};

// Utility function to get data from Redis cache
const getCache = async (key) => {
    const data = await client.get(key);
    return data;
};

// Utility function to set data in Redis cache
const setCache = async (key, value, ttl) => {
    await client.setEx(key, ttl, value);
};

module.exports = { client, connectRedis, getCache, setCache };
