const mongoose = require('mongoose')  

const url = 'mongodb://localhost/mongo1_oficinaarticulas' 

mongoose. connect(url, {
    
}) 
.then( ()=> console.log('CONECTADO A MONGO') )
.catch ( (e)=> console.log('El error de conexion es: '+ e)) 


const articulasSchema = mongoose.Schema({
    articulo:String,
    nombre:String, 
    Descripcion:String,
    precio:Number,
    cantidad:Number,
    categoria:String
})
const articulasModel = mongoose.model('articulas', articulasSchema) 

//mostrar 
const mostrar = async ()=>{ 
    const articulas = await articulasModel.find()
    console.log(articulas) 
}   
//crear 
const crear = async ()=>{

    const articulas = new articulasModel({
    articulo:'lapicera',
    nombre:'big',
    Descripcion:'mejor comodidad',
    precio: 15,
    cantidad:12,
    categoria:'punteros'
    }) 
    const resultado = await articulas.save() 
    console.log(resultado)
}  
// editar 
const actualizar = async (id)=>{
    const articulas = await articulasModel.updateOne({_id:id},
    {
        $set:{ 
    articulo:'lapicera',
    nombre:'big',
    Descripcion:'mejorrr comodidad',
    precio: 15,
    cantidad:12,
    categoria:'punterosss'

        }
    })
} 
//borrar
const eliminar = async(id)=>{
    const articulas = await articulasModel.deleteOne({_id:id}) 
    console.log(articulas)
}

//llamamos a los procedimientos 
//crear()
//mostrar()  
//actualizar('656950003cb862694633282f') 
//eliminar('656950003cb862694633282f')

