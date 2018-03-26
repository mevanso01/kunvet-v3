import AwsServerlessExpress from 'aws-serverless-express';

export default class Lambda {
  static get(app) {
    const server = AwsServerlessExpress.createServer(app.callback());
    return (event, context) => AwsServerlessExpress.proxy(server, event, context);
  }
}
