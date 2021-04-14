from browser import document
from browser.widgets.dialog import InfoDialog

def hello(ev):
	InfoDialog("Demo", "Hello world !", left=ev.x, top=ev.y)

document["button_dialog"].bind("click", hello)