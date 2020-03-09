import fs from 'fs';
import { promisify } from 'util';
import path from 'path';
import { uniq } from 'lodash';
import Models from '../mongodb/Models';

const SITEMAPS_PATH = path.resolve(__dirname, '../..');

const writeFile = async (filePath, str) => {
  const data = new Uint8Array(Buffer.from(str));
  return promisify(fs.writeFile)(filePath, data);
};

export const generateUrlsSitemap = (urls, priority = '0.9') => {
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

export const buildJobsSitemap = async () => {
  const jobs = await Models.Job.find({ expired: false, is_deleted: false });

  const urls = [];
  jobs.forEach(({ _id }) => {
    urls.push(`https://kunvet.com/jobs/detail/${_id}`);
  });

  const sitemap = generateUrlsSitemap(urls);
  await writeFile(path.resolve(SITEMAPS_PATH, 'client/sitemap-jobs.xml'), sitemap);
};

export const buildExpiredJobsSitemap = async () => {
  const jobs = await Models.Job.find({ expired: true, is_deleted: false });

  const urls = [];
  jobs.forEach(({ _id }) => {
    urls.push(`https://kunvet.com/jobs/detail/${_id}`);
  });

  const sitemap = generateUrlsSitemap(urls);
  await writeFile(path.resolve(SITEMAPS_PATH, 'client/sitemap-expired-jobs.xml'), sitemap);
};

export const buildSearchSitemap = async () => {
  const jobs = await Models.Job.find({
    active: true,
    expired: false,
    is_deleted: false,
  });
  if (jobs.length) {
    let queries = [];
    jobs.forEach(job => {
      job.position_tags.forEach(pos => {
        const position = pos.split(' ').join('-');
        const location = `${job.city.split(' ').join('-')}-${job.state}`;
        queries.push(`${position}-jobs-near-${location}`.toLowerCase());
      });
    });
    queries = uniq(queries);

    if (queries.length) {
      const urls = [];
      queries.forEach(query => {
        urls.push(`https://kunvet.com/jobs/search/${query}`);
      });

      const sitemap = generateUrlsSitemap(urls);
      await writeFile(path.resolve(SITEMAPS_PATH, 'client/sitemap-search-jobs.xml'), sitemap);
    }
  }
};

export const buildAllSitemaps = async () => {
  await buildJobsSitemap();
  await buildExpiredJobsSitemap();
  await buildSearchSitemap();
};
