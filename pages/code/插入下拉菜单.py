from browser import document, html
from browser.widgets.dialog import InfoDialog

def show(event):
    dropdown = event.target
    num = dropdown.selectedIndex
    InfoDialog("Demo", "Selected: {}".format(dropdown.options[num].value))

def insert_dropdown(event):
    document["zone12"] <= "Your choice : "
    dropdown = html.SELECT(html.OPTION(f"Choice {i}") for i in range(5))
    dropdown.bind("change", show)
    document["zone12"] <= dropdown

document["button12"].bind("click", insert_dropdown)