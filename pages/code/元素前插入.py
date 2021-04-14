from browser import document, html

ul = document["zone61"].get(selector="ul")[0]
element = ul.get(selector="li")[0]
nb = 0

def change(event):
    global nb
    nb += 1
    ul.insertBefore(html.LI(f"element before {nb}"), element)

document["button61"].bind("click", change)