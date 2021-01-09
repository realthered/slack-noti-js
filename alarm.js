const { SSL_OP_TLS_ROLLBACK_BUG } = require('constants');
const Slack = require('slack-node');

//in App - Install App
const bot_token = ""
const request_url = ""
const content_type = "application/x-www-form-urlencoded"

const slack = new Slack(bot_token);

const send = async(message) => {
    slack.api('chat.postMessage', {
        username: 'slack_api',
        text: message,
        channel: '#일반',
    }, function(err, response){
        console.log(response)
    });
}

send('1시간 뒤 모임 시작합니다~')
