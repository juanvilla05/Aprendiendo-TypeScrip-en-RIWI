// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//exportaciones de next que uzamos como tipado
import Properties from "@/database/models/properties"; // esquema
import dbConnection from "@/lib/database_mongo";// conexion
import type { NextApiRequest, NextApiResponse } from "next"; // siempre hay que imoportarlo cuando vamos a crear la api en next


export interface Property {
    _id: string;
    name: string;
    value: number;
    img?: string;
}

export type PropertiesResponse = | { ok: true; data: Property[] } | { ok: false; error: string };

// esta funcion siempre hay ue construirla cuando vamos a hacer un crud en next, por que le pasa lo que requerimos y la respuesta que esperamos
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<PropertiesResponse> // le pasamos la logica de arriba, que va a responder un name tipo string
) {
    // metemos todo dentro del try para que si algo de todo esto no funciona, nos devuelva la logica del final, un llamado de error catch
    await dbConnection();
    try {
        if (req.method === "GET") {
            const {id} = req.query;
            if(id){
                const property = await Properties.findById(id as string) // esta forma de buscar siempre es la misma 
                if(!property){
                    res.status(404).json({ok:false, error:'No encontrado'});
                    return;
                }
                res.status(200).json({ok:true, data: [property] as Property[]});
                return
            }
            const data = await Properties.find()
            res.status(200).json({ok:true, data: data as Property[]})
             // siempre que vamos a hacer una peticion. esperamos por eso e await, y con .find buscamos los datos 
        } 
        else if (req.method === "POST") {
            const {name,value,img}=req.body
            const newProperty = new Properties({
                name,
                value,
                img
            }
            )
            const savedProperty = await newProperty.save(); // es un metodo de mongoose

            res.status(200).json({ok:true, data: [savedProperty] as Property[]});
        } else if (req.method === "PUT") {
            const {id} = req.query;
            const { name, value, img } = req.body
            const updated = await Properties.findByIdAndUpdate(
                id as string,
                {name, value, img},
                {new:true}// predeterminado, no va a cambiar
            ); 
            if (!updated){
                res.status(404).json({ok:false, error:'No encontrado'})
                return; // return siempre va despues de cada estatus
            }
            res.status(200).json({ok:true, data: [updated]});
            return;
        } else if (req.method === "DELETE") {
            
            const {id} = req.query;
            const deleted = await Properties.findByIdAndDelete(id as string); // donde vea un metodo de mongoose en esa variable se esta guardando la consulta
            if(!deleted){
                res.status(404).json({ok:false, error: 'No encontrado'})
            }
            res.status(200).json({ok:true, data: [deleted]})
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ok:false, error: 'Falla' });
    }
}
