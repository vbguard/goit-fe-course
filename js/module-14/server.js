const fs = require('fs');
const manifest = require('./manifest.json');

const runtimeContent = fs.readFileSync(manifest['runtime~main.js'], 'utf-8');

app.get('/', (req, res) => {
  res.send(`
    …
    <script>${runtimeContent}</script>
    …
  `);
});
