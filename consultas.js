const { Pool } = require('pg')

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: '1234',
    database: 'likeme',
    port: 8080,
    allowExitOnIdle: true
})

const agregarPosts = async(titulo,url,descripcion,likes) =>{
    const consulta = "insert into posts values (DEFAULT, $1, $2, $3, $4)"
    const values = [titulo,url,descripcion,likes]
    const result = await pool.query(consulta,values)
    console.log("se agrego un viaje")
}

const obtenerPosts = async() =>{
    const { rows } = await pool.query("SELECT * FROM posts")
    return rows
}

const deletePost = async (id) =>{
    const consulta = `delete from posts where id=$1`;
    const resultado =await pool.query(consulta,[id])
    return(resultado);
 }


module.exports = {obtenerPosts,agregarPosts,deletePost}