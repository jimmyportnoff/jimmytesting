
function log(r){
	console.log(r);
}

var arrayOfNumbers = [];

function findMax( arr ){
	// Kolla vilket värde som är högst egen funktion
	var tmp1 = 0;
	for (var i = 0; i<arr.length;i++) {
		if ( arr[i] > tmp1 ) {
			tmp1 = arr[i];
		}
	}
	return tmp1;
}

function findMax2( arr ){
	// Kolla vilket värde som är högst js funktion
	//Ytterliggare läsning: http://stackoverflow.com/a/21255326/2272319
	return Math.max.apply(null, arr);
}
function findMin( arr ){
	return Math.min.apply(null, arr);
}



function doStuff( arr ){
	var returnObject = {
		maxValue: '',
		maxValue2: 0,
		minValue: 0
	};
	// Lånat metod för jämförelse av array http://stackoverflow.com/a/4775737/2272319
	if ( Object.prototype.toString.call( arr ) !== '[object Array]' ) {
		return 'Not an array';
	}

	returnObject.maxValue = findMax( arr );
	returnObject.maxValue2 = findMax2( arr );
	returnObject.minValue = findMin( arr );

	return returnObject;
}

// log( doStuff(arrayOfNumbers) );

