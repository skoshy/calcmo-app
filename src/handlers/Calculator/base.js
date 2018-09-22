import { createHandler } from 'redux-dusk';

export const {
  nameSpace,
  types,
  actions,
  reducer,
} = createHandler({
  nameSpace: 'CALCULATOR',
  initialState: {
    currentExpression: '',
  },
  types: {
    SET: {
      CURRENT_EXPRESSION: {
        action: ['currentExpression'],
        reducer: {
          reduce: ['currentExpression'],
        },
      },
    },
  },
});
