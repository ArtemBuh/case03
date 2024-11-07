const inpedname = document.getElementById('edname');
const inpedmail = document.getElementById('edmail');
var checkRE = /^[а-яА-Я]+\s{0,1}[а-яА-Я]*$/;
var mailRE = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

if (inpedname.value.length==0) { 
	inpedname.setCustomValidity('Необходимо ввести имя');
} else if (! checkRE.test(inpedname.value)) {
	inpedname.setCustomValidity('Имя на русском, например: Иван или Иван Иванов');
} else {
	inpedname.setCustomValidity('');
}

if (inpedmail.value.length==0) { 
	inpedmail.setCustomValidity('Необходимо ввести e-mail');
} else if (! mailRE.test(inpedmail.value)) {
	inpedmail.setCustomValidity('Введите корректный e-mail');
} else {
	inpedmail.setCustomValidity('');
}

inpedname.addEventListener('input', function() {
    var inputValue = inpedname.value;
    if (inpedname.value.length==0) { 
        inpedname.setCustomValidity('Необходимо ввести имя');
	} else if (! checkRE.test(inputValue)) {
		inpedname.setCustomValidity('Имя на русском, например: Иван или Иван Иванов');
	} else {
        inpedname.setCustomValidity('');
    }
});

inpedmail.addEventListener('input', function() {
    var inputValue = inpedmail.value;
	if (inpedmail.value.length==0) { 
		inpedmail.setCustomValidity('Необходимо ввести e-mail');
	} else if (! mailRE.test(inputValue)) {
		inpedmail.setCustomValidity('Введите корректный e-mail');
	} else {
		inpedmail.setCustomValidity('');
	}
});
