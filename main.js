const container = document.getElementById('container');
const gotBtn = document.getElementById('got-btn');
const textvalue =document.getElementById('search-1');
const number =document.getElementById('search-2');



var mykey ='ZCGWNET4IQX1';


gotBtn.addEventListener('click', function() {
    var text=textvalue.value;

    console.log(textvalue);
  
 
    let url='https://g.tenor.com/v1/search?q='+text+'&key='+mykey+'&limit=' + number.value;
    console.log(url);
    container.innerHTML = '';
    let myRequest = new XMLHttpRequest();
    myRequest.open('GET', url);
    myRequest.responseType = 'json'
  
    myRequest.onreadystatechange = function(){
        if( myRequest.readyState === 4 && myRequest.status === 200 ){
            printData(myRequest.response);
        }
    }
    myRequest.send()
})
// Print the GOT data
function printData(data){
    for(var i=0; i<number.value; i++){
        let newUser = document.createElement("div")
        newUser.setAttribute('class', 'character')
        
        let userImage = document.createElement('img')

        userImage.setAttribute('src', data.results[i].media[0].gif.url)
        userImage.setAttribute('alt', data.results[i].media[0].gif.url )
        userImage.setAttribute('class', 'character-image')

      //  let userFamily = document.createElement('h1')
      //  userFamily.innerText = data[i].family

       // let userTitle = document.createElement('h3')
        //userTitle.innerText = data[i].title
        
        newUser.appendChild(userImage)
        //newUser.appendChild(userFamily)
      //  newUser.appendChild(userTitle)
        container.appendChild(newUser)
    }
}



