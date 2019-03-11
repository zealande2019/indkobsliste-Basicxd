document.getElementById('submitBtnUsund').addEventListener("click", addVare);
document.getElementById('submitBtnSund').addEventListener("click", addVare2);

let elementInput = document.getElementById('nyvare');


function addVare()
{
    let myText = (<HTMLInputElement>elementInput).value;
    
    let usundListe = document.getElementById('listeUsund');

    let newLi = document.createElement('li');
    let newText = document.createTextNode(myText)
    newLi.appendChild(newText);
    newLi.setAttribute('class', 'usundt');

    usundListe.appendChild(newLi);

}

function addVare2()
{
    let myText = (<HTMLInputElement>elementInput).value;
    
    let usundListe = document.getElementById('liste');

    let newLi = document.createElement('li');
    let newText = document.createTextNode(myText)
    newLi.appendChild(newText);
    newLi.setAttribute('class', 'sundt');

    usundListe.appendChild(newLi);

}

let elementsLi = document.getElementById('liste').addEventListener('click',function(e){
    let clikElement = (<HTMLInputElement>e.target);

    if(e.target && (clikElement).nodeName == "LI")
      {
          console.log(clikElement.id + " was clicked")
          clikElement.setAttribute('hidden','true');
      }
    
});;




document.getElementById('unhideBtn').addEventListener("click",noHide);

function noHide(){
     let liElements = document.getElementById('liste').children;

     for(let i=0;i < liElements.length;i++)
     {
         let eh = liElements[i].getAttribute('hidden'); 
         if( eh == 'true')
         {
             liElements[i].removeAttribute('hidden');
         }      
     }
 }






