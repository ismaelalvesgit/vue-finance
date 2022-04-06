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
    } catch (error) {}
})