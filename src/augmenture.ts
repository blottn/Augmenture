const express = require('express');

import { listAll } from "./controller";


const app = express();

const port = 3000;

app.get('/', listAll);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
