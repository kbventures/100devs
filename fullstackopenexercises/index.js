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




const randomNumber = () => {
    
    return Math.floor(Math.random() * 1000000000);
  }

  const generateId = () => {
    const maxId = persons.length > 0
      ? Math.max(...persons.map(n => n.id))
      : 0
    return maxId + 1
  }

app.post('/api/persons',(request,response)=>{

    const body = request.body


    let person = persons.find(pers => pers.name ==body.name);

  
    if (!body.name) {
      return response.status(400).json({ 
        error: 'name must be unique' 
      })
    }
  
    person = {
      id: generateId(),
      name: body.name,
      number: randomNumber(),
    }
  
    persons = persons.concat(person)
  
    response.json(person)
})












const PORT = 3000; 

app.listen(PORT,()=>{
    console.log(`App Listening On Port: ${PORT}`)
})