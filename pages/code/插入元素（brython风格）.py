from browser import document, html

element = document["zone6"]
nb = 0

def change(event):
    global nb
    element <= html.B(f" {nb}")
    nb += 1

document["button6"].bind("click", change)