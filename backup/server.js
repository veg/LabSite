const express = require('express')
const path = require('path')


const port = 8020;
const app = express();

app.use(express.static('.'));
app.use(express.static('build'));

app.get('/', (req,res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

app.listen(port, ()=>{
  console.log('Listeningon port', port, '...');
});
