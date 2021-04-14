from browser import document, html

moving = document["rot14"]
angle = 10

def change(event):
    global angle
    moving.style.transform = f"rotate({angle}deg)"
    angle += 10

document["button14"].bind("click", change)