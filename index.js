'use strict';

const line = require('@line/bot-sdk');
const express = require('express');
const pg = require('pg');

// dotenv
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').load();
}

// create LINE SDK config from env variables
const config = {
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
  channelSecret: process.env.CHANNEL_SECRET,
};

// create LINE SDK client
const client = new line.Client(config);

// create postgre pool
const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
})

// create Express app
// about Express itself: https://expressjs.com/
const app = express();

// register a webhook handler with middleware
// about the middleware, please refer to doc
app.post('/webhook', line.middleware(config), (req, res) => {
  Promise
    .all(req.body.events.map(handleEvent))
    .then((result) => res.json(result));
});

// event handler
function handleEvent(event) {
  if (event.type !== 'message' || event.message.type !== 'text') {
    // ignore non-text-message event
    return Promise.resolve(null);
  }

  // create a echoing text message
  //const echo = { type: 'text', text: event.message.text };

  if (event.source.type === 'group' && typeof event.source.userId !== 'undefined') {
    console.log(event);
    // get user display name first
    client.getGroupMemberProfile(event.source.groupId, event.source.userId)
    //client.getProfile(event.source.userId)
      .then((profile) => {
        const displayName = profile.displayName;

        if (event.message.text === '!summon') {
          // query ms
          pool.query("SELECT * FROM monster WHERE id IN (SELECT id FROM (SELECT id FROM monster WHERE attribute IN ('Water', 'Fire', 'Wind') ORDER BY (-LOG(1 - RANDOM()) / weight) LIMIT 1) t);", (err, res) => {
            if (err) {
              console.error(err);
            }
            else {
              const t = displayName + ' got ' + res.rows[0].grade + '* ' + res.rows[0].attribute + ' ' + res.rows[0].name;

              // create monster message
              const monster = {
                type: 'text',
                text: t,
              };

              // use reply API
              return client.replyMessage(event.replyToken, monster);
            }
          });
        } else if (event.message.text === '!summonlnd') {
          // query lnd
          pool.query("SELECT * FROM monster WHERE id IN (SELECT id FROM (SELECT id FROM monster WHERE attribute IN ('Light', 'Dark') ORDER BY (-LOG(1 - RANDOM()) / weight) LIMIT 1) t);", (err, res) => {
            if (err) {
              console.error(err);
            }
            else {
              // response.send('You got ' + res.rows[0].grade + '* ' + res.rows[0].attribute + ' ' + res.rows[0].name);
              const t = displayName + ' got ' + res.rows[0].grade + '* ' + res.rows[0].attribute + ' ' + res.rows[0].name;

              // create monster message
              const monster = {
                type: 'text',
                text: t,
              };

              // use reply API
              return client.replyMessage(event.replyToken, monster);
            }
          });
        } else if (event.message.text === '!summonls') {
          // query ls
          pool.query("SELECT * FROM monster WHERE id IN (SELECT id FROM (SELECT id FROM monster WHERE grade > 3 AND attribute IN ('Water', 'Fire', 'Wind') ORDER BY (-LOG(1 - RANDOM()) / weight) LIMIT 1) t);", (err, res) => {
            if (err) {
              console.error(err);
            }
            else {
              // response.send('You got ' + res.rows[0].grade + '* ' + res.rows[0].attribute + ' ' + res.rows[0].name);
              const t = displayName + ' got ' + res.rows[0].grade + '* ' + res.rows[0].attribute + ' ' + res.rows[0].name;

              // create monster message
              const monster = {
                type: 'text',
                text: t,
              };

              // use reply API
              return client.replyMessage(event.replyToken, monster);
            }
          });
        } else if(event.message.text === '!summontrs') {
          // query ts
          pool.query("SELECT * FROM monster WHERE grade = 5 AND attribute IN ('Water', 'Fire', 'Wind') ORDER BY RANDOM() LIMIT 1);", (err, res) => {
            if (err) {
              console.error(err);
            }
            else {
              console.log(res);
              // response.send('You got ' + res.rows[0].grade + '* ' + res.rows[0].attribute + ' ' + res.rows[0].name);
              const t = displayName + ' got ' + res.rows[0].grade + '* ' + res.rows[0].attribute + ' ' + res.rows[0].name;

              // create monster message
              const monster = {
                type: 'text',
                text: t,
              };

              // use reply API
              return client.replyMessage(event.replyToken, monster);
            }
          });
        } else if (event.message.text === '!leave') {
            const bye = {
              type: 'text',
              text: 'ditendang ' + displayName + '. bye',
            };
            client.replyMessage(event.replyToken, bye)
              .then(() => {
                return client.leaveGroup(event.source.groupId);
              })
              .catch((err) => {
                console.err(err);
              });
          }

      })
      .catch((err) => {
        console.error(err);
      });
    } else if (event.source.type === 'room') {
      // get user display name first
      client.getRoomMemberProfile(event.source.roomId, event.source.userId)
      //client.getProfile(event.source.userId)
        .then((profile) => {
          const displayName = profile.displayName;

          if (event.message.text === '!summon') {
            // query ms
            pool.query("SELECT * FROM monster WHERE id IN (SELECT id FROM (SELECT id FROM monster WHERE attribute IN ('Water', 'Fire', 'Wind') ORDER BY (-LOG(1 - RANDOM()) / weight) LIMIT 1) t);", (err, res) => {
              if (err) {
                console.error(err);
              }
              else {
                const t = displayName + ' got ' + res.rows[0].grade + '* ' + res.rows[0].attribute + ' ' + res.rows[0].name;

                // create monster message
                const monster = {
                  type: 'text',
                  text: t,
                };

                // use reply API
                return client.replyMessage(event.replyToken, monster);
              }
            });
          } else if (event.message.text === '!summonlnd') {
            // query lnd
            pool.query("SELECT * FROM monster WHERE id IN (SELECT id FROM (SELECT id FROM monster WHERE attribute IN ('Light', 'Dark') ORDER BY (-LOG(1 - RANDOM()) / weight) LIMIT 1) t);", (err, res) => {
              if (err) {
                console.error(err);
              }
              else {
                // response.send('You got ' + res.rows[0].grade + '* ' + res.rows[0].attribute + ' ' + res.rows[0].name);
                const t = displayName + ' got ' + res.rows[0].grade + '* ' + res.rows[0].attribute + ' ' + res.rows[0].name;

                // create monster message
                const monster = {
                  type: 'text',
                  text: t,
                };

                // use reply API
                return client.replyMessage(event.replyToken, monster);
              }
            });
          } else if (event.message.text === '!summonls') {
            // query lnd
            pool.query("SELECT * FROM monster WHERE id IN (SELECT id FROM (SELECT id FROM monster WHERE grade > 3 AND attribute IN ('Water', 'Fire', 'Wind') ORDER BY (-LOG(1 - RANDOM()) / weight) LIMIT 1) t);", (err, res) => {
              if (err) {
                console.error(err);
              }
              else {
                // response.send('You got ' + res.rows[0].grade + '* ' + res.rows[0].attribute + ' ' + res.rows[0].name);
                const t = displayName + ' got ' + res.rows[0].grade + '* ' + res.rows[0].attribute + ' ' + res.rows[0].name;

                // create monster message
                const monster = {
                  type: 'text',
                  text: t,
                };

                // use reply API
                return client.replyMessage(event.replyToken, monster);
              }
            });
          } else if (event.message.text === '!leave') {
              const bye = {
                type: 'text',
                text: 'ditendang ' + displayName + '. bye',
              };
              client.replyMessage(event.replyToken, bye)
                .then(() => {
                  return client.leaveRoom(event.source.roomId);
                })
                .catch((err) => {
                  console.err(err);
                });
            }

        })
        .catch((err) => {
          console.error(err);
        });
    }

  /*if (event.message.text === '!leave' && event.source.groupId !== '') {
    const bye = {
      type: 'text',
      text: 'bye',
    };
    client.replyMessage(event.replyToken, bye)
      .then(() => {
        return client.leaveGroup(event.source.groupId);
      })
      .catch((err) => {
        console.err(err);
      });
  }*/

}

// other route
/*app.get('/db', function (request, response) {

  pool.query("SELECT * FROM monster WHERE id IN (SELECT id FROM (SELECT id FROM monster WHERE attribute IN ('Water', 'Fire', 'Wind') ORDER BY (-LOG(1 - RANDOM()) / weight) LIMIT 1) t);", (err, res) => {
    if (err) {
      console.error(err);
      response.send("Error " + err);
    }
    else {
      response.send('You got ' + res.rows[0].grade + '* ' + res.rows[0].attribute + ' ' + res.rows[0].name);
    }
  });

});*/

// pool shutdown
// pool.end();

// listen on port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});