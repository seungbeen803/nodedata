let express = require('express');
let ejs     = require('ejs');
let path    = require('path'); 
// Test 배열이용하여 작성하기 
let todosArr = [
    {id: 1, contents: '영화보기', yesno: 'no' }, 
    {id: 2, contents: '숙제하기', yesno: 'no' }, 
    {id: 3, contents: '운동하기', yesno: 'no' },
    {id: 4, contents: '파리 여행하기', yesno: 'no' },
]; //배열초기값
let count = 5;  //4개 초기값이 들어있어 id:5로 시작함 

/*  실제 처음부터 빈배열에 넣기 위해서는 여기 실행 
let todosArr = []; 
let count = 1; 
*/ 
let app     = express(); 

app.use(express.static('public'));                //public 폴더공유
app.use(express.urlencoded( {extended:false}));   //사용자 html 입력
app.set('views', path.join(__dirname, 'views'));  //뷰폴더 지정
app.set('view engine', 'ejs'); 

app.get('/', (req, res) => {
    console.log('/ get이 시작됨~~'); 
    res.render('list', {datalist: todosArr});     //list.ejs 화면 
}); 
app.get('/insert', (req, res) => {
    console.log("/insert get 시작됨~"); 
    //추가
    res.render('insert'); 
});
app.post('/insert', (req, res) => {
    console.log("/insert post 시작됨~"); 
    //배열에 입력받은 값으로 객체를 만들어 추가
    let id_num = count++; 
    todosArr.push({id:id_num, contents:req.body.contents, yesno: req.body.yesno}); 
    res.redirect("/"); 
}); 
app.get('/delete/:id', (req, res) => {
    let id_num = req.params.id;
    console.log("/delete " + req.params.id);  //id는 params 사용 
    //추가 
    for (const i in todosArr) {
        if ( todosArr[i].id == req.params.id )   {
            console.log(todosArr[i].id + " " + i);
            todosArr.splice(i, 1);
        }
    }
    console.log("delete ok~~~ " + todosArr); 
    res.redirect("/"); 
});
app.get('/edit/:id', (req, res) => {
    let editdata = [];
    console.log("/edit " + req.params.id); 
    for (const i in todosArr) {
        if ( todosArr[i].id == req.params.id )   {
            console.log(todosArr[i].id + " " + i);
            editdata = todosArr[i];
            res.render('edit', {data: editdata}); 
        }
    }
}); 
app.post('/edit/:id', (req, res) => {
    let editdata = [];
    console.log("/edit " + req.params.id); 
    if (req.body.contents && req.body.yesno) {
        console.log("수정 값~~~ " + req.body.contents + " " + req.body.yesno);     
    }
    //추가 
    for (const i  in todosArr) {
        if  (todosArr[i].id == req.params.id) {
            todosArr.splice(i, 1, {id:req.params.id, contents:req.body.contents, yesno:req.body.yesno});    
            console.log("수정 ok~~~ " + req.params.id); 
        }        
    }
    res.redirect("/"); 
}); 

app.listen(3000, () => {
    console.log("3000포트 서버가 시작됨~~"); 
});