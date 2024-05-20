import * as fs from 'fs';
import os from 'os';
import { browserConfig } from '../src/test/support/config';

var path = require('path');
const allureEnvPropertiesPath = path.join('reporter-config', 'environment.properties');
const allureEnvPropertiesTargetPath = path.join('allure-results', 'environment.properties');

function setEnvironmentToPropertiesFile() {

    fs.writeFileSync(
        allureEnvPropertiesPath,
        `Machine = ${os.machine()} 
        \nSystem_platform = ${os.platform()} 
        \nPlatform_release = ${os.release()}
        \nPlatform_version = ${os.version()}
        \nCPU_model = ${os.cpus().at(0)?.model}
        \nCPU_speed = ${os.cpus().at(0)?.speed}
        \nCPU_idle = ${os.cpus().at(0)?.times.idle}
        \nCPU_irq = ${os.cpus().at(0)?.times.idle}
        \nCPU_nice = ${os.cpus().at(0)?.times.nice}
        \nCPU_sys = ${os.cpus().at(0)?.times.sys}
        \nCPU_user = ${os.cpus().at(0)?.times.user}
        \nArch = ${os.arch()}
        \nTotal_memory = ${os.totalmem()}
        \nBrowser = ${browserConfig.browser}`
    );
}

export function writeEnvironmentToAllureReport() {

    setEnvironmentToPropertiesFile();

    fs.copyFile(allureEnvPropertiesPath, allureEnvPropertiesTargetPath, (err) => {
        if(err) throw err;
    })
}