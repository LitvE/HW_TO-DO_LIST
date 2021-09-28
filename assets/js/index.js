let counter = 0;

const buttonElement1 = document.querySelector('.plusBtn');
const buttonElement2 = document.querySelector('.clear_All');

const inputElement = document.querySelector('input[type = "text"]');

const ulElement = document.querySelector('#list');

const spanElem = document.getElementById('counter');
spanElem.innerText = spanElem.textContent = counter;

buttonElement1.addEventListener('click', function(e){addLiElement();});

buttonElement2.addEventListener('click', function(e){deleteAllElements();});


function addLiElement(){
    let newDiv = document.createElement('div');
    let newLi = document.createElement('li');
    let newCheckBox = document.createElement('input');
    newCheckBox.setAttribute("type", "checkbox");
    let newP = document.createElement('p');
    let newButton = document.createElement('button');

    let imgElem = document.createElement('img');
    imgElem.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj0mrDz03JpWimZis198Glo0lQqGV0WJsdJA&usqp=CAU');
    newButton.append(imgElem);
    newButton.addEventListener('click', function(e){deleteLiElement()});
    newP.append(inputElement.value);
    newDiv.append(newCheckBox, newP, newButton);
    newDiv.classList.add('liStyle');
    newLi.append(newDiv);
    ulElement.append(newLi);
    counter++;
    inputElement.value = '';
    spanElem.innerText = spanElem.textContent = counter;
}


function deleteLiElement(){
    const inputsCollection = document.querySelectorAll('li>div>input[type="checkbox"]');

    for (let elem of inputsCollection){
        if(elem.checked){
            let liElem = elem.parentNode.parentNode;
            liElem.remove();
            counter--;
            spanElem.innerText = spanElem.textContent = counter;
        }
    };
}

function deleteAllElements(){
    const listsCollection2 = document.querySelectorAll('li');

    for (let li of listsCollection2){
        li.remove();
    };

    counter = 0;
    spanElem.innerText = spanElem.textContent = counter;
}