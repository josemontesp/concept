import { Mockgoose } from 'mockgoose-fix';

const mongoose = require('mongoose');

(mongoose as any).Promise = global.Promise;

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

if (process.env.NODE_ENV === 'testing') {
  const mockgoose = new Mockgoose(mongoose);
  mockgoose.helper.setDbVersion('3.4.3');

  mockgoose.prepareStorage().then(() => {
    mongoose.connect('mongodb://example.com:23400/TestingDB', {
      useNewUrlParser: true,
    });
  });
} else {
  mongoose
    .connect(
      'mongodb://josemontesp:testpassword1@ds030500.mlab.com:30500/test-ts-node-api',
      { useNewUrlParser: true },
    )
    .then(() => console.log('database connected!'));
}

export { mongoose };
