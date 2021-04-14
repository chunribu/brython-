from browser import document, window
from browser.html import TABLE, TR, TD, INPUT, BUTTON

zone = document["zone_ls"]

"""Test if the browser supports local storage"""
try:
    storage = window.localStorage
    storage.setItem("x", "x")
    storage.removeItem("x")
except:
    storage = None

def action(ev):
    """User clicked on "add" or "remove" button"""
    button = ev.target
    row = button.closest("TR")
    if button.text == "remove":
        key = row.get(selector="TD")[0].text
        storage.removeItem(key)
    else:
        key, value = [x.value for x in row.get(selector="INPUT")]
        if key.strip():
            storage.setItem(key, value)
    # refresh table
    show()

def update_value(ev):
    """If a value field has been modified, update storage"""
    row = ev.target.closest("TR")
    key = row.get(selector="TD")[0].text
    value = row.get(selector="INPUT")[0].value
    storage.setItem(key, value)

def show(*args):
    """Shows the data stored locally, add buttons to add / remove items"""
    zone.clear()

    if storage is None:
        zone <= "No local storage for this browser"
        return

    table = TABLE()
    for i in range(storage.length):
        key = storage.key(i)
        value = storage.getItem(key)
        value_field = INPUT(value=value)
        value_field.bind("change", update_value)
        table <= TR(TD(key) + TD(value_field)+
            TD(BUTTON("remove", Class="btn-ls")))

    table <= TR(TD(INPUT()) + TD(INPUT()) +
        TD(BUTTON("add", Class="btn-ls")))

    zone <= table

    for button in document["zone_ls"].get(selector="button"):
        button.bind("click", action)

document["button_ls"].bind("click", show)