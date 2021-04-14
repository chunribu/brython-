var demos = [
        {
            "id":"弹出消息框",
            "code":`from browser import document, alert

def hello(ev):
    alert("Hello !")

document["button_alert"].bind("click", hello)`,
            "info":"browser是特定于Brython的模块，该模块定义用于与页面进行交互的对象。<br>document是表示HTML文档的对象;document [element_id]是属性ID等于element_id的元素。在此示例中，document [“ button0”]是对您单击的按钮的引用。<br>bind（event，function）是元素的方法，它带有两个参数，即事件的名称和事件在元素上发生时要调用的函数。<br>当用户单击元素时，此事件称为“click”。该代码意味着：当用户单击该元素时，调用函数hello。该函数接受一个参数，一个代表事件的对象。<br>alert用于显示小的弹出窗口。"
        },{
            "id":"弹出消息窗口",
            "code":`from browser import document
from browser.widgets.dialog import InfoDialog

def hello(ev):
    InfoDialog("Demo", "Hello world !", left=ev.x, top=ev.y)

document["button_dialog"].bind("click", hello)`,
            "info":"可以使用内置模块browser.widgets.dialog提供的对话框来代替浏览器alert框。<br>此处，该框通过关键字参数left和top定位在鼠标位置（由事件对象的属性x和y赋予）。"
        },{
            "id":"改变元素内文字",
            "code":`from browser import document

def change(event):
    document["zone1"].textContent = "New content"

document["button1"].bind("click", change)`,
            "info":"元素的属性和方法在文档对象模型（DOM）中进行了描述，文档对象模型（DOM）已有大量文档（例如，Mozilla）。<br>textContent是Node实例的属性；它用于获取或设置元素的文本内容。<br>Brython支持所有DOM方法和属性；对于文本内容，它提供了一个快捷方式，即text，因此也可以编写函数体：<br>  def change(event):<br>        document['zone1'].text = 'New Content'"
        },{
            "id":"改变元素样式（style）",
            "code":`from browser import document

element = document["zone2"]

def change(event):
    style = element.style
    color = style.color
    style.color = "#cc8" if color == "blue" else "blue"
    style.backgroundColor = "gray" if color == "blue" else "#aad"
    style.fontWeight = "bold" if color == "blue" else "normal"
    style.fontSize = "18px" if color == "blue" else "14px"

document["button2"].bind("click", change)`,
            "info":"元素具有一种属性样式，其本身具有（除其他外）属性颜色（文本颜色），backgroundColor（背景颜色），fontWeight（“粗体”或“普通”），fontSize（字母大小，以像素为单位），等等在此处查找有关CSS的参考。请注意，带有连字符的属性名称是CSS，是用Python代码在camelCase中编写的：例如，要设置CSS属性background-color，语法是style.backgroundColor"
        },{
            "id":"改变元素样式（class）",
            "code":`from browser import document

element = document["zone_class"]
element.classList.add("down")

def change_class(event):
    if "up" in element.classList:
        element.classList.remove("up")
        element.classList.add("down")
    else:
        element.classList.remove("down")
        element.classList.add("up")

document["button_class"].bind("click", change_class)`,
            "info":"元素具有属性classList，其值在元素的属性类中设置。它是DOMTokenList类的实例，该类支持方法add（）和remove（）。"
        },{
            "id":"元素的显示和隐藏",
            "code":`from browser import bind, document

@bind("#button3", "click")
def change(event):
    display = document["zone3"].style.display
    document["zone3"].style.display = "inline" if display == "none" else "none"`,
            "info":"display是样式的另一个属性。将其设置为“ none”将隐藏该元素。请注意，在此示例中，我们使用语法的变体将事件绑定到函数。此处使用的是模块浏览器中定义的函数绑定，而不是我们之前看到的使用DOM元素的方法绑定的形式。它用作回调函数的装饰器，并带有两个参数：<br>-要绑定的元素的标识符：元素的引用或CSS选择器（此处，选择器“＃button3”指的是按钮）<br>-事件名称"
        },{
            "id":"插入元素（原生风格）",
            "code":`from browser import document, html

element = document.getElementById("zone6_std")
nb = 0

def change(event):
    global nb
    elt = document.createElement("B")
    txt = document.createTextNode(f" {nb}")
    elt.appendChild(txt)
    element.appendChild(elt)
    nb += 1

document["button6_std"].addEventListener("click", change)`,
            "info":"本示例使用标准的DOM方法创建元素（document.createElement（），createTextNode（））并将其附加到其他元素或文档（Node.appendChild（））。注意，在最后一行，我们使用标准的DOM方法EventTarget.addEventListener（）：在其他示例中使用的方法bind（）是特定于Brython的。"
        },{
            "id":"插入元素（brython风格）",
            "code":`from browser import document, html

element = document["zone6"]
nb = 0

def change(event):
    global nb
    element <= html.B(f" {nb}")
    nb += 1

document["button6"].bind("click", change)`,
            "info":"为了创建DOM元素，Brython提供了模块browser.html。它用所有大写的有效HTML标签的名称定义类;html.B（“ message”）创建元素\<B\> message \</ B\>为了将元素包含在另一个元素中，Brython使用运算符\<=：将其视为向左箭头，而不是“小于或等于”。运算符的使用更加简洁，避免了必须使用函数调用。"
        },{
            "id":"元素前插入",
            "code":`from browser import document, html

ul = document["zone61"].get(selector="ul")[0]
element = ul.get(selector="li")[0]
nb = 0

def change(event):
    global nb
    nb += 1
    ul.insertBefore(html.LI(f"element before {nb}"), element)

document["button61"].bind("click", change)`,
            "info":""
        },{
            "id":"元素后插入",
            "code":`from browser import document, html

ul = document["zone62"].get(selector="ul")[0]
element = ul.get(selector="li")[0]
nb = 0

def change(event):
    global nb
    nb += 1
    ul.insertBefore(html.LI(f"element after {nb}"), element.nextSibling)

document["button62"].bind("click", change)`,
            "info":""
        },{
            "id":"插入元素带属性",
            "code":`from browser import document, html

element = document["zone_elt_attr"]

def insert(event):
    element <= html.SPAN("new text",
        style=dict(color="red", paddingLeft="1em"),
        Class="down")

document["button_elt_attr"].bind("click", insert)`,
            "info":""
        },{
            "id":"插入HTML表格",
            "code":`from browser import document
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

document["button7"].bind("click", insert_table)`,
            "info":""
        },{
            "id":"插入下拉菜单",
            "code":`from browser import document, html
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

document["button12"].bind("click", insert_dropdown)`,
            "info":""
        },{
            "id":"canvas画图",
            "code":`from browser import document, html
import math

canvas = document["zone8"]
ctx = canvas.getContext("2d")

x = 20

def draw(event):
    global x
    ctx.beginPath()
    ctx.arc(x, 25, 15, 0, 2 * math.pi)
    x += 15
    ctx.stroke()

document["button8"].bind("click", draw)`,
            "info":""
        },{
            "id":"插入图片",
            "code":`from browser import document, html

logo = "https://www.python.org/static/community_logos/python-logo-master-v3-TM.png"

def insert_image(event):
    document["zone9"].clear()
    document["zone9"] <= html.IMG(src=logo, height=50)

document["button9"].bind("click", insert_image)`,
            "info":""
        },{
            "id":"获取表单结果",
            "code":`from browser import document, html

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

document["button16"].bind("click", show_values)`,
            "info":""
        },{
            "id":"使用CSS选择器",
            "code":`from browser import document, html

def change(event):
    # clear the zone
    document["zone13"].clear()

    # get a list of all BUTTON elements
    buttons = document.select("button")
    document["zone13"] <= "On this page there are {} buttons ".format(len(buttons))

    # get a list of all tags with class "zone"
    zones = document.select(".zone")
    document["zone13"] <= "and {} elements with class 'zone'".format(len(zones))

document["button13"].bind("click", change)`,
            "info":""
        },{
            "id":"旋转元素",
            "code":`from browser import document, html

moving = document["rot14"]
angle = 10

def change(event):
    global angle
    moving.style.transform = f"rotate({angle}deg)"
    angle += 10

document["button14"].bind("click", change)`,
            "info":""
        },{
            "id":"添加动画",
            "code":`from browser import document, window

moving = document["rot15"]
x = 0
dx = 3
run = None

def change(event):
    global run
    if run is None:
        # start animation
        animloop(1)
    else:
        # stop animation
        window.cancelAnimationFrame(run)
        run = None

document["button15"].bind("click", change)

def render():
    global x, dx
    moving.style.transform = "translate({}px,0)".format(x)
    x += dx
    if x > document["zone15"].offsetWidth-moving.offsetWidth:
        dx = -dx
        moving.html = "◄" # left triangle
    elif x <= 0:
        dx = -dx
        moving.html = "►" # right triangle

def animloop(t):
    global run
    run = window.requestAnimationFrame(animloop)
    render()`,
            "info":""
        },{
            "id":"拖拽移动",
            "code":`from browser import document

class ElementMove:

    def __init__(self, moving):
        """Make "moving" element movable with the mouse"""
        self.moving = moving
        self.is_moving = False
        self.moving.bind("mousedown", self.start)
        self.moving.bind("mouseup", self.stop)
        moving.style.cursor = "move"

    def start(self, event):
        """When user clicks on the moving element, set boolean is_moving
        to True and store mouse and moving element positions"""
        self.is_moving = True
        self.mouse_pos = [event.x, event.y]
        self.elt_pos = [self.moving.left, self.moving.top]
        document.bind("mousemove", self.move)
        # prevent default behaviour to avoid selecting the moving element
        event.preventDefault()

    def move(self, event):
        """User moves the mouse"""
        if not self.is_moving:
            return

        # set new moving element coordinates
        self.moving.left = self.elt_pos[0] + event.x - self.mouse_pos[0]
        self.moving.top = self.elt_pos[1] + event.y - self.mouse_pos[1]

    def stop(self, event):
        """When user releases the mouse button, stop moving the element"""
        self.is_moving = False
        document.unbind("mousemove")

ElementMove(document["moving"])`,
            "info":""
        },{
            "id":"使用local storage",
            "code":`from browser import document, window
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

document["button_ls"].bind("click", show)`,
            "info":""
        },{
            "id":"发送Ajax请求",
            "code":`from browser import document, ajax

url = "http://api.open-notify.org/iss-now.json"
msg = "Position of the International Space Station at {}: {}"

def complete(request):
    import json
    import datetime
    data = json.loads(request.responseText)
    position = data["iss_position"]
    ts = data["timestamp"]
    now = datetime.datetime.fromtimestamp(ts)
    document["zone10"].text = msg.format(now, position)

def click(event):
    req = ajax.ajax()
    req.open("GET", url, True)
    req.bind("complete", complete)
    document["zone10"].text = "waiting..."
    req.send()

document["button10"].bind("click", click)`,
            "info":""
        },{
            "id":"操作本地文件",
            "code":`from browser import bind, window, document

load_btn = document["rtfile1"]
save_btn = document["save_file"]

@bind(load_btn, "input")
def file_read(ev):

    def onload(event):
        """Triggered when file is read. The FileReader instance is
        event.target.
        The file content, as text, is the FileReader instance's "result"
        attribute."""
        document['rt1'].value = event.target.result
        # display "save" button
        save_btn.style.display = "inline"
        # set attribute "download" to file name
        save_btn.attrs["download"] = file.name

    # Get the selected file as a DOM File object
    file = load_btn.files[0]
    # Create a new DOM FileReader instance
    reader = window.FileReader.new()
    # Read the file content as text
    reader.readAsText(file)
    reader.bind("load", onload)

@bind(save_btn, "mousedown")
def mousedown(evt):
      """Create a "data URI" to set the downloaded file content
      Cf. https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
      """
      content = window.encodeURIComponent(document['rt1'].value)
      # set attribute "href" of save link
      save_btn.attrs["href"] = "data:text/plain," + content`,
            "info":""
        },{
            "id":"在console中使用brython",
            "code":`from browser import document

document["button5"].bind("click", lambda ev: print("Hello !"))`,
            "info":""
        },{
            "id":"解析XML",
            "code":`from browser import document, window, html
parser = window.DOMParser.new()

def show(node, container):
    if hasattr(node, "tagName"):
        container <= html.STRONG(node.tagName)
        ul = html.UL()
        container <= ul
        for child in node.childNodes:
            show(child, ul)
    elif node.text.strip():
        container <= html.LI(node.text)

def show_xml(ev):
    # XML source is in a hidden element "catalog" in this page
    src = document["catalog"].html
    tree = parser.parseFromString(src, "application/xml")

    root = tree.firstChild

    show(root, document["zone18"])

document["button18"].bind("click", show_xml)`,
            "info":""
        },{
            "id":"调用JS对象（Date）",
            "code":`from browser import document
import javascript

def show_date(event):
    date = javascript.Date.new()
    document["zone11"].text = "{}-{:02}-{:02} at {:02}:{:02}:{:02}".format(
        date.getFullYear(), date.getMonth()+1, date.getDate(),
        date.getHours(), date.getMinutes(), date.getSeconds())

document["button11"].bind("click", show_date)`,
            "info":""
        },{
            "id":"调用JS对象（RegExp, String）",
            "code":`from browser import document
import javascript

def change(event):
    s = javascript.String.new("abracadabra")
    document["zone17"].text = s.replace(javascript.RegExp.new("a", "g"), "i")

document["button17"].bind("click", change)`,
            "info":""
        }
    ]
