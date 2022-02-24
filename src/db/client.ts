const AWS = require ('aws-sdk')

AWS.config.update({
  region: 'eu-west-1',
  accessKeyId: 'mock-access-key-id',
  secretAccessKey: 'mock-access-secretkey-id',
  endpoint: 'http://localhost:4566'
});

const dynamoDB = new AWS.DynamoDB()

const params = {
  TableName : "cp-ddb-agent-agent-catalog",
  KeySchema: [{ AttributeName: "id", KeyType: "HASH"}],
  AttributeDefinitions: [
    { AttributeName: "id", AttributeType: "S"},
    // { AttributeName: "output", AttributeType: "S" },
    // { AttributeName: "infrastructureid", AttributeType: "S" },
    // { AttributeName: "agentversion", AttributeType: "S" }
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 5,
    WriteCapacityUnits: 5
  }
}

const dropAndCreateDynamoDBTable = async () => {

  dynamoDB.deleteTable({
    TableName: "cp-ddb-agent-agent-catalog"
  }, (err, data) => {
      dynamoDB.createTable(params, console.log)
  })

}

export default dropAndCreateDynamoDBTable
