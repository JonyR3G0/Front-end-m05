import z from "https://cdn.jsdelivr.net/npm/zod@3.25.11/+esm"

// //1. Scheme creation
// const nameScheme = z.string()
// const numScheme = z.number()

// //2. Handle the information
// const usrName = "pepepecas"
// const numUsr = "keso"

// //3. Validation
// const adio = numScheme.parse(numUsr)
// const ola = nameScheme.parse(usrName)
// console.log(ola)

//----------------------------+---------------------------//

//Esquema basado en objeto

//1. Scheme creation
const usrSchema = z.object({
    name: z.string().min(1, "Obligatory"),
    email: z.string(),
    phone: z.number(),
})
//2. Handle the info
const userData = {
    name: 1,
    email: "mi@correo.com",
    phone: 12313,
}

const notify = usrSchema.safeParse(userData)
console.log(notify)
