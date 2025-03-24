import express from 'express'
//import cors from 'cors';
const app = express()
//app.use(cors())
app.get('/',(req,res)=>{
    res.send('server is ready')
})
app.get('/api/jokes',(req,res)=>{
    const jokes = [
        {
            id:1,
            title:'A joke',
            content:'it had too many problems'
        },
        {
            id:2,
            title:'Another joke',
            content:'it had too many problems'
            }
    ];
    res.json(jokes);
})
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
    })