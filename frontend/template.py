import json
import os
import re


def templateize():
    """
    converts react build/index.html into a django template
    """

    settings = {
        "index_path": "./build/index.html",
        "manifest_path": "./build/asset-manifest.json",
    }

    def loadstatic(settings=settings, line="{% load static %}"):

        file_name = settings.get("index_path")

        dummy_file = file_name + ".bak"

        with open(file_name, "r") as read_obj, open(dummy_file, "w") as write_obj:

            write_obj.write(line + "\n")

            for line in read_obj:
                write_obj.write(line)

        os.remove(file_name)
        os.rename(dummy_file, file_name)

    def replace(file_path, text, subs, flags=0):

        with open(file_path, "r+") as file:
            # read the file contents
            file_contents = file.read()
            text_pattern = re.compile(re.escape(text), flags)
            file_contents = text_pattern.sub(subs, file_contents)
            file.seek(0)
            file.truncate()
            file.write(file_contents)

    manifest = open(settings["manifest_path"])
    data = json.load(manifest)
    css, js = data["entrypoints"]

    replace_css = "/" + css
    replace_js = "/" + js

    static_css = f"{{% static '{css[7:]}' %}}"
    static_js = f"{{% static '{js[7:]}' %}}"

    replace(settings["index_path"], replace_css, static_css)
    replace(settings["index_path"], replace_js, static_js)

    loadstatic()


if __name__ == "__main__":
    templateize()
