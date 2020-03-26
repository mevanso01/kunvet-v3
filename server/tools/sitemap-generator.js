import Aws from 'aws-sdk';
import Config from 'config';
import { uniq } from 'lodash';
import Models from '../mongodb/Models';

const uploadFile = (str, fileName) => {
  const s3 = new Aws.S3({
    accessKeyId: Config.get('private.aws.accessKeyId'),
    secretAccessKey: Config.get('private.aws.secretAccessKey'),
  });
  const bucket = Config.get('private.aws.s3.bucket');
  const params = {
    Bucket: bucket,
    Key: fileName,
    Body: str,
    ContentType: 'application/xml',
  };
  console.log('--------sitemap-params--------', params);
  return s3.putObject(params, (err) => {
    if (err) console.error('uploadFile error:', err);
  });
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
  await uploadFile(sitemap, 'sitemap-jobs.xml');
};

export const buildExpiredJobsSitemap = async () => {
  const jobs = await Models.Job.find({ expired: true, is_deleted: false });

  const urls = [];
  jobs.forEach(({ _id }) => {
    urls.push(`https://kunvet.com/jobs/detail/${_id}`);
  });

  const sitemap = generateUrlsSitemap(urls);
  await uploadFile(sitemap, 'sitemap-expired-jobs.xml');
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
        if (pos && job.city) {
          const position = pos.split(' ').join('-');
          const location = `${job.city.split(' ').join('-')}-${job.state}`;
          queries.push(`${position}-jobs-near-${location}`.toLowerCase());
        }
      });
    });
    queries = uniq(queries);

    if (queries.length) {
      const urls = [];
      queries.forEach(query => {
        urls.push(`https://kunvet.com/jobs/search/${query}`);
      });

      const sitemap = generateUrlsSitemap(urls);
      await uploadFile(sitemap, 'sitemap-search-jobs.xml');
    }
  }
};

export const buildAllSitemaps = async () => {
  try {
    await buildJobsSitemap();
    await buildExpiredJobsSitemap();
    await buildSearchSitemap();
  } catch (err) {
    console.log(err);
  }
};
