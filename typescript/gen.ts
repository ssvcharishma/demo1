// This function takes array of any type that 
// you determine while calling the function
function getArray<Type>(array: Type[]) {

	// Do some operations
	return array;
}

// We call the function
const arrayOfStrings = getArray < string > ([
	"John", "Sam", "Arnold"])
console.log(arrayOfStrings)