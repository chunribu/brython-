from browser import document, html

logo = "https://www.python.org/static/community_logos/python-logo-master-v3-TM.png"

def insert_image(event):
    document["zone9"].clear()
    document["zone9"] <= html.IMG(src=logo, height=50)

document["button9"].bind("click", insert_image)