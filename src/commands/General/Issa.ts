/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "issa",
			description: "Displays the info",
			category: "general",
			usage: `${client.config.prefix}issa`,
			baseXp: 200,
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		const becky =
			"https://www.linkpicture.com/q/Issa-logo.jpg";
		return void this.client.sendMessage(
			M.from,
			{ url: becky },
			MessageType.image,
			{
				quoted: M.WAMessage,
				mimetype: Mimetype.jpeg,
				caption: `Hey pal!🍃I'm Issa, a learner/student & an upcoming developer in the future.
            
📫𝙒𝙝𝙖𝙩𝙨𝘼𝙥𝙥;
Wa.me/254115175696
Wa.me/16156236963

⭕𝙂𝙞𝙩𝙝𝙪𝙗;
https://github.com/Issa2001

📮𝙄𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢;
https://instagram.com/__.i.s.s.a.__

🕸𝙏𝙚𝙡𝙚𝙜𝙧𝙖𝙢;
t.me/Issa2001

🟦𝙁𝙖𝙘𝙚𝙗𝙤𝙤𝙠;
https://www.facebook.com/profile.php?id=100037298193290

🚀𝘿𝙞𝙨𝙘𝙤𝙧𝙙;
｟𝖢𝗈𝗆𝗂𝗇𝗀 𝖲𝗈𝗈𝗇｠

⪼𝖲𝖾𝖾 𝗒𝖺𝗁 💘`,
			}
		);
	};
}