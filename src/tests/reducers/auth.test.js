import authReducer from '../../redux/reducers/auth';

test('should setup default auth object', () => {
    const action = { type: '@@INIT' };
    const state = authReducer(undefined, action);

    expect(state).toEqual({});
});

test('should setup uid for login', () => {
    const action = { type: 'LOGIN', uid: 'abc123'};
    const state = authReducer({}, action);

    expect(state).toEqual({
        uid: action.uid
    })
});

test('should clear uid for logout', () => {
    const action = { type: 'LOGOUT' };
    const state = authReducer({ uid: 'abc123'}, action);

    expect(state).toEqual({})
});