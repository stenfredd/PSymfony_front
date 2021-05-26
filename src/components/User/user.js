export default class User {
    setAuthToken(token) {
        localStorage.setItem('authToken', token);
    }

    getAuthToken() {
        return localStorage.getItem('authToken');
    }

    hasAuthToken() {
        let authToken = localStorage.getItem('authToken');

        if (authToken !== null && authToken !== '') {
            return true;
        }
        return false;
    }

    deleteToken() {
        localStorage.removeItem('authToken');
    }

    setUserData(data) {
        data = JSON.stringify(data);
        localStorage.setItem('userData', data);
    }

    getUserData() {
        return JSON.parse(localStorage.getItem('userData'));
    }

    hasPermission(name) {
    	if(this.getUserData() && this.getUserData()['permissions']){
		let permissions = this.getUserData()['permissions'];
		return permissions.indexOf(name) !== -1;    	
    	}
	return false;
    }

    isActive() {
        return this.getUserData().active === 1;
    }

}
