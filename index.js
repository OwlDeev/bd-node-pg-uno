const {obtenerPosts,agregarPosts,deletePost} = require('./consultas.js')
const express = require('express')
const app = express()
const cors = require('cors');

app.listen(3000, console.log("Server esta funcionando"))
app.use(cors());
app.use(express.json())
app.use(express.static('public'))

app.get("/",(req,res) =>{
    res.sendFile(__dirname + '/public/index.html')
})

app.post("/posts", async(req,res) =>{
    const {titulo,url,descripcion,likes} = req.body
    await agregarPosts(titulo,url,descripcion,likes)
    res.send("se agrego viaje")
})

app.get("/posts", async(req,res) =>{
    const posts = await obtenerPosts()
    res.json(posts)
})

app.delete("/posts/:id", async (req, res) => {
    const { id } = req.params;
    await deletePost(id)
    res.send("Post eliminado");
  });
