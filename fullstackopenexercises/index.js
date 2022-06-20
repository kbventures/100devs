let persons = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]


const express =require('express');
const app = express()


app.use(express.json())


app.get('/', (request, response)=>{
    console.log('test')
})


app.get('/api/persons',(request,response)=>{
    response.json(persons)
})




app.get('/info', (request,response)=>{
    response.send(`<h1>Phonebook has info for ${persons.length} people</h1>
    <p>${new Date()}</p>`)
})


app.get('/api/persons/:id',(request,response)=>{
    const id = Number(request.params.id)
    console.log(id)
    const person = persons.find(pers => pers.id == id);

    if(person){
        response.json(person)
    } else {
        response.status(404).end()
    }
})



app.delete('/api/persons/:id',(request, response)=>{
    const id = Number(request.params.id)
    persons = persons.filter(person=>{
        person.id !== id;
    })

    response.status(204).end()
})


app.post('/api/persons',(request,response)=>{

    const maxid = persons.length > 0 ? Math.max(...notes.map(n=>n.id)): 0; 
    const person = request.body;
    person.id = maxId +1;
    persons = persons.concatt(person)
    response.json(person)


})


const PORT = 3000; 

app.listen(PORT,()=>{
    console.log(`App Listening On Port: ${PORT}`)
})