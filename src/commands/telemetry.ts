/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import { Command } from '@oclif/core';
import TelemetryReporter from '@salesforce/telemetry';
import Telemetry from '../telemetry';
import { TelemetryGlobal } from '../telemetryGlobal';

declare const global: TelemetryGlobal;

export default class TelemetryGet extends Command {
  public static hidden = true;

  public async run(): Promise<void> {
    const enabled = await TelemetryReporter.determineSfdxTelemetryEnabled();

    this.log(`Telemetry is ${enabled ? 'enabled' : 'disabled'}.`);
    this.log(`Telemetry tmp directory is ${Telemetry.tmpDir}.`);
    this.log(`Telemetry cache directory is ${this.config.cacheDir}.`);
    this.log();
    this.log(`Salesforce CLI ID is ${global.cliTelemetry?.getCLIId()}.`);
  }
}
