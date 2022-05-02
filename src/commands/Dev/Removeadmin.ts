import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            modsOnly: true,
            command: 'removeadmin',
            description: 'demotes the mentioned users, only developer & mods cmd only.',
            category: 'dev',
            usage: `${client.config.prefix}removeadmin [mention | @tag]`,
            baseXp: 10
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        if (!M.groupMetadata?.admins?.includes(this.client.user.jid))
            return void M.reply(`❌ Failed to ${this.config.command} as I'm not an admin`)
        if (M.quoted?.sender) M.mentioned.push(M.quoted.sender)
        if (!M.mentioned.length) return void M.reply(`Please tag the users you want to ${this.config.command}`)
        M.mentioned.forEach(async (user) => {
            const usr = this.client.contacts[user]
            const username = usr.notify || usr.vname || usr.name || user.split('@')[0]
            if (!M.groupMetadata?.admins?.includes(user)) M.reply(`❌ Skipped *${username}* as they're not an admin`)
            else if (user !== this.client.user.jid) {
                await this.client.groupDemoteAdmin(M.from, [user])
                M.reply(`*🚥Status:*\n\n✅Removed *${username}* as an admin.`)
            }
        })
    }
}
