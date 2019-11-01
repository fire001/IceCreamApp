//archivo para recibir lo que pide mi db

export interface Users {
    idUsers: number
    Username: String
    Password: String
    idOrders: number
    idOrdersPack: number

}

export interface OrdersPack{
    idOrdersPack: number
    idUsers: number
    idOrders: number
    ExpirationDate: Date
}

export interface Orders{
    idOrders: number
    Pedido: String
    Price: number
    idUsers: number
    PaymentMethod: String
    Payed: boolean
}