import Actions from '../types';

const initialState = {
  name: '',
  email: '',
  cpf: '',
};

const request = state => ({ ...state, fetching: false });
const success = (data, state) => ({ ...state, fetching: false, ...data });
const fail = (state, error) => ({ ...state, fetching: false, error });

export default function UserReducer(state = initialState, action) {
  switch (action.type) {
    case Actions.USER_CREATE_REQUEST:
      return request(state);
    case Actions.USER_CREATE_SUCCESS:
      return success(action.payload, state);
    case Actions.USER_CREATE_FAILURE:
      return fail(state, action.erros);
    default:
      return state;
  }
}
