



function add(n1,n2){
	return n1+n2;
}
function sub(n1,n2){
	return n1-n2;
}
function div(n1,n2){
	return n1/n2;
}
function multi(n1,n2){
	return n1*n2;
}



function cal(){
	let n1 = parseFloat(document.getElementById('n1').value);
    let n2 = parseFloat(document.getElementById('n2').value);
    let  oper=  document.getElementById('operators').value;
	if(oper === '+'){
		document.getElementById('result').value = add(n1,n2);
	}
    if(oper === '-'){
		document.getElementById('result').value = sub(n1,n2);
	}
	if(oper === '/'){
		document.getElementById('result').value = div(n1,n2);
	}
	if(oper === '*'){
		document.getElementById('result').value = multi(n1,n2);
	}

}



