// Authenticate the login on the server side and save the login token in a cookie
const handleLogin = async (username, password) => {
    const res = await axios.post('/login', { username, password });
    const { token } = res.data;
    Cookies.set('token', token);
    console.log('logged in')
}