from browser import document, html

def show_values(event):
    input = document["input16"].value
    select = document["select16"]
    option = select.options[select.selectedIndex].value
    text = document["textarea16"].value
    document["zone16"].clear()
    document["zone16"] <= (f"Value in INPUT field: {input}",
        html.BR(), f"Selected option: {option}",
        html.BR(), f"Value in TEXTAREA field: {text}"
        )

document["button16"].bind("click", show_values)