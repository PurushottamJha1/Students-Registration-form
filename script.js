function getDetails(){

    let fname = document.getElementsByClassName("FirstName");
    let lname=document.getElementsByClassName('LastName');
    let Age=document.getElementsByClassName('Age');
    let Email=document.getElementsByClassName('Email');
    let Phone=document.getElementsByClassName('Phone');
    let birthDate=document.getElementsByClassName('dob');
    let newArrKey=[fname[0].innerText,lname[0].innerText,Age[0].innerText,Email[0].innerText,Phone[0].innerText,birthDate[0].innerText];
    let newArrValue=[fname[1].value,lname[1].value,Age[1].value,Email[1].value,Phone[1].value,birthDate[1].value];
    let n=newArrValue.length;
    let s="";
    for(let i=0;i<n;i++){
        s=s+`${newArrKey[i]} ${newArrValue[i]} \n`;
    }
    console.log(s);
    alert(s);
}

function printDetail(newArrKey,newArrValue){
    
}