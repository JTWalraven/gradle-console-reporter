package com.github.ksoichiro.console.reporter.config

import com.github.ksoichiro.console.reporter.report.IstanbulReport

class IstanbulReportConfig extends CoverageReportConfig<IstanbulReport> {
    IstanbulReportConfig() {
        coverageTaskName = 'npm_run_test'
    }
}