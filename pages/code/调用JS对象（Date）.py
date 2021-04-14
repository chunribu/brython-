from browser import document
import javascript

def show_date(event):
    date = javascript.Date.new()
    document["zone11"].text = "{}-{:02}-{:02} at {:02}:{:02}:{:02}".format(
        date.getFullYear(), date.getMonth()+1, date.getDate(),
        date.getHours(), date.getMinutes(), date.getSeconds())

document["button11"].bind("click", show_date)