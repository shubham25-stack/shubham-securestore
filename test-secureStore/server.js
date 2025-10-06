import { encryptEnv, decryptEnv } from 'shubham-securestore';

// Encrypt .env
encryptEnv('mypassword');

// Decrypt encrypted.env
// decryptEnv('mypassword');
