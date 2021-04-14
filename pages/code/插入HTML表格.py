from browser import document
from browser.html import TABLE, TR, TH, TD

def insert_table(event):
    table = TABLE()

    # header row
    table <= TR(TH(f"Column {i}") for i in range(5))

    # table rows
    for row in range(3):
        table <= TR(TD(f"Cell {row}-{i}") for i in range(5))

    document["zone7"].clear()
    document["zone7"] <= table

document["button7"].bind("click", insert_table)