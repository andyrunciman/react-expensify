import authReducer from '../../reducers/auth';
import {login,logout} from '../../actions/auth';

test('should update store when login action called',()=>{
    const uid = 1;
    const loginAction = login(1) 
    const state = authReducer(undefined,loginAction);
    expect(state).toEqual({
        uid:1
    });
});

test('should update store when logout action called',()=>{
    const logoutAction = logout() 
    const state = authReducer({uid:1},logoutAction);
    expect(state).toEqual({});
});