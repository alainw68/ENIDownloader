#!/usr/bin/env bash

./cpdf -crop "0mm 8mm 300mm 300mm" ./docs/doc.pdf -o doc_fixed.pdf
./cpdf -add-text "Page %Page sur %EndPage" -bottomright 30pt -font "Times-Roman" -font-size 9 doc_fixed.pdf -o doc_fixed.pdf
./cpdf -compress doc_fixed.pdf -o doc_fixed.pdf
<<<<<<< HEAD
echo "doc_fixed.pdf created :)"
=======
>>>>>>> ff07ac7724a2ee5f26f554ca5da4d587738b1258
