from browser import document, alert

def hello(ev):
    alert("Hello !")

document["button_alert"].bind("click", hello)