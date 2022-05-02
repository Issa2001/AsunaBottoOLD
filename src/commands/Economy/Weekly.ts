import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";
import ms from "parse-ms-js";

export default class Command extends BaseCommand {
  constructor(client: WAClient, handler: MessageHandler) {
    super(client, handler, {
      command: "weekly",
      description: "Claims weekly gold",
      category: "economy",
      usage: `${client.config.prefix}weekly`,
      baseXp: 10,
    });
  }

  run = async (M: ISimplifiedMessage): Promise<void> => {
    const user = M.sender.jid;
    const time = 604800000;
    const cd = await (await this.client.getUser(user)).lastWeekly;
    if (time - (Date.now() - cd) > 0) {
      const timeLeft = ms(time - (Date.now() - cd));
      return void M.reply(
        `🟨 You claimed your weekly gold recently. Claim again in *${timeLeft.hours} hour(s), ${timeLeft.minutes} minute(s), ${timeLeft.seconds} second(s)*`
      );
    }
    await this.client.addGold(user, 7000);
    await this.client.DB.user.updateOne(
      { jid: user },
      { $set: { lastWeekly: Date.now() } }
    );
    return void M.reply(`🎉 *7000 gold* has been added to your wallet.`);
  };
}
