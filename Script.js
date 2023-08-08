document.addEventListener('DOMContentLoaded', () => {
	let input = document.getElementById('InputBox');
	let buttons = document.querySelectorAll('button');
  
	let string = "";
	buttons.forEach(button => {
	  button.addEventListener('click', (e) => {
		const buttonText = e.target.innerHTML;
  
		if (buttonText === '=') {
		  try {
			const result = evaluateExpression(string);
			input.value = result;
			string = result.toString();
		  } catch (error) {
			input.value = 'Error';
			string = "";
		  }
		} else if (buttonText === 'AC') {
		  string = "";
		  input.value = string;
		} else if (buttonText === 'DEL') {
		  string = string.slice(0, -1); 
		  input.value = string;
		} else {
		  string += buttonText;
		  input.value = string;
		}
	  });
	});
  });
  
  function evaluateExpression(expression) {
	return eval(expression);
  }
  