const http = require('http');
const path = require('path');
const fs = require('fs');

const abouthpath = path.join(__dirname, 'about.html')
const stylepath = path.join(__dirname, 'style.css')

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        if (req.url === '/about') {
            res.writeHead(200, { 'Content-Type': 'text/html' })
            fs.readFile(abouthpath, 'utf8', (err, data) => {
                if (err) {
                    res.end('Error');
                }
                else {
                    res.end(data);
                }
            });
            return;
        }
    }
    if (req.url === '/style.css') {
        res.writeHead(200, { 'Content-Type': 'text/css' });
        fs.readFile(stylepath, 'utf8', (err, data) => {
            if (err) {
                res.end('Error');
            } else {
                res.end(data);
            }
        });
        return;
    }
}).listen(9000, () => {
    console.log("Server running on port 9000");
});