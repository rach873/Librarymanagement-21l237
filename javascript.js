
let readstatus1=true;
let B1 = {
    title :"Geetanjali",
    author: "Rabindra Nath Tagore",
    yop:1910,
    readstatus1:!readstatus1,
    getsummary()
    {
        return `${this.title} is writen by ${author},and published in year ${yop}.readstatus is ${readstatus1}`;
    }
  };
  let readstatus2=false;
  let B2={
   
    title : "Origin of Species",
    author:"Charles Darwin",
    yop:1859,
    readstatus2:!readstatus2,
    getsummary()
    {
    return `${this.title} is writen by ${author},and published in year ${yop}.readstatus is ${readstatus2}`;
    }
  };

  const lib=[];
  
  lib.push(B1);
  lib.push(B2);

    function addbook(){
      
      
      lib.push("title:Ciderlla is writen by author:cameron,and published in year 2000");
      lib.push("title:Barbie is writen by author:Joel,and published in year 2005");
        console.log(lib);
    }
    document.getElementById("theInput1").innerHTML =addbook();
        
  function remlastbook()
  {
    lib.pop();
    console.log(lib);
  }

  function addBookToFront()

  {
    lib.unshift("title:Haunted place is writen by author:Mavrick,and published in year 1980");
      lib.unshift("title:Cinderlla is writen by author:Louis,and published in year 2000");
    //let html2 = document.getElementById("theInput1").value;
    console.log(lib);
  }
   document.getElementById("theInput1").innerHTML=addBookToFront();
   
  function removeFirstBook()

  {
    lib.shift();
    console.log(lib);
  }
function getAllTitles()
{
 
let alltitle = tl=>tl.alltitle;
let res =lib.map(alltitle);
console.log(res);
}
getAllTitles();

function getBooksByAuthor(authorname)
{
  let authornames = lib.filter(aut=>aut.authornames== authorname)
  console.log(authornames);
}
getBooksByAuthor("Louis");
function getTotalBooksPublishedBefore(year){
let disyear=lib.filter(days=>days.yop<year).reduce((prev,pres)=>prev+1,0);
  console.log(disyear);
  }
  getTotalBooksPublishedBefore("2000");

  function removeBookByTitle(title)
  {
    let index=lib.findIndex(
      function removing(){
      if(lib.t==title){
      
       return true;
      }
       })
      lib.splice(index,1);
      console.log(lib);
       }
       removeBookByTitle("Cinderlla");

       function getBooksByReadStatus(Status)
       {
       let sf=lib.filter(sts=>sts.readstatus===Status);
       console.log(sf);
       }  
       getBooksByReadStatus("true");
       function getSubLibrary(start, end)
   {
    let result=lib.slice(start,end);
   console.log(result);
    }
    getSubLibrary("ENGG", "cs");
 

 
 


  