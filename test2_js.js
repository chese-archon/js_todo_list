const inp = document.getElementById("new_note"), btn = document.getElementById("new_note_btn");

btn.addEventListener("click", function() {
    const inp_val = inp.value;
    if (inp_val === "") {alert("Nothing to add");}
    else {
        //alert(inp_val);
        var ul = document.getElementById("list");
        var li = document.createElement("li");
        //add del to new el
        var new_del_btn = document.createElement("button");
        new_del_btn.textContent = "Del";
        new_del_btn.classList.add("del_btn");
        new_del_btn.onclick = function(event) {
            var li_elem = event.target.parentNode, ul_elem = li_elem.parentNode;
            ul_elem.removeChild(li_elem)}
        //
        li.appendChild(document.createTextNode(inp_val));
        li.appendChild(new_del_btn);
        ul.appendChild(li);
        }
    inp.value = "";
})

const all_ul = document.querySelector("ul");
all_ul.addEventListener("click", function(ev) {
        //alert(this.textContent);
        if (ev.target.tagName === 'LI') {
            ev.target.classList.toggle('checked');
          }
        },
false);

//to iter in li and add del button
const li_elem = document.getElementsByTagName("li");

for (let i=0; i < li_elem.length; i++) {
    var new_del_btn = document.createElement("button");
    new_del_btn.textContent = "Del";
    new_del_btn.classList.add("del_btn");
    new_del_btn.onclick = function(event) {
        var li_elem = event.target.parentNode, ul_elem = li_elem.parentNode;
        ul_elem.removeChild(li_elem)
    }
    li_elem[i].appendChild(new_del_btn);//add btn to i
}

/*var del_btns = document.querySelectorAll(".del_btn");
del_btns.forEach(btn => {
    btn.addEventListener("click", function() {
        //get li from btn
        var li_elem = btn.parentNode, ul_elem = li_elem.parentNode;
        ul_elem.removeChild(li_elem);
    })
})*/