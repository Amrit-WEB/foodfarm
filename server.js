const http = require('http');
const fs = require('fs');
const url = require('url');
const slugify = require('slugify');
const replaceTemplate = require('./module/replaceTemplate');

//html reading 
const homeTemplate = fs.readFileSync(`${__dirname}/templates/home.html`,'utf-8');
const detailTemplate = fs.readFileSync(`${__dirname}/templates/detail.html`,'utf-8');
const cardTemplate = fs.readFileSync(`${__dirname}/templates/template-card.html`,'utf-8');
const pageNotFound = fs.readFileSync(`${__dirname}/templates/pnf.html`,'utf-8');

//api reading
const jsonData = fs.readFileSync(`${__dirname}/dev-data/data.json`,'utf-8');
const jsonDataObj = JSON.parse(jsonData);

//Server Creation
const server = http.createServer((req,res)=>{
    const {query,pathname} = url.parse(req.url,'true');

    console.log(slugify('Fresh Apple',{
        replacement : "_",
        lower:"true"
    }));
    //Home Page
    if(pathname==='/'||pathname==='/home'){

        res.writeHead(200,{
            'Content-type':'text/html'
        })

        const render = jsonDataObj.map(el=>{
             return replaceTemplate(cardTemplate,el);
        })
        const finalHomeTemplate = homeTemplate.replace(/{%PRODUCT_CARDS%}/g,render);

        res.end(finalHomeTemplate);

        //Detail Page
    }
    else if(pathname==='/product'){
        res.writeHead(200,{
            'Content-type':'text/html'
        })
        const productId = jsonDataObj[query.id];
        const finalProduct = replaceTemplate(detailTemplate,productId);
        res.end(finalProduct);

        //API Page
    }else if(pathname==='/api'){
        res.writeHead(200,{
            'Content-type':'application/json'
        })
        res.end(jsonData);

        //Page Not Found
    }else{
        res.writeHead(404,{
            'Content-type':'text/html'
        })
        res.end(pageNotFound);
    }
})

//server listning
server.listen(8080,'127.0.0.1',()=>{
    console.log('Server is running on port 8080');
})