import express from 'express';
import cookieParser from "cookie-parser";

import Routes from './src/routes/routes.js';

const app = express();
const port = 3000;

function main() {
    app.use(express.static('public'));
    app.use(cookieParser());
    Routes(app);
    app.listen(port, () => {
        console.log(`Listening at :${port}`);
    })
}

main();
