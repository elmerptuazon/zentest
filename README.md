# Test

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# unit test
$ npm run test:watch
```

## How to Test

- Goto http://localhost:3000/api/auth/google
- It will redirect to google login page
- Select any google account to login
- It will redirect to http://localhost:3000/api/auth/profile
- Due to the guard `CheckTokenExpiryGuard` it will validate the token and return user details
- Goto http://localhost:3000/api/auth/logout to logout from the app and revoke the google refresh token
- Goto http://localhost:3000/api/note for crud operations
