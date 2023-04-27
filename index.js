var tip=0;
var actual_amt=0;
var no_of_people=1;
var total=0;

function increasePersons(){
    no_of_people=parseInt(document.getElementById("nop").value);
    actual_amt=parseInt(document.getElementById("amt").value); 
    no_of_people++;
    document.getElementById("nop").value=no_of_people;
    total=actual_amt+tip;
    tipPerPerson(no_of_people,tip);
    totalPerPerson(no_of_people,total);
}

function decreasePersons(){
    var no_of_people=parseInt(document.getElementById("nop").value);
    if(no_of_people>1)
    no_of_people--;
    document.getElementById("nop").value=no_of_people;
    total=actual_amt+tip;
    tipPerPerson(no_of_people,tip);
    totalPerPerson(no_of_people,total);
}

function calculateTip(discount){
    actual_amt = parseInt(document.getElementById("amt").value);
    tip= actual_amt*discount/100;
    no_of_people=parseInt(document.getElementById("nop").value);
    tipPerPerson(no_of_people,tip);
    total=actual_amt+tip;
    totalPerPerson(no_of_people,total);
}

function tipPerPerson(no_of_people,tip){
    var res=tip/no_of_people;
    document.getElementById("tip_res").innerText=res;
    //console.log(res);
}

function totalPerPerson(no_of_people,total){
    var res=total/no_of_people;
    document.getElementById("tot_res").innerText=res;
}

function reset(){
    document.getElementById("nop").value=1;
    document.getElementById("tot_res").innerText="0.00";
    document.getElementById("tip_res").innerText="0.00";
    document.getElementById("amt").value=0;
    tip=0;
    actual_amt=0;
    no_of_people=1;
    total=0;
}
