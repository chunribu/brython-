from browser import document

element = document["zone2"]

def change(event):
    style = element.style
    color = style.color
    style.color = "#cc8" if color == "blue" else "blue"
    style.backgroundColor = "gray" if color == "blue" else "#aad"
    style.fontWeight = "bold" if color == "blue" else "normal"
    style.fontSize = "18px" if color == "blue" else "14px"

document["button2"].bind("click", change)