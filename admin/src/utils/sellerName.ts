const usernameCookie = document.cookie
    .split(';')
    .find(cookie => cookie.trim().startsWith('username='));

const currentUser = usernameCookie ? usernameCookie.split('=')[1] : null;

export  default currentUser;