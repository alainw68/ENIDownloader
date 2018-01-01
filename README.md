ENIDownloader
=============

Download a full PDF from Editions ENI.
It's fork project from [Nainterceptor PoC](https://github.com/Nainterceptor/ENIDownloader).

What is "Editions ENI" ?
------------------------

Editions ENI is a great company which sell some great books in french about technical subjects.

Why ?
-----

I want to read an ebook on my tablet/e-reader but I can't, because ENI want to "prevent" or "limit" piracy.
I have an account on ENI. So I have access to books and I can download a PDF. One by one for each chapter.
I can also read my book online through the website himself.
 
Now, I can download the book thanks to this PoC and read my book where I don't have Internet (like subways) without the manual download of ~120 files.

About the law...
----------------

In France, the copyright (called "Droit d'auteur") law has an exception called "private copy" ("Copie privée") :
> You may create a copy of something if the goal is a private usage. Two origins are public diffusion and bought things.
So, you are not able to use this script to publish a book on a hidden network :)

Requirements
------------

[NodeJs](https://nodejs.org/), and run `~/[...]/ENIDownloader-master $ npm install`.

You should have [cpdf](http://community.coherentpdf.com/). Please download the according executable **cpdf** file to your OS [cpdf-binaries](https://github.com/coherentgraphics/cpdf-binaries) at root.

Please clean **./docs** directory between two downloads.

Usage
-----

Sorry, this script is under development, but functional, I provide no interface at this time, and it will be simplified.

Steps :
1. Login to your eni-training, choose your book, copy and past some values in **./app.js**
- your **URL** in "url" var, **line 7**
- your cookie value __\__rsaxc__: **line 29**
- your cookie value __\__hnwky__: **line 30**
- your cookie value __ENI\_Editions_Portail__: **line 31**
2. Execute `~/[...]/ENIDownloader-master $ ./crawl.sh`
- Check pdf in **./docs/** directory. If a file is < than 3ko, crawl failed. Check the number in the file name, uncomment lines 43/47, change the number, and back to step 1 : URL can change for the same book.
3. Execute `~/[...]/ENIDownloader-master $ node ./merge.js` to merge all pdf files in a single file. 
4. Optionally, you can execute `~/[...]/ENIDownloader-master $ ./fix-footer.sh` to remove footer and add a right "Page x of x" :)

Contribution
-----

Being a padawan, all contributions will be welcome :)
