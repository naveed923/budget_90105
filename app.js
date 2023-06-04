let budgetAmount=0;
function  setBudget() {
    budgetAmount=document.getElementById("budgetAmount").value;
    if(budgetAmount==0){
        alert("please enter the budget amount");
    }else{
    let budgetBln=document.getElementById("budgetBln");
    budgetBln.innerText="$"+budgetAmount;}

}

let expense=0;

let obj={
    category:"",
    des:"",
    expenseCollection:"",
    date:"",
}
let arr=[];
function setExpense(){
    if(budgetAmount==0){
        alert("Please set the Budget Amount first");
        return false;
    }
    let category=document.getElementById("category").value;
    let des=document.getElementById("des").value;
    let expenseAmount=document.getElementById("expenseAmount").value;
    let date=document.getElementById("date").value;
    let remAmount=document.getElementById("remAmount");
    let totalExpense=document.getElementById("totalExpense");
    let innerdiv=document.getElementById("show-div");
    
    if(expenseAmount==""){
        alert("Please enter the expense amount");
    }
   
    else{
    expense+=Number(expenseAmount);
    let remBalance=budgetAmount-expense;
    remAmount.innerText="$"+remBalance;
    totalExpense.innerText="$"+expense;
    let obj={
        category:"",
        des:"",
        expenseCollection:"",
        date:"",
    }
    obj.category=category;
    obj.des=des;
    obj.expenseCollection=expenseAmount;
    obj.date=date;
    arr.push(obj);
    // console.log(arr);
   let tablebody=document.getElementById("tablebody");
   innerdiv.style.display='block';
   while(tablebody.firstChild){
    tablebody.removeChild(tablebody.firstChild);
   }
   //let tr=document.createElement("tr");
   console.log(arr);

    arr.forEach(ele=>{
        let tr=document.createElement("tr");
        let tdCategory=document.createElement("td");
        let tdDes=document.createElement("td");
        let tdExpenseAmount=document.createElement("td");
        let tdDate=document.createElement("td");
        tdCategory.innerText=ele.category;
        tdDes.innerText=ele.des;
        tdExpenseAmount.innerText=ele.expenseCollection;
        tdDate.innerText=ele.date;
        tr.appendChild(tdCategory);
        tr.appendChild(tdDes);
        tr.appendChild(tdExpenseAmount);
        tr.appendChild(tdDate);
        tablebody.appendChild(tr);

        
    });
   
   
    
    
    }
}