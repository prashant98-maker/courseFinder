function courseFinder(){
    let cat = document.getElementById("category").value;
    let type = document.getElementById("type").value;
    let course = document.getElementById("course");

    let link= "" ;
     if(cat ==="Business"){
       link =  `<p><a href="https://academy.hubspot.com/courses/inbound-sales?" target="_blank">Business</a></p>`;
    }else if(cat ==="Marketing"){
       link = `<p><a href="https://www.coursera.org/learn/professional-selling-step-1?" target="_blank">Marketing</a></p>` ;
    }else{
       link = `<p>Please select a valid category.😊</p>`;
    }
    
   course.innerHTML = link;
}