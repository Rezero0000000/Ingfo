import { readFileSync, readdirSync, statSync } from 'fs';
import * as Sqrl from 'squirrelly';
import path from 'path';

// Path to manifest.json in public directory
const manifest = require(path.resolve(__dirname, '../public/manifest.json'));

let html_files = {};

function importFiles(directory = path.resolve(__dirname, '../resources/views')) {
  const files = readdirSync(directory);

  for (const filename of files) {
    const filePath = path.join(directory, filename);
    const results = statSync(filePath);

    if (results.isDirectory()) {
      importFiles(filePath); // recursive call to get all files
    } else {
      const html = readFileSync(filePath, 'utf8');
      html_files[filePath] = html;
    }
  }
}

export function view(filename, view_data = {}) {
  const directory = path.resolve(__dirname, '../resources/views');
  const filePath = path.join(directory, filename);

  let html = process.env.CACHE_VIEW === 'true'
    ? html_files[filePath]
    : readFileSync(filePath, 'utf8');

  console.log("Rendering HTML with data:", view_data);
  console.log("Using manifest:", manifest);

  // Combine view data and manifest data
  html = Sqrl.render(html, {
    ...view_data,
    manifest // Adding the manifest object to the view data
  });

  if (process.env.NODE_ENV === 'development') {
    html = html.replace('</body>', `
      <script>
        var evtSource = new EventSource('http://localhost:8001/subscribe');
        evtSource.onmessage = function (event) { 
          if (event.data.includes("reload")) {
            console.log("reloaded");
            location.reload();
          }
        };
      </script>
      </body>
    `);
  }

  console.log("Final rendered HTML:", html);

  return html;
}

export default importFiles();
