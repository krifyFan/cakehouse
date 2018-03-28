var title = "样式A";

function setStyle() {
	if(title == "样式A") {
		title = "样式B";
	} else {
		title = "样式A";
	}

	var i, links;
	links = document.getElementsByTagName("link");
	for(i = 0; links[i]; i++) {
		if(links[i].getAttribute("rel").indexOf("style") != -1 && links[i].getAttribute("title")) {
			links[i].disabled = true;
		}
		if(links[i].getAttribute("title").indexOf(title) != -1) {
			links[i].disabled = false;
		}
	}
}

$(function() {
	$("input[name=email]").blur(function() {
		var test_email = /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/;
		if($("input[name=email]").val() == "") {
			alert("Please leave your email address");
			return false;
		} else if(!test_email.test($("input[name=email]").val())) {
			alert("Mailbox format is incorrect, please enter the correct mailbox");
			return false;
		}
	});
	$('.facebook').sharrre({
		share: {
			facebook: true
		},
		url: document.referrer,
		text: document.title,
		enableHover: false,
		enableTracking: true,
		click: function(api, options) {
			api.simulateClick();
			api.openPopup('facebook');
		}
	});
});