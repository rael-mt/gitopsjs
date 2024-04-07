const express = require('express');
const path = require('path');

const app = express();

// Definindo o diretório de arquivos estáticos
app.use(express.static(path.join(__dirname, './public')));

// Definindo a rota para a página inicial
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
