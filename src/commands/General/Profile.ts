import { MessageType } from '@adiwajshing/baileys'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import request from '../../lib/request'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'profile',
            description: 'Displays user-profile 📜',
            category: 'general',
            usage: `${client.config.prefix}profile [tag/quote]`,
            aliases: ['p', 'pf'],
            baseXp: 200
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
    if (M.quoted?.sender) M.mentioned.push(M.quoted.sender);
    const user = M.mentioned[0] ? M.mentioned[0] : M.sender.jid;
    let username = user === M.sender.jid ? M.sender.username : "";
    if (!username) {
      const contact = this.client.getContact(user);
      username =
        contact.notify || contact.vname || contact.name || user.split("@")[0];
    }
    let haigusha;
    if (await (await this.client.getUser(user)).married) {
      haigusha = await (await this.client.getUser(user)).haigusha.name;
    } else {
      haigusha = "None";
    }
    let pfp: string;
    try {
      pfp = await this.client.getProfilePicture(user);
    } catch (err) {
      M.reply(`Profile Picture not Accessible of ${username}`);
      pfp = "https://wallpaperaccess.com/full/5304840.png";
    }
      const exp = (await this.client.getUser(user)).Xp;
		let role: string;
				if (exp < 500) {
					role = "🎖 Noob";
				} else if (exp < 1000) {
					role = "🏅 Citizen";
				} else if (exp < 2000) {
					role = "👼 Baby Wizard";
				} else if (exp < 3000) {
					role = "🧙‍♀️ Wizard Goddess";
				} else if (exp < 4000) {
					role = "🧙‍♂️ Wizard Lord";
				} else if (exp < 5000) {
					role = "🔴 Relic";
				} else if (exp < 7000) {
					role = "⚫ Relic II";
				} else if (exp < 8500) {
					role = "⚪ Relic III";
				} else if (exp < 10000) {
					role = "🔹 Ace";
				} else if (exp < 15000) {
					role = "🔸 Ace II";
				} else if (exp < 20000) {
					role = "🔶 Ace Dominator";
				} else if (exp < 25000) {
					role = "🔷 Ace Master";
				} else if (exp < 50000) {
					role = "💠 Supreme";
				} else if (exp < 75000) {
					role = "💍 Supreme II";
				} else if (exp < 100000) {
					role = "💎 Supreme III";
				} else if (exp < 120000) {
					role = "🔮 Supreme Master";
				} else if (exp < 130000) {
					role = "👻 Ghost";
				} else if (exp < 150000) {
					role = "☠️ Ghost Return";
				} else if (exp < 200000) {
					role = "💀 Ghost Reborn";
				} else if (exp < 220000) {
					role = "🧚🏻 Fairy";
				} else if (exp < 250000) {
					role = "🧚‍♂️ Fairy Rise";
				} else if (exp < 280000) {
					role = "🧜 Fairy Pass";
				} else if (exp < 300000) {
					role = "🧜‍♂️ Fairy End";
				} else if (exp < 350000) {
					role = "⚡ Lynx";
				} else if (exp < 400000) {
					role = "🥷 Hermit";
				} else if (exp < 450000) {
					role = "⚔ Butcher";
				} else if (exp < 500000) {
					role = "🐜 Wasp";
				} else if (exp < 550000) {
					role = "🧛‍♀️ Widow";
				} else if (exp < 600000) {
					role = "⛩️ Shogun";
				} else if (exp < 650000) {
					role = "🐼 Panda";
				} else if (exp < 700000) {
					role = "🗿 Titan";
				} else if (exp < 750000) {
					role = "👹 Demon Lord";
				} else if (exp < 800000) {
					role = "❄ Frost Giant";
				} else if (exp < 850000) {
					role = "🦣 Mammoth";
				} else if (exp < 900000) {
					role = "🌑 Deja Vu";
				} else {
					role = "🐉 Immortal";
				}

				let level: number;
				if (exp < 500) {
					level = 1;
				} else if (exp < 1000) {
					level = 2;
				} else if (exp < 2000) {
					level = 3;
				} else if (exp < 3000) {
					level = 4;
				} else if (exp < 4000) {
					level = 5;
				} else if (exp < 5000) {
					level = 6;
				} else if (exp < 7000) {
					level = 7;
				} else if (exp < 8500) {
					level = 8;
				} else if (exp < 10000) {
					level = 9;
				} else if (exp < 15000) {
					level = 10;
				} else if (exp < 20000) {
					level = 11;
				} else if (exp < 25000) {
					level = 12;
				} else if (exp < 50000) {
					level = 13;
				} else if (exp < 75000) {
					level = 14;
				} else if (exp < 100000) {
					level = 15;
				} else if (exp < 120000) {
					level = 15;
				} else if (exp < 130000) {
					level = 16;
				} else if (exp < 150000) {
					level = 17;
				} else if (exp < 200000) {
					level = 18;
				} else if (exp < 220000) {
					level = 19;
				} else if (exp < 250000) {
					level = 20;
				} else if (exp < 280000) {
					level = 21;
				} else if (exp < 300000) {
					level = 22;
				} else if (exp < 350000) {
					level = 23;
				} else if (exp < 400000) {
					level = 24;
				} else if (exp < 450000) {
					level = 25;
				} else if (exp < 500000) {
					level = 26;
				} else if (exp < 550000) {
					level = 27;
				} else if (exp < 600000) {
					level = 28;
				} else if (exp < 650000) {
					level = 29;
				} else if (exp < 700000) {
					level = 30;
				} else if (exp < 750000) {
					level = 31;
				} else if (exp < 800000) {
					level = 32;
				} else if (exp < 850000) {
					level = 33;
				} else if (exp < 900000) {
					level = 34;
				} else {
					level = 35;
				}
        await M.reply(
            await request.buffer(
                pfp ||
                    'https://wallpapercave.com/uwp/uwp2159404.jpeg'
            ),
            MessageType.image,
            undefined,
            undefined,
            `🏮 *Username: ${username}*\n\n🎗️ *About: ${
        (await this.client.getStatus(user)).status || "None"
      }*\n\n❤ *Haigusha: ${haigusha}*\n\n〽️ *Level: ${level}*\n\n⭐ *Exp: ${
        exp || 0
      }*\n\n💫 *Role: ${role}*\n\n🏦 *Bank: ${(await this.client.getUser(user)).bank}*\n\n🪙 *Wallet: ${(await this.client.getUser(user)).wallet}*\n\n🍀 *Quiz Points: ${
        (
          await this.client.getUser(user)
        ).quizPoints
      }*\n\n♦️ *Pokemons: ${await (
        await this.client.getUser(user)
      ).pokemons.length}*\n\n🎗 *Characters: ${
        (
          await this.client.getUser(user)
        ).gallery.length
      }*\n\n👑 *Admin: ${
        M.groupMetadata?.admins?.includes(user) || false
      }*\n\n✖ *Ban: ${(await this.client.getUser(user)).ban || false}*`
    );
  };
}
