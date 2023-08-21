const stack = []

const addMiddleware = (middleware) => {
  stack.push(middleware)
}

const runMiddleware = (index, context, newValue) => {
  const middleware = stack[index]
  if (middleware) {
    return middleware(newValue || context, (nextValue) =>
      runMiddleware(index + 1, nextValue || context)
    )
  }
}

const execute = (context) => {
  const initialIndex = 0
  runMiddleware(initialIndex, context)
}

export { addMiddleware, execute }
