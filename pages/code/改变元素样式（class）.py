from browser import document

element = document["zone_class"]
element.classList.add("down")

def change_class(event):
    if "up" in element.classList:
        element.classList.remove("up")
        element.classList.add("down")
    else:
        element.classList.remove("down")
        element.classList.add("up")

document["button_class"].bind("click", change_class)