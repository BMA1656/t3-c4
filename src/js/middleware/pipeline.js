const stack = [];

const addMiddleware = (middleware) => {
  stack.push(middleware);
  console.log("midstack", stack)
};

const runMiddleware = (index, context) => {
  const middleware = stack[index];

  if (middleware) {
    return middleware(context, () => runMiddleware(index + 1, context));
  }
};

const execute = (context) => {
  const initialIndex = 0;

  runMiddleware(initialIndex, context);
};

export {
  addMiddleware,
  execute
};