import { MessageType, Mimetype } from '@adiwajshing/baileys'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'support',
            aliases: ['support'],
            description: 'Gets the support group links',
            category: 'general',
            usage: `${client.config.prefix}Support`,
            baseXp: 10
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        (await this.client.sendMessage(
        M.sender.jid,
                `*📮𝗦𝘂𝗽𝗽𝗼𝗿𝘁 𝗚𝗿𝗼𝘂𝗽 𝗟𝗶𝗻𝗸𝘀*
「Sapphire: LAST RUN🚀」:\n\nhttps://chat.whatsapp.com/CToNn7booyKCY81KBp4EdI\n\n「Sapphire: Casino💰」:\n\nhttps://chat.whatsapp.com/CqkSfSE9NcfCrKpZ0L5iDp\n\n 「Sapphire: Quiz📑」:\n\nhttps://chat.whatsapp.com/Hb9k9E31AiY4yxhdJBHPrW\n\n「Sapphire: NSFW🧜‍♂️」\n\nhttps://chat.whatsapp.com/L1UnEn35h5h4i35qTs585g`,
           MessageType.text
        ))
        const n = [
            './assets/images/asuna-yuuki.png','./assets/images/yuuki-asuna.jpeg',
        ]
        let rin = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: rin }, MessageType.image, {quoted:M.WAMessage,
            mimetype: Mimetype.jpeg,
            caption: `Regarding this, I have sent you a personal message in your DM📪\n` }
        )

        }
}
