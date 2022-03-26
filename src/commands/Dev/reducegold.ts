import { MessageType } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { IParsedArgs, ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
  constructor(client: WAClient, handler: MessageHandler) {
    super(client, handler, {
      command: "reducegold",
      description: "",
      aliases: [""],
      category: "dev",
      dm: true,
      usage: ``,
      modsOnly: true,
      baseXp: 0,
});
  }

  run = async (
    M: ISimplifiedMessage,
    { joined }: IParsedArgs
  ): Promise<void> => {
    await this.client.DB.user
      .find({})
      .sort([["Xp", "descending"]])
      .exec(async (err, res) => {
        if (err) return void M.reply(`...`);
        for (let i = 0; i < res.length; i++) {
          await this.client.reduceGold(res[i].jid, term);
        }
        return void M.reply(
          `🟩 *Removed all gold from ${res.length} users wallet.*`
        );
      });
  };
}
