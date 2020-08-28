function increment() {
  return {
    type: 'INCREMENT',
  };
}

function setName(msg) {
  return {
    type: 'SET_NAME',
    name: msg,
  };
}

export { increment, setName };
