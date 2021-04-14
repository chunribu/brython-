from browser import document, html

def change(event):
    # clear the zone
    document["zone13"].clear()

    # get a list of all BUTTON elements
    buttons = document.select("button")
    document["zone13"] <= "On this page there are {} buttons ".format(len(buttons))

    # get a list of all tags with class "zone"
    zones = document.select(".zone")
    document["zone13"] <= "and {} elements with class 'zone'".format(len(zones))

document["button13"].bind("click", change)