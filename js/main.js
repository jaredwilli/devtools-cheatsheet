
// Overrides the injected script from cellphone carrier while phone is tethered
bmi_SafeAddOnload = null;


var sect = document.getElementsByTagName('section');

for (var i = 0; i < sect.length; i++) {
	var h2 = sect[i].querySelectorAll('h2');

	for (var j = 0; j < h2.length; j++) {
		console.log(h2[j]);

		h2[j].addEventListener('hover', hoverLink, false);
	}
}

function hoverLink(e) {
	console.log(e);
};