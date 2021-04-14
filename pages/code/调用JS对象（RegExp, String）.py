from browser import document
import javascript

def change(event):
    s = javascript.String.new("abracadabra")
    document["zone17"].text = s.replace(javascript.RegExp.new("a", "g"), "i")

document["button17"].bind("click", change)