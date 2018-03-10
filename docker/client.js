let { connect } = require('lotion')
async function main() {

process.on('unhandledRejection', function(reason, p){
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