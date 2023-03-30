import axios from 'axios';

export const postToMessageBoard = (eventName, username, timestamp, message) => {
  const createMessageBoardTableIfNotExistsURL =
    'https://v3hwpflxic45xlpl43t5ldeywa0tacgr.lambda-url.us-east-1.on.aws/';
  const postToMessageBoardURL =
    'https://errc6j276lrp5jeqb6rmhom4bi0hgdmw.lambda-url.us-east-1.on.aws/';

  return axios
    .post(createMessageBoardTableIfNotExistsURL, { eventName })
    .then((response) => {
      console.log(response.data, '<<<<RES');

      return response.data.endsWith('already exists.')
        ? Promise.resolve()
        : new Promise((resolve) => setTimeout(resolve, 10000));
    })
    .then(() => {
      return axios.post(postToMessageBoardURL, {
        eventName,
        username,
        timestamp,
        message,
      });
    })
    .then((response) => {
      console.log('finished');
      return response.data;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};
