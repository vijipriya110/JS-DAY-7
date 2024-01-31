var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    console.log(result);
    var res=result.filter((ele)=>ele.region==="Asia");
    console.log(res);
    var res=result.filter((ele)=>ele.population<200000);
    console.log(res);
    
    var res = result.forEach(ele => {
        console.log(ele.name,ele.capital,ele.flag)  
    });
    
    var res=result.reduce((a,b)=>a+b.population,0);
    console.log(res);
    var res=result.filter((ele)=>ele.currencies.name[0]==="United States Doller");
    console.log(res);
}