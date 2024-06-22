import Express from 'express';
import Path from 'path';


const app=Express()
const dir= Path.resolve()
const dir_front="../front/build"
app.use(Express.static(dir_front))

app.listen('5000', function(){
    console.log("server has started")
})


app.get('/', function(req, res) {
    res.sendFile(dir + dir_front + '/index.html')
});

app.get('/registro_actos',function(req, res){
    console.log(dir)
    res.sendFile(dir + dir_front + '/index.html')
})
    


