
const express = require('express');
const port = 3000; // Port sur lequel le serveur écoutera
const TaskRoute = require('./src/routes/TaskRoutes');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const path = require('path');

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));
// Utilisez bodyParser et cors
app.use(bodyParser.json());
app.use(cors());

// Utilisez les routeurs avec app.use()
app.use('/', TaskRoute);
app.listen(port, () => {
  console.log(`Serveur Node.js démarré sur le port ${port}`);
});












































/*

const express = require('express');
const app = express();
const port = 3000; // Port sur lequel le serveur écoutera

app.use(express.json());

// Liste des tâches (simulée pour cet exemple)
const tasks = ["rachid","mohmad"];

// Endpoint pour récupérer toutes les tâches
app.get('/api/tasks', (req, res) => {

  res.json(tasks);
});

// Endpoint pour ajouter une nouvelle tâche
app.post('/api/tasks', (req, res) => {
  const newTask = req.body.task;
  tasks.push(newTask);
  res.json(newTask);
});

// Endpoint pour supprimer une tâche
app.delete('/api/tasks/:index', (req, res) => {
  const index = req.params.index;
  if (index < 0 || index >= tasks.length) {
    res.status(404).send('Tâche non trouvée');
  } else {
    tasks.splice(index, 1);
    res.send('Tâche supprimée avec succès');
  }
});

app.listen(port, () => {
  console.log(`Serveur Node.js démarré sur le port ${port}`);
});
*/
