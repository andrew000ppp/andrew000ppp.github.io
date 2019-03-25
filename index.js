/* var a = 10%8*3/2

//alert(a)

var arrayA = [1, 2, 5, 6, 10]

alert(arrayA)

arrayA.push(" NEW ELEMENT!!!!!!")

alert(arrayA)

alert(arrayA.slice(2))

arrayA.push(" HELLO!")

alert(arrayA)

alert(arrayA.sort())

var boo = false && true || !(true && true)

alert(boo)

if (a==3) {
	alert(true)
} else {
	alert(false)
}

function addSquares(x, y) {
	return(x*x + y*y)
}

alert(addSquares(2, 3))

function concat(str1, str2) {
	return(str1 + str2)
}

var newstring = concat("Hello ", "World")

alert(newstring)

function triProduct(x, y, z) {
	alert(x*y*z)
} 

function slide() {
	$("#div3").fadeToggle()
}

function change() {
	$("#p1").html("New text!")
	$("#p1").css("font-size", "80px")
	$("#p1").css("color", "red")
}

function alertValue() {
	alert($("#name").val())
}*/

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