from browser import bind, document

@bind("#button3", "click")
def change(event):
    display = document["zone3"].style.display
    document["zone3"].style.display = "inline" if display == "none" else "none"