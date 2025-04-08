
import express from 'express';
import { marked } from "marked";
import { Liquid } from 'liquidjs';
import { readdir, readFile } from 'node:fs/promises';
import matter from "gray-matter"

const files = await readdir('content')

const app = express();
app.use(express.static('public'));

const engine = new Liquid();
app.engine('liquid', engine.express()); 

app.set('views', './views')

app.use(express.urlencoded({ extended: true }))

app.get('/', async function(request, response) {
  response.render('home.liquid')
});

app.get('/about_me',async function(request, response) {
  response.render('about.liquid')
});

app.get('/contact',async function(request, response) {
  response.render('contact.liquid')
})

app.get('/learning-journal',async function(request, response) {
  response.render('journal.liquid', {
    files: files})
})

app.get('/learning-journal/:slug', async function(request, response){
  console.log(request.params)

  
  const fileContents = await readFile("content/" + request.params.slug + ".md", { encoding: "utf8" })
  const markedUp = marked.parse(fileContents)
  const article = matter(fileContents)

  response.render('artikel.liquid',{
    content: fileContents,
    markedUp: markedUp,
    title: article.data.title,
    date: article.data.date,
    author: article.data.author
  })
})

app.get('/projects',async function(request, response) {
  response.render('projects.liquid')
})



app.set('port', process.env.PORT || 8000);


app.listen(app.get('port'), function () {

  console.log(`Application started on http://localhost:${app.get('port')}`)
});
