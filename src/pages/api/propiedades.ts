// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//exportaciones de next que uzamos como tipado
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};


// 
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>, // le pasamos la logica de arriba, que va a responder un name tipo string
) 
{

    // metemos todo dentro del try para que si algo de todo esto no funciona, nos devuelva la logica del final, un llamado de error catch
    try{

    if(req.method === "GET"){
        console.log("Ccodigo de GET")
        res.status(200).json({ name: "validamos que funcione el GET" });
    }
    else if(req.method === "POST"){
        console.log("Ccodigo de POST")
        res.status(200).json({ name: "validamos que funcione el POST" });
    }
    else if(req.method === "PUT"){
        console.log("Ccodigo de PUT")
        res.status(200).json({ name: "validamos que funcione el PUT" });
    }
    else if(req.method === "DELETE"){
        console.log("Ccodigo de DELETE")
        res.status(200).json({ name: "validamos que funcione el DELETE" });
    }
    else(
        res.status(500).json({name:'el metodo no esta perimtido'})
    )
}
catch(err) {
    console.log(err)
    res.status(500).json({name:'fallo'});
}    
}
