import fs from 'fs';
import { promisify } from 'util';
import path from 'path';
import Config from 'config';
import Mongoose from 'mongoose';
import Models from '../server/mongodb/Models';

const SITEMAPS_PATH = path.resolve(__dirname, '..');

const writeFile = async (filePath, str) => {
  const data = new Uint8Array(Buffer.from(str));
  return promisify(fs.writeFile)(filePath, data);
};

const generateUrlsSitemap = (urls, priority = '0.9') => {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  urls.forEach(url => {
    xml += '  <url>\n';
    xml += `    <loc>${url}</loc>\n`;
    xml += `    <priority>${priority}</priority>\n`;
    xml += '  </url>\n';
  });

  xml += '</urlset>';

  return xml;
};

const buildJobsSitemap = async () => {
  const jobs = await Models.Job.find();

  const urls = [];
  jobs.forEach(({ _id }) => {
    urls.push(`https://kunvet.com/jobs/detail/${_id}`);
  });

  const sitemap = generateUrlsSitemap(urls);
  await writeFile(path.resolve(SITEMAPS_PATH, 'client/sitemap-jobs.xml'), sitemap);
};

// Initialization
(async () => {
  await Mongoose.connect(Config.get('private.database'));

  await buildJobsSitemap();

  process.exit(0);
})();
