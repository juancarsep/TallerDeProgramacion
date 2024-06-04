import ModelMem from "./productosMem.js"
import ModelFile from "./productosFile.js"
import ModelMongoDB from "./productosMongoDB.js";

class ModelFactory{
    static get(tipo){
        switch(tipo){
            case 'MEM':
                console.log('persistiendo en memoria');
                return new ModelMem();
            case 'FILE':
                console.log('persistiendo en FIleSystem');
                return new ModelFile();
            case 'MONGODB':
                console.log('persistiendo en mongo db')
                return new ModelMongoDB()
            default :
            console.log("persistiendo en memoria default");
            return new ModelMem();
        }
    }


}


export default ModelFactory