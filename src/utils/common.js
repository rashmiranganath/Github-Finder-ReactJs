export const headerValue = (history, isAuth) => {
    console.log(history)
    if (!isAuth) {
        if (history.location.pathname === '/') {
            return 'Sign Up'
        } else if (history.location.pathname === '/signup') {
            return 'Sign In'
        }
    } else {
        return 'Logout'
    }
}