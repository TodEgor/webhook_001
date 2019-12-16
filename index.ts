import express, { response } from 'express';
import { handleIncomingMessage } from './dialog';
import { IncomingMessage } from './dialog/transport';
import logger from './lib/logger';
import pkg from './package.json';

const { local_port: localPort } = pkg.config;
const { QLOUD_HTTP_PORT: port = localPort } = process.env;

const app = express();

app.use(express.json(), (req, res) => {
    (async () => {
        const incomingMessage = req.body as IncomingMessage;
        const outgoingMessage = await handleIncomingMessage(incomingMessage);

        console.log(req.body);
        console.log(outgoingMessage);
        res.json(outgoingMessage);
    })().catch((error) => {
        logger.error(error);
        res.sendStatus(500);
    });
});

app.listen(port);
