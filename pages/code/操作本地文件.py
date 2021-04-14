from browser import bind, window, document

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
      save_btn.attrs["href"] = "data:text/plain," + content