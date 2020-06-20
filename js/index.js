// get the body tag
var body=document.querySelector("#root");
console.log(body);
// create section 
var main=document.createElement("section");
// classname to the section
main.classList.add("main");
// append main section to the body tag
body.appendChild(main);


//*************************** create card1 ***********************************
var card1=document.createElement("article");
card1.setAttribute("class","card1");
main.appendChild(card1); 
// create Image tag
var image=document.createElement("img");
image.src="images/profile.svg";
image.alt="Profile Image";
card1.appendChild(image);
// var name=document.createElement("h2");
var name1=document.createElement("h2");
name1.textContent="Micheeti Sravya";
console.log(name1);
card1.appendChild(name1);
// create student 
var cont=document.createElement("h4");
cont.textContent="Student & Web Developer";
card1.appendChild(cont);
// create line
card1.appendChild(document.createElement("hr"));
// mobile number 
var mobile=document.createElement("h4");
mobile.textContent="9876543210";
card1.appendChild(mobile);
// create email
var email=document.createElement("h4");
email.textContent="micheetisravya@gmail.com";
card1.appendChild(email);
//create place
var cont=document.createElement("h4");
cont.textContent="Srikakulam";
card1.appendChild(cont);

         
//************************** create card2 **************************************
var card2=document.createElement("article");
card2.setAttribute("class","card2");
main.appendChild(card2);
// h1 for career objective name
var name1=document.createElement("h2");
name1.textContent="Career Objective";
console.log(name1);
card2.appendChild(name1);
// career objective content
var cont=document.createElement("p");
cont.textContent="I am able to find an exciting and challenging entry level position in the Information Technology Industry.";
card2.appendChild(cont);
// creare line
card2.appendChild(document.createElement("hr"));
// h2 for Education details name
var name1=document.createElement("h2");
name1.textContent="Education Details";
console.log(name1);
card2.appendChild(name1);
//An array containing education details.
var education = new Array();
education.push(["Sno", "Institute", "Course","Yop","Per"]);
education.push([1, "------------------------College", "Btech", "2022", "86"]);
education.push([2, "------------------------College", "Inter", "2018", "82"]);
education.push([3, "------------------------Schools", "SSC", "2016", "92"]);
//Create Table element.
var table = document.createElement("TABLE");
table.border = "1";
//The count of columns.
var columnCount = education[0].length;
//Add the header row.
var row = table.insertRow(-1);
for (var i = 0; i < columnCount; i++) {
    var headerCell = document.createElement("TH");
    headerCell.innerHTML = education[0][i];
    row.appendChild(headerCell);
}
//Add the data rows.
for (var i = 1; i < education.length; i++) {
    row = table.insertRow(-1);
    for (var j = 0; j < columnCount; j++) {
        var cell = row.insertCell(-1);
        cell.innerHTML = education[i][j];
    }
}
card2.appendChild(table);
// h1 for skills name
var name1=document.createElement("h2");
name1.textContent="Skills";
console.log(name1);
card2.appendChild(name1);
var arr = ['C', 'Python', 'Java', 'HTML', 'CSS','JavaScript','Bootstrap'];
// create ul element.
var ul = document.createElement('ul');
for (i = 0; i <= arr.length - 1; i++)
{
	// create li element.
    var li = document.createElement('li');
    // assigning text to li using array value.
    li.innerHTML = arr[i];
    // append li to ul.      
    ul.appendChild(li);     
}
// add list to the container.
card2.appendChild(ul);       
// h1 for achivements name
var name1=document.createElement("h2");
name1.textContent="Achivements";
console.log(name1);
card2.appendChild(name1);
var arr = ['..............................................', '..............................................', '..............................................', '..............................................', '..............................................','..............................................'];
// create ul element.
var ul = document.createElement('ul');
for (i = 0; i <= arr.length - 1; i++)
{
	// create li element.
    var li = document.createElement('li');
    // assigning text to li using array value.     
    li.innerHTML = arr[i];  
    // append li to ul.    
    ul.appendChild(li);     
}
card2.appendChild(ul);       
// h1 for hobbies name
var name1=document.createElement("h2");
name1.textContent="Hobbies";
console.log(name1);
card2.appendChild(name1);
var arr = ['..............................................', '..............................................', '..............................................', '..............................................', '..............................................','..............................................'];
// create ul element.
var ul = document.createElement('ul');
for (i = 0; i <= arr.length - 1; i++) 
{
	// create li element.
    var li = document.createElement('li');
    // assigning text to li using array value.     
    li.innerHTML = arr[i];  
    // append li to ul.    
    ul.appendChild(li);     
}
card2.appendChild(ul);