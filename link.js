const axios = require('axios');

const token = "";

async function run() {
    const url = 'https://slack.com/api/chat.postMessage';
    const res = await axios.post(url, {
      channel: '#일반',
      blocks: [{
            type: "section",
            text: {
                type: "plain_text",
                text: "모임 시작합니다~"
            },
            accessory:
                {
                    type: "button",
                    text: {
                        type: "plain_text",
                        text: "Join Now!"
                    },
                    url: "http://meet.google.com/phi-ywjk-bsd",
                    style: "primary"
                }
        }]
    }, { headers: { authorization: `Bearer ${token}` } });
    console.log('Done', res.data);
}

run().catch(err => console.log(err));
