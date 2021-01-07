import express from 'express';
import cookieParser from "cookie-parser";

import Routes from './src/routes/routes.js';

const app = express();
const port = 3000;

function main() {
    Routes(app);
    app.use(express.static('public'))
    app.use(cookieParser())
    app.listen(3000, () => {
        console.log(`Listening at :${port}`);
    })
}

main();

