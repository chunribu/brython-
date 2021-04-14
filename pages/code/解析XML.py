from browser import document, window, html
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

document["button18"].bind("click", show_xml)