interface props<T extends {id:number}>{
	data:T[]
}

// Here the object must have id property
interface objectProps{
	id:number,
	name:string,
	SN:number
}

// Passing objectProps as a type containing id
let customData : props<objectProps> =
	{data:[{id:51,name:"cherry",SN:4324342}]}

console.log(customData);
