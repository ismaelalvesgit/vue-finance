/* eslint-disable */
const concurrently = require('concurrently');

const { result } = concurrently([
    'npm run serve',
    'npx cypress run'
], {
    killOthers: ['failure', 'success'],
})

setImmediate(async()=>{
    try {
        await result
    } catch (error) {
        error.forEach(err => {
            const { command, exitCode } = err;
            if(command.command === 'npx cypress run' && Number(exitCode) === 1){
                process.exit(1)
            } 
        });
    }
})