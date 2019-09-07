/*Course notes ------------------------------------------------------

There is no god damn difference between double quotes ( " ") and single quotes ( ''  ).
*insert one
db.users.insertOne( {...code... })

*insert many es un array
db.users.insertMany( [..code..])

*db.users.find()
returns this: 5d73f3cde188590010d4ee1c
gets you the hash that will replace the id we used to create our schema 

*db.users.find( object: somethign )

 - db.users.find( username: "hugo" ) (busca el usuario con username Hugo pero falla por que se le mando "hugo" como si fuera la comparacion == , 
                                     Tambien se pueden hacer regex en los querys
 - db.users.find( username: /hugo/i ) (ignora las mayusculas y minusculas, haciendo posible la busqueda del texto)

*db.users.find( {age: {$gt: 25} } )    el uso de $ representa el uso de funciones internas de mongoDB, en este caso "$gt" busca el valor mayor (greter than..)
                                      por ende "$lt" busca el valor menor que...   
                                      mas info aqui https://bit.ly/2kAdtTo

*db.users.find({age: {$gt: 25} }).sort({age: +1})

*db.users.find( {$and: [ {author:null}, {created_by: {$exists:true } }] })
    db.users.find({
        $and:[ {author:null}, {created_by: {$exists:true } }] })

*db.users.find().pretty()
gets you a better view of the object with indentation and shit.

Course notes ------------------------------------------------------ */


//Users Collection
{
    _id: ObjectId('1'),
    username: "Hugo",
    age: 23,
    password: "cursodemongodb1",
    rol:['admin', 'client'],
    email: "arnoldohugo@gmail.com",
    facebook: "HugoGtz",
    active: true,
    author: ObjectId('5d73f3cde188590010d4ee1c')
},
{
    _id: ObjectId('2'),
    username: "Admin Codificadas",
    password: "datosmongo",
    rol: ['admin'],
    active: true,
    created_by: ObjectId('d73f3cde188590010d4ee1c'),
    author: null
} //)
//------------------------------------------------------------------
//Blog collection
{
    name: "Codificadas",
    url: "codificadas.blog.mx",
    author: ObjectId('2')
}

//Blog entry

{
    article: "Something good",
    publishDate: '2019-09-07',
    blog: ObjectId('1'),
    comments: [
        {
            comment: 'dude!',
            createBy: ObjectId('1'),
        }
    ],
    tag: ['tag1', 'tag2' , 'tag3']

}
//------------------------------------------------------------------
//Servers 1
//Best way
{
    servername: "Hal_9000",
    type: 'access',
    entrys: [
        {
            date: timestamp,
            code: 404,
            msg: "Not found",
        }
    ]
}

//Servers 2
//Ok way
{
    id: Object('1'),
    servername: "Hal_9000",
    type: 'access'
}

{
    date: timestamp,
    code: 404,
    msg: "Not found",
    ObjectId: ('1')
}

//------------------------------------------------------------------
//Conversation collection
{
    name: "codificadasgroup"
    messages:[
        {
            text:"Hola mundo",
            created_by: ('1'),
        },
        {
            text:"howdy",
            created_by: ('2'),
        }
    ]
}

//------------------------------------------------------------------
//Employee collection
{
    _id: ObjectId('10'),
    name: "Steven",
    BDate: '2019-09-07',
    Adress: "1kdnaosdnoansd",
    salary: 110.10,
    Sex: "m",
    WorksFor: ObjectId(3),
    Manages: ObjectId(4),
    Supervisesr: ObjectId(5)
    department: ObjectId('1')
}

//Department collection
{
    _id: ObjectId('1'),
    name: 'Tecnologia'
    number: 1,
    location: 'planta baja',
    projects: [
        {
            name: "code",
            number: 5,
            location: "somewhere",
        }
    ]
}

