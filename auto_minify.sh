#!/bin/bash
#             _                     _       _  __       
#  __ _ _   _| |_ ___     _ __ ___ (_)_ __ (_)/ _|_   _ 
# / _` | | | | __/ _ \   | '_ ` _ \| | '_ \| | |_| | | |
#| (_| | |_| | || (_) |  | | | | | | | | | | |  _| |_| |
# \__,_|\__,_|\__\___/___|_| |_| |_|_|_| |_|_|_|  \__, |
#                   |_____|                       |___/ 
#
#author: Mehmet Ümit Özden

# Add whatever file extension you want to minify
html_path="*.html"
css_path="assets/css/*.css"
js_path="assets/js/*.js"
files="$html_path $css_path $js_path"

# Wildcards used for simplicity
for file in $files; do if [[ "$file" != *'.min'* ]]; then minify $file > $(echo $file | awk  -F '.' '{printf $1 ".min." $2}') ; fi; done
 
