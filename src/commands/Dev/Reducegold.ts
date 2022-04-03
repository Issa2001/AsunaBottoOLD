import { MessageType } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { IParsedArgs, ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
  constructor(client: WAClient, handler: MessageHandler) {
    super(client, handler, {
      command: "reducegold",
      description: "Reduces the amount of gold globally.",
      aliases: ["-gold"],
      category: "dev",
      dm: true,
      usage: `${client.config.prefix}reducegold`,
      modsOnly: true,
      baseXp: 0,
});
  }

  run = async (
    M: ISimplifiedMessage,
    { joined }: IParsedArgs
  ): Promise<void> => {
    if (!joined)
      return void (await M.reply(`Please provide the amount of gold to reduce.`));
    const term: any = joined.split(" ")[0];
    if (isNaN(term)) return void M.reply(`Well... It should be a number.`);
    await this.client.DB.user
      .find({})
      .sort([["Xp", "descending"]])
      .exec(async (err, res) => {
        if (err) return void M.reply(`...`);
        for (let i = 0; i < res.length; i++) {
          await this.client.reduceGold(res[i].jid, term);
        }
        return void M.reply(
          `🟩 *Removed ${term} gold from ${res.length} users wallet.*`
        );
      });
  };
}
