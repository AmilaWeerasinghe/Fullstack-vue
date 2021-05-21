import bodyParser from 'body-parser';
import express from 'express';


const app = express();
app.use(bodyParser.json());

app.get('/hello', (req, res) => {
    res.send('Hello!');
});

//create a post route for /hello end point
app.post('/hello',(req,res)=>{
    res.send(`hello ${req.body.name} from /hello end point post route`);

});

app.listen(8000, () => {
    console.log('Server is listening on port 8000');
});