function renderEmployeeCard(employeeArr) {
    let cardArr = [];
    for(i=0; i < employeeArr.length; i++) {
        let empCard = `
        <article>
            <div>
                <h2>${employeeArr[i].name}</h2>
                <h3>${employeeArr[i].role}</h3>
            </div>
            <div>
                <p>Employee ID: ${employeeArr[i].id}</p>
            </div>
        </article>
        `
        cardArr.push(empCard)
    } 
    return cardArr.join('');
} //COULD ask tutor here what to do. Should I use a forEach loop? Or how to get my for loop to return what it needs too.

function generateHyperText(employeeArr) {
    console.table(employeeArr)
    return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie-edge">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.1.3/css/bootstrap.min.css" integrity="sha512-GQGU0fMMi238uA+a/bdWJfpUGKUkBdgfFdgBm72SUQ6BeyWjoY/ton0tEjH+OSH9iP4Dfh+7HM0I9f5eR0L/4w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link rel="stylesheet" href="./dist/style.css"/>
    </head>

    <body>
        <header>
            <h1>My Web Development Team</h1>
        </header>

        <main>
            ${renderEmployeeCard(employeeArr)}
        </main>

        <footer>Made By Samuel Varney</footer>
    </body>
    </html>
    `
}

module.exports = generateHyperText;