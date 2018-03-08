import {login,logout} from '../../actions/auth';

test('should call login action with a user id',()=>{
    const uid = 1;
    const loginAction = login(uid);
    expect(loginAction).toEqual({
        type:'LOGIN',
        uid
    });
});

test('should call logout action',()=>{
    const logoutAction = logout();
    expect(logoutAction).toEqual({
        type:'LOGOUT'
    });
})