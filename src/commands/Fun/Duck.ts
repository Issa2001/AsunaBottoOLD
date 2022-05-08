import { MessageType, Mimetype } from '@adiwajshing/baileys'
import request from '../../lib/request'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { IParsedArgs, ISimplifiedMessage } from '../../typings'
import axios from 'axios'
import { Sticker, Categories, StickerTypes } from 'wa-sticker-formatter'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'duck',
            aliases: ['duck'],
            description: 'send you a duck sticker',
            category: 'fun',
            dm: true,
            usage: `${client.config.prefix}duck`
        })
    }
    // static count = 0
    run = async (M: ISimplifiedMessage, { joined }: IParsedArgs): Promise<void> => {
        const stickers = [
            "https://api-xcoders.xyz/upload/897dfa78ee5e857ec93e9c9157f622e5.webp",
            "https://api-xcoders.xyz/upload/d127cab0b657e04afff21d008a2af969.webp",
            "https://api-xcoders.xyz/upload/f364ded5b2938361bb31cc499c1984cf.webp",
            "https://api-xcoders.xyz/upload/7957959fdccba579f9d4303659356c60.webp",
            "https://api-xcoders.xyz/upload/7c9886b55aefdecf86ff1a25156b1173.webp",
            "https://api-xcoders.xyz/upload/125f270a9eb15d9d0969b4d72f2988eb.webp",
            "https://api-xcoders.xyz/upload/3ad7194c7c7bcdf4eb87bfdcaf5d58c0.webp",
            "https://api-xcoders.xyz/upload/6aed3c73f70b7fee6042290678fe1b36.webp",
            "https://api-xcoders.xyz/upload/9c302db62378816fa9c3f1a0d38159dc.webp",
            "https://api-xcoders.xyz/upload/028711a2d735d45c729d3198b6e534a4.webp",
            "https://api-xcoders.xyz/upload/acee75d6c78027b309f563668dac2d24.webp",
            "https://api-xcoders.xyz/upload/a7e667c86224337b30d10ffe0b8699f1.webp",
            "https://api-xcoders.xyz/upload/3a9472cccfbcd3240b435439b23d45a0.webp",
            "https://api-xcoders.xyz/upload/945ea9a2d32fff92e2304aaa87048f02.webp",
            "https://api-xcoders.xyz/upload/f7e00b2347ee2e808226d640565ca21e.webp",
            "https://api-xcoders.xyz/upload/cc7cfb517f282e66e62e07bc5d5ee073.webp",
            "https://api-xcoders.xyz/upload/8a9b2e285e8a8863cc146fbcf7aaa5d6.webp",
            "https://api-xcoders.xyz/upload/eefb6e72493b93fab1aeb80e293aede7.webp",
            "https://api-xcoders.xyz/upload/bacb8f45770385e5eba1b3ebced25df6.webp",
            "https://api-xcoders.xyz/upload/515d3e8682716e50cef934f3ab42753b.webp",
            "https://api-xcoders.xyz/upload/677ee9ea68cf37cdc91656a033abf17e.webp",
            "https://api-xcoders.xyz/upload/399728f2b0c860a4ee2c5384b439583e.webp",
            "https://api-xcoders.xyz/upload/5aade4ea0bf979fab961c3ed94aba7f6.webp",
            "https://api-xcoders.xyz/upload/7174371712ade4437949a052ae948cb0.webp",
            "https://api-xcoders.xyz/upload/17856aba1593b430dd1fdf68e3114b69.webp",
            "https://api-xcoders.xyz/upload/27e272ca83edddda6c8432ac70b71620.webp",
            "https://api-xcoders.xyz/upload/4ee6448dab547aef5944e55a3d657555.webp",
            "https://api-xcoders.xyz/upload/14529cd963d756909a92f7957ea7a827.webp",
            "https://api-xcoders.xyz/upload/348b96e57d27bbc076be792d2f3c3057.webp",
            "https://api-xcoders.xyz/upload/23bc8633b670d6f34ff6bfa387751846.webp"
             ];
    const random = stickers[Math.floor(Math.random() * stickers.length)];

        const sticker: any = await new Sticker(random, {
        pack: "𝙈𝙮𝙩𝙝𝙞𝙘🈲",
	author: "İşşa☦︎",
	quality: 50,
	type: "crop",
	categories: ["🎊"],
        });

      await M.reply(
			await sticker.build(),
			MessageType.sticker,
			Mimetype.webp,)
}

}