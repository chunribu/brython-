from browser import document

def change(event):
    document["zone1"].textContent = "New content"

document["button1"].bind("click", change)