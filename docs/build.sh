#!/bin/bash

# simply appends necessary JS to SQBS-generated HTML files
# usage: ./build.sh [filename]
# where [filename] is the base name for the HTML files

declare FILENAME=$1

# only keep team standings and team detail
declare -a suffixes=("games"
                     "individuals"
                     "playerdetail"
                     "rounds"
                     "statkey")
for sfx in "${suffixes[@]}"; do
  rm -f "${FILENAME}_${sfx}.html"
done

# append JS, CSS, and media query to the files we keep
declare -a keep=("standings" "teamdetail")
for sfx in "${keep[@]}"; do
  sed -i '4 c <script src="sqbs.js"></script>' "${FILENAME}_${sfx}.html"
  sed -i '4 a <link rel="stylesheet" type="text/css" href="sqbs.css">' \
          "${FILENAME}_${sfx}.html"
  sed -i '2 a <meta charset="utf-8">' "${FILENAME}_${sfx}.html"
  sed -i '3 a <meta name="viewport" content="width=device-width,initial-scale=1">' "${FILENAME}_${sfx}.html"
  sed -i '1s/^/<!DOCTYPE html> \n/' "${FILENAME}_${sfx}.html"
  sed -i '2 c <HTML lang="en">' "${FILENAME}_${sfx}.html"
done



