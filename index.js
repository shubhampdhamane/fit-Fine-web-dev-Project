let plan1 = ["YEARLY MEMBERSHIP", 9000, "ghghnnho"]
let plan2 = ["HALF YEARLY MEMBERSHIP", 5000, "jkjjkjk"]
let plan3 = ["QUATERLY MEMBERSHIP"]
//let plan4 = ["MONTHLY MEMBERSHIP"]


function summary(plan, cost, facility){
    document.getElementsByClassName("modal-title")[0].innerHTML = plan
    document.getElementById("cost").innerHTML = cost
    document.getElementById("fs").innerHTML = facility
}
function showDetails(value){
 
   console.log(value)
    if( value ==1)
    {
        summary(plan1[0],plan1[1],plan1[2]) 
        console.log(value)

    }
    else if( value == 2)
    {
        summary(plan2[0],plan2[1],plan2[2]) 
        console.log(value)

    }
    else if( value == 3)
    {
        summary(plan3[0],plan3[1],plan3[2]) 
    } 
    else( value == 4)
    {
        summary(plan4[0],plan4[1],plan4[2]) 
    }

}
// $(document).ready(function(){
//     $(".val").click(function(){
//         showDetails(value);
//     })
// })


