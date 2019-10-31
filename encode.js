var encode = (number) => {
	const str = '' + number;


	let occ = 0;
	let digit , res = '';
	for(let i = 0; i < str.length; i++) {
		if( i === 0) {
			occ = 1;
			digit = str[i];
			
		}

		if(i !== 0 && digit === str[i]) {
			occ++;
		} 
		if(digit !== str[i]) {
			res += occ + digit;
			occ = 1;
			digit = str[i];
		}

		if(i === str.length - 1) {
			res += occ + digit;
		}
	}

	return parseInt(res, 10);


}

module.exports = encode;
