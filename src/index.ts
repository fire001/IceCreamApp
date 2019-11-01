import { App } from './app'

//inicializa el programa
async function main() {
    const app = new App(3000); //extends app.ts 
    await app.listen();   //inicializar el servidor
}

main();