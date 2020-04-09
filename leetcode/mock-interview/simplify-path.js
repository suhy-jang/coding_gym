/**
 * @param {string} path
 * @return {string}
 */
const simplifyPath = function(path) {
    const paths = path.split('/');
    const st = [];
    paths.forEach(el => {
        if (el === '..') {
            if (st.length > 0) st.pop();
        } else if (el !== '.' && el !== '') {
            st.push(el);
        }
    })
    return `/${st.join('/')}`;
};
