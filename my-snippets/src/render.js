const { client } = require("./models");


const primary = document.getElementById('primary');
primary.addEventListener('click', () => {
  client.connect(err => {
    const collection = client.db("snippets").collection("python");
    console.log("test");
    client.close();
  });
});
