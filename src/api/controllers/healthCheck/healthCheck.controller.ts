import { Controller, Get } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { ApiTags } from '@nestjs/swagger';
import { HealthCheck } from '@nestjs/terminus';
import { HealthCheckCommand } from 'src/application/commands/healthCheck/health.check.handler';

@Controller('/healthcheck')
@ApiTags('HealthCheck')
export class HealthController {
    constructor(private readonly _commandBus: CommandBus) { }

    @Get('')
    @HealthCheck()
    async check() {
        return await this._commandBus.execute(new HealthCheckCommand());
    }
}
