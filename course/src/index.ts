import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()

import app from './server'

app.listen(3001, () => {
    //console.log('hello on  http://localhost:3001')
})