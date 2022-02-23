module.exports = (template,data)=>{
    let output = template.replace(/{%IMAGE%}/g,data.image);
    output = output.replace(/{%ID%}/g,data.id);
    output = output.replace(/{%PRODUCTNAME%}/g,data.productName);
    output = output.replace(/{%QUANTITY%}/g,data.quantity);
    output = output.replace(/{%PRICE%}/g,data.price);
    output = output.replace(/{%DESCRIPTION%}/g,data.description);
    output = output.replace(/{%NUTRIENTS%}/g,data.nutrients);
    output = output.replace(/{%FROM%}/g,data.from);

    if(!data.organic){
        output = output.replace(/{%NOT_ORGANIC%}/g,'not-organic');
    }
    return output;
}