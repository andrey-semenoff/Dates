# Dates
React app that helps the call center agents to choose available time slots for calling to buyers.

## Requirements
To run this application you need:
- Git
- Node.js (16+)
- yarn or npm

## Installation
1. Clone repository
```bash
git clone git@github.com:andrey-semenoff/Dates.git
```

2. There are two options for server & app preparation:
- auto installation (run bash script)
- manual installation (manually perform commands)

## Auto Installation
At the root of project execute:
```bash
./install.sh
```
## Servers auto start
After scripts done their work, to start local API server & local server for app perform:
```bash
./start.sh
```


## Manual Installation
### API Server installation 
At the root of project execute:
```bash
cd ./server
# Depends on your favourite Node.js package manager
yarn install
# or
npm install
```

### React App installation
At the root of project execute:
```bash
cd ./app
# Depends on your favourite Node.js package manager use "yarn" or "npm"
yarn install

# And finally build the project
yarn build
```

Installation steps completed!

## Start application
To make app work, you should start two local servers:
- API server that serves data for app
- server that serve React app

To start API server from the root of project run:
```bash
cd ./server
./node_modules/.bin/json-server db.json
```

To start React app from the root of project run:
```bash
cd ./app
./node_modules/.bin/serve -s build
```

Then open link http://localhost:3000 at your favourite browser

Enjoy the App 😎