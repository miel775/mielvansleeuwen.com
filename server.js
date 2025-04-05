
import express from 'express';
const app = express();

app.use(express.static('public'));

import { Liquid } from 'liquidjs';

import { readdir, readFile } from 'node:fs/promises';

const files = await readdir('content')
console.log(files)

app.use(express.urlencoded({extended: true}));

const engine = new Liquid();
app.engine('liquid', engine.express()); 

app.set('views', './views')

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

  console.log(request.params.slug)

  const fileContents = await readFile('content/' + request.params.slug + '.md', { encoding: 'utf8' })
  response.render('artikel.liquid')
})

app.get('/projects',async function(request, response) {
  response.render('projects.liquid')
})



app.set('port', process.env.PORT || 8000);


app.listen(app.get('port'), function () {

  console.log(`Application started on http://localhost:${app.get('port')}`)
});
