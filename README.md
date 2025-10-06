🔐 shubham-securestore

A Node.js package for securely encrypting and managing environment variables (.env) using AES-256 encryption. Perfect for developers who want to keep sensitive configuration data safe.


🚀 Features

AES-256 encryption for .env files

CLI and programmatic usage

Lightweight, fast, and easy to integrate into any Node.js project

Protects sensitive keys like API keys, DB passwords, etc.

🛠️ Installation
npm install shubham-securestore

🔑 Usage
Programmatically
import { encryptEnv, decryptEnv } from 'shubham-securestore';

// Encrypt your .env file
encryptEnv('myStrongPassword');

// Decrypt the encrypted.env file
decryptEnv('myStrongPassword');

CLI Usage
node index.js encrypt myStrongPassword
node index.js decrypt myStrongPassword


CLI automatically reads .env and writes to encrypted.env (encrypt) or restores .env (decrypt).

📂 File Structure
shubham-securestore/
├── index.js           # Core encryption/decryption logic
├── package.json       # Package configuration
├── README.md          # Documentation
└── LICENSE            # Apache 2.0 License

📜 License

This project is licensed under the Apache 2.0 License. See LICENSE
 for details.

👨‍💻 Author

Shubham Kumar Thakur

GitHub

LinkedIn

Email: shubham.codecreator@gmail.com
</br>
</br>
Package link -: https://www.npmjs.com/package/shubham-securestore
</br>
</br>

☕ Support

If you like my work and want to support me, you can:
UPI ID: thisisankushthakur-1@okicici
