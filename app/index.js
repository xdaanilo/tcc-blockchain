const express = require('express');
const bodyParser = require('body-parser')
const Blockchain = require('../blockchain');
const PspServer = require('./p2p-server');

const HTTP_PORT = process.env.HTTP_PORT || 3001;

const app = express();
const bc = new Blockchain();
const p2pServer = new PspServer(bc);

app.use(bodyParser.json());

app.get('/blocks', (req, res) => {
    res.status(200).json(bc.chain);
});

app.post('/mine', (req, res) =>{
    const Block = bc.addBlock(req.body.data);
    console.log(`New blockchain added: ${block.toString}`);

    PspServer.syncChains();

    res.redirect('/blocks');
});

app.listen(HTTP_PORT, () => {
    console.log(`Listening on port ${HTTP_PORT}`);
});

p2pServer.listen();