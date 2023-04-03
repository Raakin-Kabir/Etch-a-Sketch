function hover(div){
    div.style.background = "blue";
}

function $2(x) {
    return document.getElementById(x);
  }


function hover2(div){
    div.style.background = "white";
}

function wipeOut(){
    let grid = document.getElementById("bigGrid");
    let node = grid.firstChild
    while (node){
        grid.removeChild(node);
        node = grid.firstChild;
    }
    /* Now that they are all removed, add some using a prompt!!! */
    let n = prompt("How many rows would you like?");
    grid.style.setProperty('grid-template-columns', 'repeat(' + n + ', 1fr)');
    for (let i = 0; i < n; i++){
        for (let j = 0; j < n; j++){
            let div = document.createElement("div");
            div.class = "grid";
            div.style.background = "white";
            div.style.outline = "solid";
            div.style.margin = "0px";
            div.addEventListener("mouseover", function() {
                hover(div);
            });
            div.addEventListener("click", function(){
                hover2(div);
            });
            let width = 500/n;
            let height = 500/n;
            div.style.width = width.toString()+"px";
            div.style.height = height.toString()+"px";
            $2("bigGrid").append(div);
        }
    }
}


let size = 13;
for (let i = 0; i < size; i++){
    for (let j = 0; j < size; j++){
        let div = document.createElement("div");
        div.class = "grid";
        div.style.background = "white";
        div.style.outline = "solid";
        div.style.margin = "0px";
        div.addEventListener("mouseover", function() {
            hover(div);
        });
        div.addEventListener("click", function(){
            hover2(div);
        });
        let width = 500/size;
        let height = 500/size;
        div.style.width = width.toString()+"px";
        div.style.height = height.toString()+"px";
        $2("bigGrid").append(div);
    }
}


