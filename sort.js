const train = document.getElementById("train");
const sortbyasc = document.querySelector(".sortbyasc")
const prices = document.querySelector(".prices")

var desc = false;
sortbyasc.addEventListener("click",()=>{
    var array = sort_array_by(product,'name',desc);
    displayProducts(array);
    desc = !desc

})
prices.addEventListener("click",()=>{
    var array = sort_array_by(product,'price',desc);
    displayProducts(array);
    desc = !desc

})
function sort_array_by(array,sort,desc){

    array.sort(function(a,b){
        if(a[sort]<b[sort]) return -1;
        if(a[sort]>b[sort]) return 1;
        return 0 ;
    });
    if (desc) array.reverse() ;
    return array;

}


