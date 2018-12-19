// help js : https://wiki.bananeatomic.fr/wiki/Casperjs

var resolver = require('./helper.js');
var casper = require('casper').create({
    verbose: true,
    logLevel: 'error',
	pageSettings: {
		webSecurityEnabled: false,
		userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:59.0) Gecko/20100101 Firefox/59.0"
  }
});

var url = 'https://www.eni-training.com/client_net/mediabook.aspx?idR=264669';

//To debug :

// casper.on("remote.message", function(msg){
//     this.echo("remote.msg: " + msg);
// });
//
// casper.on("resource.error", function(resourceError){
//     this.echo("res.err: " + JSON.stringify(resourceError));
// });
//
// casper.on("resource.requested", function(resource){
//     this.echo("res.req: " + JSON.stringify(resource));
// });


casper
    .start()
    .thenOpen(url, 
		function() {
			this.evaluate(
				function() {
					document.cookie = "MplusUserSettings=Lng=1; expires=Fri, 1 Aug 2100 20:00:00 UTC; path=/";
					document.cookie = "__rsaxc=; expires=Fri, 1 Aug 2100 20:00:00 UTC; path=/";
					document.cookie = "__hnwky=; expires=Fri, 1 Aug 2100 20:00:00 UTC; path=/";
					document.cookie = "cookiesession1=; expires=Fri, 1 Aug 2100 20:00:00 UTC; path=/";
					document.cookie = "ENI_Editions_Portail=Identifiant=; expires=Fri, 1 Aug 2100 20:00:00 UTC; path=/";						}
			);
		}
	)
    .thenOpen(url, 
		function() {
			var links = this.evaluate(
				function() {
					return Array.prototype.map.call(document.querySelectorAll('ul#Root li'), 
						function(link){
							return link.getAttribute('id');
						}
					);
				}
			);	
			this.each(links, 
				function(self, link) {
					var id=link.substring(2)
					var urlbase = 'https://www.eni-training.com/client_net/mediabook.aspx?idR=';
					var lien = urlbase.concat(id.toString());
					// May be useful to continue from last id
					if (Number(id) > 000000) {
						self.echo(lien);
						self.thenOpen(lien,
							function() {
								self.download("https://www.eni-training.com/client_net/pdfexport.aspx?exporttype=2", 'docs/DL' + id + '.pdf');
							}
						);
					}
				}
			);
		}
	)

    .run(
		function(){
			this.exit();
		}
	);
