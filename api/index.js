const poemsData = require('../poems.json');

export default function handler(req, res) {
  let html = `
  <!DOCTYPE html>
  <html lang="ta">
  <head>
    <meta charset="UTF-8">
    <title>குறுந்தொகை</title>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+Tamil:wght@400;700&display=swap" rel="stylesheet">
    <style>
      body { 
        font-family: 'Noto Serif Tamil', serif;
        background-image: url('/background.jpg'); 
        background-size: cover;
        background-attachment: fixed;
        margin: 0;
        padding: 20px;
      }
      h1 {
        text-align: center;
        color: #ffffff;
        background-color: rgba(0, 0, 0, 0.5);
        padding: 15px;
        border-radius: 10px;
      }
      .accordion {
        background-color: rgba(255, 255, 255, 0.8);
        cursor: pointer;
        padding: 15px;
        width: 100%;
        text-align: left;
        border: none;
        outline: none;
        transition: 0.4s;
        font-size: 18px;
        margin: 8px 0;
        border-radius: 8px;
      }
      .accordion:hover {
        background-color: rgba(240, 240, 240, 0.9);
      }
      .active {
        background-color: rgba(220, 220, 220, 1);
      }
      .panel {
        padding: 15px;
        display: none;
        background-color: rgba(255, 255, 255, 0.9);
        border-radius: 0 0 8px 8px;
        margin-bottom: 10px;
      }
      .poet { font-weight: bold; margin-top: 10px; }
      .thinai { font-style: italic; color: #333; }
    </style>
  </head>
  <body>
    <h1>குறுந்தொகை</h1>
   <!-- ✅ Search box -->
    <input type="text" id="searchBox" placeholder="பாடல் எண், கவிஞர், திணை அல்லது வரிகளைத் தேட...">

    `;

  poemsData.KurunthogaiPoems.forEach(poem => {
    html += `
      <button class="accordion">பாடல் ${poem.index} - ${poem.poet_name} (${poem.poem_thinai_type})</button>
      <div class="panel">
        <p>${poem.poem_verses.replace(/\n/g, '<br>')}</>
        <p class="poet">கவிஞர்: ${poem.poet_name}</p>
      </div>
    `;
  });

  html += `
    <script>
      const acc = document.getElementsByClassName("accordion");
      for (let i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
          this.classList.toggle("active");
          const panel = this.nextElementSibling;
          panel.style.display = (panel.style.display === "block") ? "none" : "block";
        });
      }
         // ✅ Search logic
      document.getElementById('searchBox').addEventListener('input', function() {
        const query = this.value.toLowerCase();
        document.querySelectorAll('.poem-block').forEach(block => {
          block.style.display = block.innerText.toLowerCase().includes(query) ? '' : 'none';
        });
      });
    </script>
  </body>
  </html>
  `;

  res.setHeader('Content-Type', 'text/html');
  res.status(200).send(html);
}
