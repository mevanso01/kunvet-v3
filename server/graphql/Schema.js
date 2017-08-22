import composeWithMongoose from 'graphql-compose-mongoose';
import { GQC } from 'graphql-compose';
import Models from '../mongodb/Models';

// GraphQL types
const JobType = composeWithMongoose(Models.Job);

// Root query fields
GQC.rootQuery().addFields({
  job: JobType.get('$findOne'),
  jobs: JobType.get('$findMany'),
});

// Root mutation fields
GQC.rootMutation().addFields({
  createJob: JobType.get('$createOne'),
});

export default GQC.buildSchema();
