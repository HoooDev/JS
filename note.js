function makeObj(key, val) {
	return {
		[key] : val,
	}
}
const obj = makeObj('나이', 26)

console.log(obj)