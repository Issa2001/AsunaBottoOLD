/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
  constructor(client: WAClient, handler: MessageHandler) {
    super(client, handler, {
      command: "faq",
      description: "shows the faq of asuna",
      category: "general",
      usage: `${client.config.prefix}rules`,
      baseXp: 100,
    });
  }

  run = async (M: ISimplifiedMessage): Promise<void> => {
    const buttons = [
      {
        buttonId: "rules",
        buttonText: { displayText: `${this.client.config.prefix}rules` },
        type: 1,
      },
    ];

    const buttonMessage: any = {
      contentText: `*━━━❰ FAQ ❱━━━*

📮 *Q1:* How do I add Asuna bot in my group?
📑 *A:* Send the group link in the bot's or owner's DM & it will join soon.
ᚖ ────── ✪ ────── ᚖ

📮 *Q2:* What are the requirements for the bot to join a group?
📑 *A:* First the group must have atleast 50 members for the bot to join & the group must be active & also be a non-hentai/porn group.
ᚖ ────── ✪ ────── ᚖ

📮 *Q3:* How do I earn XP in the group?
📑 *A:* By earning XP you will need to use commands of the bot like reaction command & others.
ᚖ ────── ✪ ────── ᚖ

📮 *Q4:* Can the bot work in personal message?
📑 *A:* Yes, but ONLY stickers command will work otherwise you're recommended to use the bot in groups only.
ᚖ ────── ✪ ────── ᚖ

📮 *Q5:* Can I call the bot?
📑 *A:* Calling the bot is at your own pleasure but with consequences thus you will be blocked & banned instantly for calling the bot!
ᚖ ────── ✪ ────── ᚖ

📮 *Q6:* Where can I find Asuna bot?
📑 *A:* Asuna is one of the bots owned by *Sapphire🈲* group. Incase you need other bots, use the command ${this.client.config.prefix}support & you will get support group link in your DM.
ᚖ ────── ✪ ────── ᚖ

📮 *Q7:* Can you hire a bot from *Sapphire🈲?*
📑 *A:* Based on the copyrights, we don't hire bots to anyone thus the bots are free to use.
ᚖ ────── ✪ ────── ᚖ

📮 *Q8:* Why is the bot not working in my group?
📑 *A:* There are 3 main reasons for that, either the bot is lagging due to data traffic, inactive or the bot has been banned.
ᚖ ────── ✪ ────── ᚖ

📮 *Q9:* How can I create a bot like Asuna?
📑 *A:* You can't deploy a version of Asuna thus it's not an open source project.
ᚖ ────── ✪ ────── ᚖ

📮 *Q10:* Is the project or the *Sapphire🈲* group sponsored?
📑 *A:* Of course not, we're not sponsored either way but it could be your own pleasure to do that thus this is a non-profit organization.
ᚖ ────── ✪ ────── ᚖ`,
      footerText: "© 𝖠𝗌𝗎𝗇𝖺 2022",
      buttons: buttons,
      headerType: 1,
    };
    await M.reply(buttonMessage, MessageType.buttonsMessage);
  };
}
