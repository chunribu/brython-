from browser import document, html

element = document.getElementById("zone6_std")
nb = 0

def change(event):
    global nb
    elt = document.createElement("B")
    txt = document.createTextNode(f" {nb}")
    elt.appendChild(txt)
    element.appendChild(elt)
    nb += 1

document["button6_std"].addEventListener("click", change)