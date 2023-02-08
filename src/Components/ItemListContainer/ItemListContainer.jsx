import { useEffect, useState } from "react"
import { gFetch } from "../Productos/gFetch"
import { Link, useParams } from "react-router-dom"
import { Button } from "../Common/Button"

export const ItemListContainer =({}) =>{

    const [productos, setProductos] = useState ([])
    const {idCategoria} = useParams()

    useEffect(()=> {
        if (idCategoria){
            gFetch()
            .then(res =>{
                setProductos(res.filter(producto => producto.categoria === idCategoria ))
            })
            .catch(error=>console.log(error))
        } else {
            gFetch()
            .then(res=>{
                setProductos(res)
            })
            .catch(error => console.log(error))
        }

    }, [idCategoria])

    return (
        <div className="mx-auto text-center  bg-[#151515] flex  flex-wrap  font-bold  justify-beetwend text-white pt-[30px] p-[100px]">
          {/*  <h1 className="">PRODUCTOS</h1>  */}
        { productos.map(producto => (
            <div key={producto.id} className="container-lg  mt-5 w-[450px]  rounded-[50px]  bg-black mb-[30px] mx-auto relative flex justify-center">
                <Link to={`/detalle/${producto.id}`}>
                    <div className="mt-10">
                        <h1 className="font-black text-5xl text-warning">{producto.title}</h1>
                    </div>
                    <div className="flex flex-col items-center my-auto">
                        <img src={producto.foto} width="200px" alt="Foto producto" className="mt-[20px]" />
                        <p className="text-gray-200 text-2xl mb-4">{producto.description}</p>
                        <h3 className="font-bold text-4xl text-warning mb-4">${producto.price}</h3>
                        <p className="text-white m-2">Stock Disponible: {producto.stock}</p>
                        
                        <Button className="btn btn-ghost mb-5 text-warning" type="submit"> 
                            Ver detalles
                        </Button>      
                    </div>
                </Link>
            </div>
              )
            )}
        </div>
        )

    }
    

