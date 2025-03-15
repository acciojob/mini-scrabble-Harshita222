
document.getElementById('evaluatedText').addEventListener('input',function(){
	var text = this.value;
		document.getElementById('letterCount').textContent = text.length;
	})