import express,{Request,Response} from 'express';
import upload from 'express-fileupload';


const app=express();
app.use(upload());

app.get('/',(req:Request,res:Response)=>{
    res.sendFile(__dirname + '/static/index.html');
});

app.get('/style.css', (req, res) => {
    res.header('Content-Type', 'text/css');
    res.sendFile(__dirname+'/static/style.css');
});

app.post('/',(req:Request,res:Response)=>{
    if(req.files){
        // res.send(req.files?.file);
        console.log(req.files);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
        const file:any= req.files.file;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const filename:any=file?.name
        console.log(filename);

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        file.mv('./src/uploads/' + filename, function (err: any) {
            if(err){
                res.send(err)
            } else{
                res.send(req.files);
            }
        })

    }
    else{
        res.send('INVALID REQUEST');
    }
})

app.listen(8000,()=>{
    console.log('listening on 8000');
});




