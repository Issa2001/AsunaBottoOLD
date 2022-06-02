import { MessageType } from '@adiwajshing/baileys'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { IParsedArgs, ISimplifiedMessage } from "../../typings"; 

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'report',
            aliases: ['rep'],
            description: 'Sends a report to the bot owner',
            category: 'general',
            usage: `${client.config.prefix}report`,
            baseXp: 50
        })
    }

    run = async (

		M: ISimplifiedMessage,		{ joined }: IParsedArgs

	): Promise<void> => {
        
             const term = joined.trim()
            await this.client.sendMessage(
               // enter your unique jid
`120363043430061496@g.us`,
                `*━━━❰ Asuna Report ❱━━━*\n\n📑Message: ${term} by *${M.sender.username}*\n\n📮Group: ${M.groupMetadata?.subject}*\n\n© 𝖠𝗌𝗎𝗇𝖺 2022`,
                MessageType.text
            );
            return void M.reply('🎉Successfully sent the report to bot moderators, action will be taken soon.')
        }}
