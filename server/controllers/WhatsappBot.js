import { google } from 'googleapis';
import dotenv from 'dotenv';
import twilio from 'twilio';
import { KEYS, RESPONSES, KEYS_RESPONSES } from './DecisionTree';
dotenv.config();

const {
  SID: accountSid,
  KEY: TwilloAuthToken,
  APIKEY: googleApiKey,
  CX: cx
} = process.env;

twilio(accountSid, TwilloAuthToken);
const { MessagingResponse } = twilio.twiml;
const customsearch = google.customsearch('v1');

/**
 * @class WhatsappBot
 * @description class will implement bot functionality
 */
class WhatsappBot {
  /**
   * @memberof WhatsappBot
   * @param {object} req - Request sent to the route
   * @param {object} res - Response sent from the controller
   * @param {object} next - Error handler
   * @returns {object} - object representing response message
   */
  static async googleSearch(req, res, next) {
    const twiml = new MessagingResponse();
    const userMessage = req.body.Body || '';
    // console.log('userMessage', userMessage)
    try {
      let sentMessage
      
      const firstWord = userMessage.split(' ')[0] || ''
      // console.log('firstWord', firstWord, firstWord === KEYS.pesquise)
      if (firstWord.toLowerCase() === KEYS.pesquise) {
        const search = userMessage.split(' ').slice(1).join(' ')
        const options = { cx, q: search, auth: googleApiKey };
        const result = await customsearch.cse.list(options);
        const firstResult = result.data.items[0];
        const searchData = firstResult.snippet;
        const link = firstResult.link;
  
        sentMessage = `${searchData} ${link}`
      } else {
        const userMessageNormalized = userMessage.normalize('NFD').replace(/[\u0300-\u036f]/g, "") || ''
        // console.log('userMessageNormalized', userMessageNormalized.toLowerCase(), KEYS_RESPONSES)
        sentMessage = KEYS_RESPONSES[userMessageNormalized.toLowerCase()] || RESPONSES.bemVindo
        // console.log('KEYS_RESPONSES', sentMessage)
      }
      
      // console.log('sentMessage', sentMessage)
      twiml.message(sentMessage);
      res.set('Content-Type', 'text/xml');

      return res.status(200).send(twiml.toString());
    } catch (error) {
      return next(error);
    }
  }
}

export default WhatsappBot;