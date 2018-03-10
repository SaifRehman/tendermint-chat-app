let { connect } = require('lotion')
let config = require('./config.js')

async function main() {
try {
    let nodes = config.peers.map((addr) => `ws://${addr}:46657`);
    let { send, state } = await connect(null, {nodes});
    async function updateState() {
        let messages = await state.messages;
        console.log(messages);
    }
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