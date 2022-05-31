const todoInputElem = document.querySelector('.todo-input');
const todoListElem = document.querySelector('.todo-list')
const completeAllBtnElem = document.querySelector('.complete-all-btn')
const leftItemElem = document.querySelector('.left-items')
let todos = []
let id = 0
let isAllCompleted = false

const setTodos = (newTodos) => {
	todos = newTodos
}

const getAllTodos = () => {
	return todos
}

const setIsAllCompleted = (bool) => {
	isAllCompleted = bool
}

const getActiveTodos = () => {
	return todos.filter(todo => todo.isCompleted === false)
}

const setLeftItems = () => {
	const leftTodos = getActiveTodos()
	leftItemElem.innerHTML = `${leftTodos.length} items left`
}

const completeAll = () => {
	completeAllBtnElem.classList.add('checked')
	const newTodos = getAllTodos().map(todo => ({ ...todo, isCompleted: true }))
	setTodos(newTodos)
}

const incompleteAll = () => {
	completeAllBtnElem.classList.add('checked')
	const newTodos = getAllTodos().map(todo => ({ ...todo, isCompleted: false }))
	setTodos(newTodos)
}

const getCompletedTodos = () => {
	return todos.filter(todo => todo.isCompleted === true)
}

const checkIsAllCompleted = () => {
	if (getAllTodos().length === getCompletedTodos().length) {
		setIsAllCompleted(ture)
		completeAllBtnElem.classList.add('checked')
	} else {
		setIsAllCompleted(false)
		completeAllBtnElem.classList.remove('checked')
	}
}
const onClickCompleteAll = () => {
	// 한줄 조건문으로 중괄호 생략
	if (!getAllTodos().length) return // 배열의 길이가 0 이면 리턴
	if (isAllCompleted) incompleteAll()
	else completeAll()
	setIsAllCompleted(!isAllCompleted)
	paintTodos()
	setLeftItems()
}

const appendTodos = (text) => {
	const newId = id++
	// const newTodos = getAllTodos().concat({id: newId, isCompleted: false, content: text})
	const newTodos = [...getAllTodos(), { id: newId, isCompleted: false, content: text }]
	setTodos(newTodos)
	checkIsAllCompleted()
	setLeftItems()
	// HTML에 추가된 할 일 그려주기
	paintTodos();
}

const deleteTodo = (todoId) => {
	// console.log(todoId)
	const newTodos = getAllTodos().filter(todo => todo.id !== todoId)
	setTodos(newTodos)
	setLeftItems()
	paintTodos()
}

const completeTodo = (todoId) => {
	const newTodos = getAllTodos().map(todo => todo.id === todoId ? { ...todo, isCompleted: !todo.isCompleted } : todo)
	setTodos(newTodos)
	paintTodos()
	setLeftItems()
	checkIsAllCompleted()
}

const updateTodo = (text, todoId) => {
	const currentTodos = getAllTodos()
	const newTodos = currentTodos.map(todo => todo.id === todoId ? ({ ...todo, content: text }) : todo)
	setTodos(newTodos)
	paintTodos()
}

const onDbclickTodo = (e, todoId) => {
	const todoElem = e.target
	const inputText = e.target.innerText
	// todoItemElem -> todoElem.parantNode -> todoElem의 부모 노드
	const todoItemElem = todoElem.parentNode
	const inputElem = document.createElement('input')
	inputElem.value = inputText
	inputElem.classList.add('edit-input')
	inputElem.addEventListener('keypress', (e) => {
		if (e.key === 'Enter') {
			updateTodo(e.target.value, todoId)
			document.body.removeEventListener('click', onClickBody)
		}

	})

	const onClickBody = (e) => {
		console.log(e)
		if (e.target !== inputElem) {
			todoItemElem.removeChild(inputElem)
			document.body.removeEventListener('click', onClickBody)
		}
	}
	document.body.addEventListener('click', onClickBody)
	todoItemElem.appendChild(inputElem)

}

const paintTodos = () => {
	todoListElem.innerHTML = null // todoListElem 요소 안의 HTML 초기화
	const allTodos = getAllTodos() // todos 배열 가져오기
	// todo item에 해당하는 HTML을 그려서 todo list에 추가하기
	allTodos.forEach(todo => {
		const todoItemElem = document.createElement('li')
		todoItemElem.classList.add('todo-item')

		const checkboxElem = document.createElement('div')
		checkboxElem.classList.add('checkbox')
		checkboxElem.addEventListener('click', () => completeTodo(todo.id))

		const todoElem = document.createElement('div')
		todoElem.classList.add('todo')
		todoElem.addEventListener('dblclick', (event) => onDbclickTodo(event, todo.id))
		todoElem.innerText = todo.content

		const delBtnElem = document.createElement('button')
		delBtnElem.classList.add('delBtn')
		delBtnElem.addEventListener('click', () => deleteTodo(todo.id))
		delBtnElem.innerText = 'X'

		if (todo.isCompleted) {
			todoItemElem.classList.add('checked')
			checkboxElem.innerText = '✔'
		}

		todoItemElem.appendChild(checkboxElem)
		todoItemElem.appendChild(todoElem)
		todoItemElem.appendChild(delBtnElem)

		todoListElem.appendChild(todoItemElem)
	})
}

const init = () => {
	todoInputElem.addEventListener('keypress', (e) => {
		if (e.key === 'Enter') {
			appendTodos(e.target.value); todoInputElem.value = '';
		}
	})
	completeAllBtnElem.addEventListener('click', onClickCompleteAll)
	setLeftItems()
}

init()
