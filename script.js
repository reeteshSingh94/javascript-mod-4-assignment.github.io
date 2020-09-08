var names=["Priyanka","Reetesh","Jitendra","Butler","Jignesh","james"];
console.log(names)
for (var i = 0; i < names.length; i++) {
	var subName=names[i].split("");
	if(subName[0]=="J" || subName[0]=="j"){
		console.log("Goodbye "+names[i]);
	}
	else{
		console.log("Hello "+names[i]);
	}
}
