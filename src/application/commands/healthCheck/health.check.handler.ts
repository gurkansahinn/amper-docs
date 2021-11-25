import { CommandHandler, ICommandHandler, ICommand } from '@nestjs/cqrs';
import { HealthCheckService, HttpHealthIndicator } from '@nestjs/terminus';

export class HealthCheckCommand implements ICommand {
    constructor() { }
}

@CommandHandler(HealthCheckCommand)
export class HealthCheckHandler implements ICommandHandler<HealthCheckCommand> {
    constructor(
        private readonly _health: HealthCheckService,
        private readonly _http: HttpHealthIndicator,
    ) { }

    async execute() {
        await this._health.check([
            async () =>
                this._http.pingCheck('nestjs-docs', 'https://docs.nestjs.com'),
        ]);

        return null;
    }
}
