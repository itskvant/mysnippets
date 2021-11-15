const Snippet = require('./models')

const snippet = new Snippet({
    title: "ref system",
    tags: ["telegram", "bot"],
    lang: ["python"],
    snippet: "async def main (ref): bla bla\n\thello"
})

snippet.save()
    .then((result) => {
        console.log(result)
    })
    .catch((err) => console.log(err))