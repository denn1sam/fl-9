const date = new Date().getHours();

//login
const login = prompt(`your login:`);

if (!login || login === null) {
    alert(`Canceled.`);
} else {
    if (login.length !== 4) {
        alert(`I don't know any users having name length less than 4 symbols`);
    } else if (login !== `User`) {
        alert(`I don’t know you`);
    } else {
    //password
        const password = prompt(`your password:`);

        if (!password || password === null) {
        alert(`Canceled.`);
        } 

        if (password !== `SuperUser`) {
            alert(`Wrong password`);
        } else if (password === `SuperUser`) {
            if (date < 20) {
                alert(`Good day!`);
                } else {
                    alert(`Good evening!`);
                }
        }
    }
}
