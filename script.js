var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
    //result
    var result=JSON.parse(request.response);
    console.log(result);
    //a.
    var res=result.filter((ele)=>ele.region==="Asia");
    console.log(res);
    //b.
    var res=result.filter((ele)=>ele.population<200000);
    console.log(res);
    //c.
    var res = result.forEach(ele => {
        console.log(ele.name,ele.capital,ele.flag)  
    });
    //d.
    var res=result.reduce((a,b)=>a+b.population,0);
    console.log(res);
    //e.
    var res=result.filter((ele)=>ele.currencies.name[0]==="United States Doller");
    console.log(res);
}
