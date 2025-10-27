const express = require('express');
const app = express();
const PORT = 3000;

// Load JSON data
const poemsData = require('./poems.json');

// Serve HTML page
app.get('/', (req, res) => {
  let html = `
  <!DOCTYPE html>
  <html lang="ta">
  <head>
    <meta charset="UTF-8">
    <title>Kurunthogai Poems</title>
    <style>
      body { font-family: Arial, sans-serif; margin: 20px; font-size: 10px; }
      h1 { text-align: center; }
      .accordion { background-color: #f1f1f1; cursor: pointer; padding: 15px; width: 100%;
                   text-align: left; border: none; outline: none; transition: 0.4s; font-size: 16px; margin-bottom: 5px; }
      .accordion:hover { background-color: #ddd; }
      .active { background-color: #ccc; }
      .panel { padding: 10px; display: none; background-color: white; border: 1px solid #ccc; }
      .poet { font-weight: bold; margin-top: 10px; }
      .thinai { font-style: italic; color: #555; }
    </style>
  </head>
  <body>
    <h1>Kurunthogai Poems</h1>
  `;

  // Generate accordion items
  poemsData.KurunthogaiPoems.forEach(poem => {
    html += `
      <button class="accordion">Poem ${poem.index} - ${poem.poet_name}</button>
      <div class="panel">
        <p>${poem.poem_verses}</p>
        <p class="poet">Poet: ${poem.poet_name}</p>
        <p class="thinai">Thinai: ${poem.poem_thinai_type}</p>
      </div>
    `;
  });

  html += `
    <script>
      const acc = document.getElementsByClassName("accordion");
      for (let i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
          this.classList.toggle("active");
          const panel = this.nextElementSibling;
          panel.style.display = (panel.style.display === "block") ? "none" : "block";
        });
      }
    </script>
  </body>
  </html>
  `;

  res.send(html);
});

// Start server
app.listen(PORT, () => {
  console.log('Server is running on http://localhost:3000');
});
