let { connect } = require('lotion')
let config = require('./config.js')
const fs = require('fs');

let genesis = JSON.parse(fs.readFileSync(require.resolve('./genesis.json'), { encoding: 'utf8' }));

async function main() {
try {
    let nodes = config.peers.map((addr) => `ws://${addr}:46657`);
    let { state } = await connect('22f6f79e1fb378372f0820fdea5c1c5957a4d7724aa4facfd87dba86a0247f0b');
    async function updateState() {
        let messages = await state.messages;
        console.log(messages);
    }
    updateState();
    } catch (err) {
        console.log(err);
    }
    process.on('unhandledRejection', function (reason, p) {
        console.log('Please report the following error as a Github Issue on: ')
        console.log(
            ` 
        Please report the following error as a Github Issue on:
        https://github.com/devslopes/blockchat
        `
        )
        console.log("Possibly Unhandled Rejection at: Promise ", p, " reason: ", reason);
        console.trace();
    });
}
main()