const initialState = {
  nickname: 'Victor',
  users: [
    {nickname: 'jd'},
    {nickname: 'jeanData'}
  ],
  messages: [
    {
      id: 1,
      author: 'jd',
      content: 'Salut, ça va ?'
    },
    {
      id: 2,
      author: 'jeanData',
      content: 'Me parle pas.'
    },
  ],
}; 

export default (state = initialState, action = {}) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};
