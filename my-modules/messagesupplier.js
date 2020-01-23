function newMessage() {
    let yourText=document.getElementById('message');
    let listData=yourText.value.split('\n');

    let listContainer=document.getElementById('list'),
        listElement=document.createElement("ul");
    listContainer.appendChild(listElement);

    let numberOfListItems=listData.length;
    let listItem;
    for(let i=0; i<numberOfListItems; ++i){
        listItem=document.createElement("li");
        listItem.innerHTML=listData[i];
        listElement.appendChild(listItem);
    }
}
module.exports = newMessage;