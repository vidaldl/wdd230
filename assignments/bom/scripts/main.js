let chapterCount = 0;
document.getElementById("addChapter").addEventListener("click", function() {
    let ul = document.getElementsByClassName("list")[0];

    let li = document.createElement("li");
    let input =document.getElementById("favchap")
    let val = input.value;

    let delButton = document.createElement("button");
    delButton.classList.add("del-button");
    delButton.appendChild(document.createTextNode("X"));
    
    li.setAttribute("id", "fav-chapter-"+ chapterCount);
    li.appendChild(document.createTextNode(val));
    li.appendChild(delButton);

    ul.appendChild(li);
    chapterCount++;


    let liItems = document.getElementsByClassName("del-button");
    if (liItems.length > 0) {
        for (var i = 0; i < liItems.length; i++) {
            document.getElementById("fav-chapter-"+i).addEventListener("click", function() {
                let parent = this.parentNode;
                parent.removeChild(this);
                chapterCount--;
                
            });
            
        }
    }

    input.value = "";
    input.focus();
    

});






