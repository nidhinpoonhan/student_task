let cookie = {
    set(name, value) {
        window.localStorage.setItem(name, value);
    },
    get(name) {
        return window.localStorage.getItem(name);
    },
    remove(name) {
        window.localStorage.removeItem(name);
    },
};
export default cookie;
