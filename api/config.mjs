export const config = {

  debugging: {
    stdoutLoglevel: "info",
    stderrLoglevel: "error",
    includeSrcInLogs: false
  },
  db: {
    groups: {
      url: "https://19b3b4d1-6853-4eb1-922b-225cdaba583b-bluemix:f1c528031b0d0e7772dc3bec250b0ed336ced1a0bfc7ac30d9b1bddb5ef80a38@19b3b4d1-6853-4eb1-922b-225cdaba583b-bluemix.cloudant.com",
      plugin: 'retry',
      retryAttempts: 5,
      retryTimeout: 1000
    },
    options: {
      connections: 32,
      stale: false
    }
  },
  messageHubService: {
    "instance_id": "f3f9b4f1-2a42-4019-ae81-7206302c9419",
    "mqlight_lookup_url": "https://mqlight-lookup-prod02.messagehub.services.eu-gb.bluemix.net/Lookup?serviceId=f3f9b4f1-2a42-4019-ae81-7206302c9419",
    "api_key": "6SqTD9Sp8fznoERbbwibI5DaaupFVscSUTvhJv5ipssQi9of",
    "kafka_admin_url": "https://kafka-admin-prod02.messagehub.services.eu-gb.bluemix.net:443",
    "kafka_rest_url": "https://kafka-rest-prod02.messagehub.services.eu-gb.bluemix.net:443",
    "kafka_brokers_sasl": [
      "kafka05-prod02.messagehub.services.eu-gb.bluemix.net:9093",
      "kafka03-prod02.messagehub.services.eu-gb.bluemix.net:9093",
      "kafka04-prod02.messagehub.services.eu-gb.bluemix.net:9093",
      "kafka01-prod02.messagehub.services.eu-gb.bluemix.net:9093",
      "kafka02-prod02.messagehub.services.eu-gb.bluemix.net:9093"
    ],
    "user": "6SqTD9Sp8fznoERb",
    "password": "bwibI5DaaupFVscSUTvhJv5ipssQi9of"
  },

  queryResultMessageHubDetails: {
    topic: "computergroupsresult",
    clientId : "computergroups-consumer",
    groupId : "computergroups-group"
  },
  redis: {
    "db_type": "redis",
    "maps": [],
    "instance_administration_api": {
      "instance_id": "086e5dba-6ff9-490a-8e89-e1512330a6a9",
      "root": "https://composebroker-dashboard-public.eu-gb.mybluemix.net/api",
      "deployment_id": "5aa65e2f84177000202fc3ae"
    },
    "name": "bmix-lon-yp-086e5dba-6ff9-490a-8e89-e1512330a6a9",
    "uri_direct_1": "rediss://admin:HUDIZBKKOTDHQQMH@portal1110-7.bmix-lon-yp-086e5dba-6ff9-490a-8e89-e1512330a6a9.hourigan-bmix-ie-ibm-com.composedb.com:24721",
    "ca_certificate_base64": "LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSURoVENDQW0yZ0F3SUJBZ0lFV3FaZU5qQU5CZ2txaGtpRzl3MEJBUTBGQURCRU1VSXdRQVlEVlFRREREbG8KYjNWeWFXZGhiaXRpYldsNFFHbGxMbWxpYlM1amIyMHROekkxTkRSa05URXpNbVUyWVRFMlltTTNNRFV3TUROaApaVFF5TW1NMFpEZ3dIaGNOTVRnd016RXlNVEV3TWpFMFdoY05Nemd3TXpFeU1URXdNREF3V2pCRU1VSXdRQVlEClZRUURERGxvYjNWeWFXZGhiaXRpYldsNFFHbGxMbWxpYlM1amIyMHROekkxTkRSa05URXpNbVUyWVRFMlltTTMKTURVd01ETmhaVFF5TW1NMFpEZ3dnZ0VpTUEwR0NTcUdTSWIzRFFFQkFRVUFBNElCRHdBd2dnRUtBb0lCQVFEbgpvODBzeVo2QmZUREFpOUErQ3N5bGZPNDE3ZzA5ZWRobWVYQlI3bEdtVnhHTjlHazdWL0VURDQ2ang1WWhNekdDCmg0WVEyR3h4R0pIc0xEdmR4d2NpM283cFBtcnFvanlsYXMwNzVxN3VPNnlVNXdzUHZ1MzJFV3RqeUhKL0JWSGsKd3d1ZVNQS1VWaE80bSt2VE9WY05sS2Z0RkVoR2NzZWFKWEhNVVNZY1ltS1JoSVVjK0h3eHlpdytKOXRYZ25ieApsdUdJUno0ZUJ5V2ZIbFBUSXVJVlpETHRGTFVvZDIxeUdNcE5oenJ3ZDlESmtIZ3RWbUZhRW9ROEhsZkowRkI2Cm5tWERqMHZ0Z2ZLbjJNNi9hUllKQXgrVlpWSC9PZW5SaGlFNzJjWWRsakZ2LzE3TTAyZXI3emhEQk9FcFBReEoKVk04MGdMRTRscWExTGk1VXF6YUJBZ01CQUFHamZ6QjlNQjBHQTFVZERnUVdCQlI1Y3UrOFIrb0ZNN0NjVDZMUQpIcmc0VzVoOFlqQU9CZ05WSFE4QkFmOEVCQU1DQWdRd0hRWURWUjBsQkJZd0ZBWUlLd1lCQlFVSEF3RUdDQ3NHCkFRVUZCd01DTUF3R0ExVWRFd1FGTUFNQkFmOHdId1lEVlIwakJCZ3dGb0FVZVhMdnZFZnFCVE93bkUraTBCNjQKT0Z1WWZHSXdEUVlKS29aSWh2Y05BUUVOQlFBRGdnRUJBR3pTajBsbTFldU5rWVdjWDIyMStxRE1hZ1FTTU9McwppbW9uSGkwajY5Q1lINjhRQXgvZjJmNkFPY1lteHhyQlNyWkp6TSt1bEpZeFdDb09MUC96cGhDUXlSOHExNmVCCkdqWVE1Mkp2eWtycDJUSVk3SEoxbFNuRDdQMU84ZlRDdWQ3b2tRcjQwaFF6RUFHL3dmR2doY05JTTRRZHUxUmwKbVkzWGRralhjSEh3MW5hYzFVT2Y0b3RlVk13aXZRSE1RSEpQemNDazZhQVBoTXJ3OVZBZkg4N2hReEdlKzJiMAp2bmxPN0s0eDJsTkdBSGZ6YlJBa2ZmdTRRbVNSb0xkUlpUaUh4bU1MMXplRHhTVlpkcFNXc2FUeW00bGdiVGVmCnA1Q2wvWFZHZm5rMVlZY0RFMUdjU0I3dnBQNzRMYnliQ2J5V1FScjZ0aWlEenM3d0hhVnFLeTA9Ci0tLS0tRU5EIENFUlRJRklDQVRFLS0tLS0K",
    "deployment_id": "5aa65e2f84177000202fc3ae",
    "uri": "rediss://admin:HUDIZBKKOTDHQQMH@portal1030-6.bmix-lon-yp-086e5dba-6ff9-490a-8e89-e1512330a6a9.hourigan-bmix-ie-ibm-com.composedb.com:24721",
    "misc": {
      "direct_readonly": [],
      "cli_readonly": [],
      "ssh_cli": []
    }
  },
  redisDBs: {
    databases: {
      'default': 0
    },
    db: "default"
  },
  nodeCache: {
    keyPrefix: "node",
    keySeparator: "$$",
    expire: 3600           // # seconds to remove node from cache
  },
  apikeyCache: {
    keyPrefix: "apikey",
    keySeparator: "$$",
    fixedTTL: 3600           // # seconds to remove node from cache
  },
  enrollmentService: {
    url: 'http://enrollment:8081',
    enrollmentsByOrgIdsDeploymentNames: "/api/enrollmentservice/enrollments/byorgidsdeploymentnames",
    authenticateAPICredentialsEndPoint: '/api/authenticate/credentials/'
  },
  optionFlagsService: {
    url: 'http://osquerymetadata:8084',
    optionFlagsEndPoint: '/api/optionflags/',
    validateQueryEndPoint: '/api/query/validate'
  },


  calocation : "./Certificates.pem"
  //calocation : "/etc/ssl/certs"
  // ,
  // queryResultAccessLayerService: {
  //   url: 'http://queryresultdal:8085',
  //   provisionQueryStorageEndPoint: '/queryresult/storage'
  // }
};