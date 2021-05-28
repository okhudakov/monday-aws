const AWS = require('aws-sdk');

function notifyIamhereLambda() {
    const eventBridge = new AWS.EventBridge({ region: 'us-east-1' });

    return eventBridge.putEvents({
        Entries: [
            {
                EventBusName: 'custombus',
                Source: 'hello.iamhere.cb',
                DetailType: 'UserChangedCard',
                Detail: `{ "card": "card" }`,
            },
        ]
    }).promise()
}


module.exports.hello = async event => {

    const result = await notifyIamhereLambda();
    return {
        statusCode: 200,
        body: JSON.stringify(
            {
                message: result,
                input: event,
            },
            null,
            2
        ),
    };

};

module.exports.iamhere = async event => {
    console.log("AZZAZAFEJKNGLWKENGN!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!:AJEGLKSEGRLKJNSLR");
    return {
        statusCode: 200,
        body: JSON.stringify(
            {
                message: 'EVENTBUSSSSSSSSSSSSSSSSSSSSS!!!!!!!!!!!!!!!!!!!!!',
                input: event,
            },
            null,
            2
        ),
    };

};
