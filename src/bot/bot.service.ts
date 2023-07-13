import { Injectable, OnModuleInit } from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const TelegramBot = require('node-telegram-bot-api');

@Injectable()
export class BotService implements OnModuleInit {
    async onModuleInit() {
        await this.botMessage();
    }

    async botMessage() {
        const bot = new TelegramBot(process.env.TG_TOKEN, { polling: true });

        bot.on('message', (msg) => {
            console.log(msg);
            bot.sendMessage(msg.chat.id, 'Привет');
        });
    }
}
