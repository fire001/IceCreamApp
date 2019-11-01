//clase para definir el servidor
//import express
import express, {Application} from 'express';
//morgan para ver las peticiones http
import morgan from 'morgan';
// routes
import IndexRoutes from './routes/index.routes'
import PedidosRoutes from './routes/pedido.routes'



export class App{

  private app: Application;
    
  //creando instancia
    constructor(private port?: number | string) { //union type
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
        
    }

    settings(){
        this.app.set('port', this.port || process.env.PORT || 3000 )
    }

    //muestra por consola algun mensaje de desarrollo
    middlewares(){
        this.app.use(morgan('dev'));
        this.app.use(express.json());
    }

    routes() {
        this.app.use(IndexRoutes);
        this.app.use('/pedidos', PedidosRoutes)
    }

    async listen() {
       await this.app.listen(this.app.get('port'));
       console.log('Server on port', this.app.get('port')); //muestre por consola el server
    }
}
