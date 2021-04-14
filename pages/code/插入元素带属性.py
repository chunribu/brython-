from browser import document, html

element = document["zone_elt_attr"]

def insert(event):
    element <= html.SPAN("new text",
        style=dict(color="red", paddingLeft="1em"),
        Class="down")

document["button_elt_attr"].bind("click", insert)