const State = {
  active: false
}

export default function(state = State, action) {
  const { type } = action;

  switch (type) {
  
    default:
      return state;
  }
}