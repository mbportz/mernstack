import { readdirSync, statSync, renameSync } from 'fs';
import { join, extname } from 'path';

function renameJsToJsx(dir) {
  readdirSync(dir).forEach(file => {
    const fullPath = join(dir, file);
    const stat = statSync(fullPath);

    if (stat.isDirectory()) {
      renameJsToJsx(fullPath);
    } else if (stat.isFile() && extname(file) === '.js') {
      const newPath = fullPath.slice(0, -3) + '.jsx';
      renameSync(fullPath, newPath);
      console.log(`Renamed: ${fullPath} -> ${newPath}`);
    }
  });
}

// Change './src' to your target directory
renameJsToJsx('../src');