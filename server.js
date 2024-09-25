require('dotenv').config()


const { Febby } = require("febby");
const complaintsSchema = require('./models/complaints')



const config = {
  port: 3000,
  db: {
    url: process.env.MONGODB_URI,
  },
  appBaseUrl: "/api", // app base url will not be taken into consideration when app created using open-api spec
  loadDefaultMiddlewareOnAppCreation: true, // you can delay loading default middleware by setting up false and use built in method 'loadDefaultMiddlewares' to load on demand.
  serviceName: "women-safety-service", 
};

const febby = new Febby(config);

async function run() {
  
  await febby.route({
    path: "/health",
    method: "get",
    handler: (req, res) => {
      res.json({
        message:'ok',
      });
    },
  });

const complaintsModel = await febby.model('complaints', complaintsSchema)

await febby.crud(
  "/complaints",
  {
    crud: true,
  },
  complaintsModel,
);

  await febby.bootstrap()
  console.log(`service up and running on port : ${config.port}`)
}

run()

