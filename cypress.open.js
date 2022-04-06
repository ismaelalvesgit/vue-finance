/* eslint-disable */
const concurrently = require('concurrently');

const { result } = concurrently([
    'npm run serve',
    'npx cypress open'
], {
    killOthers: ['failure', 'success'],
})


setImmediate(async()=>{
    try {
        await result
    } catch (error) {}
})