function validate() {
	var missing = []

	if($("#name").val()  == "")
		missing.push("name")
	if($("#email").val()  == "")
		missing.push(" email")
	if($("#message").val()  == "")
		missing.push(" message")

	if(missing.length == 0) {
		$("#errorMessage").css("color", "green")
		$("#errorMessage").html("Success!")
	} else{
		$("#errorMessage").css("color", "red")
		$("#errorMessage").html("You are missing: " + missing)
	}

}