import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TerminusModule } from '@nestjs/terminus';
import { Controllers } from './api/controllers/controllers';
import { CommandHandlers } from './application/commands/commandHandlers';

@Module({
    imports: [
        CqrsModule,
        HttpModule,
        TerminusModule,
    ],
    controllers: [
        ...Controllers,
    ],
    providers: [
        ...CommandHandlers
    ],
})

export class AppModule { }