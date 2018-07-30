(function() {
	// TODO from popup settings
	var settings = {
		offsetX         : 30,
		offsetY         : 30,
		width           : 100,
		height          : 20,
		color           : "#eee",
		backgroundColor : "#333",
		prepend         : "(",
		separator       : ", ",
		append          : ")",
	};

	var tooltip = document.createElement("div");
	document.body.appendChild(tooltip);

	tooltip.style.position        = "absolute";
	tooltip.style.textAlign       = "center";
	// tooltip.style.padding      = "3px";
	tooltip.style.borderRadius    = "3px";
	tooltip.style.fontFamily      = "monospace";
	tooltip.style.width           = settings.width + "px";
	tooltip.style.height          = settings.height + "px";
	tooltip.style.color           = settings.color;
	tooltip.style.backgroundColor = settings.backgroundColor;

	document.addEventListener("mousemove", function(e) {
		var x = (e.pageX + settings.offsetX);
		var y = (e.pageY + settings.offsetY);

		tooltip.innerHTML  = settings.prepend + e.pageX + settings.separator + e.pageY + settings.append;

		// by default the tooltip appears on the bottom right side of the
		// cursor. when curosr is near this corner of the browser the tooltip
		// gets moved above and to the left of the cursor
		if (x + settings.width + settings.offsetX >= window.innerWidth)
			x -= settings.width + 2 * settings.offsetX;
		if (y + settings.height + settings.offsetY >= window.innerHeight)
			y -= settings.height + 2 * settings.offsetY;

		tooltip.style.top  = y + "px";
		tooltip.style.left = x + "px";
	}, false);
} ());
