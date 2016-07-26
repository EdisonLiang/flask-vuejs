#!/usr/bin/env python
# -*- coding:utf-8 -*-

from subprocess import call

from flask import Flask, render_template
app = Flask(__name__)


@app.route("/")
def hello():
    return render_template("index.html")

if __name__ == "__main__":
    call("npm run build", shell=True)
    app.run()
