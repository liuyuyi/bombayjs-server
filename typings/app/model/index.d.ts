// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportProject from '../../../app/model/project';
import ExportUser from '../../../app/model/user';
import ExportWebWebApi from '../../../app/model/web/web_api';
import ExportWebWebAvg from '../../../app/model/web/web_avg';
import ExportWebWebBehavior from '../../../app/model/web/web_behavior';
import ExportWebWebError from '../../../app/model/web/web_error';
import ExportWebWebHealth from '../../../app/model/web/web_health';
import ExportWebWebMsg from '../../../app/model/web/web_msg';
import ExportWebWebPercent from '../../../app/model/web/web_percent';
import ExportWebWebPerf from '../../../app/model/web/web_perf';
import ExportWebWebPromise from '../../../app/model/web/web_promise';
import ExportWebWebPv from '../../../app/model/web/web_pv';
import ExportWebWebReport from '../../../app/model/web/web_report';
import ExportWebWebRes from '../../../app/model/web/web_res';
import ExportWebWebResource from '../../../app/model/web/web_resource';
import ExportWebWebSum from '../../../app/model/web/web_sum';

declare module 'egg' {
  interface IModel {
    Project: ReturnType<typeof ExportProject>;
    User: ReturnType<typeof ExportUser>;
    Web: {
      WebApi: ReturnType<typeof ExportWebWebApi>;
      WebAvg: ReturnType<typeof ExportWebWebAvg>;
      WebBehavior: ReturnType<typeof ExportWebWebBehavior>;
      WebError: ReturnType<typeof ExportWebWebError>;
      WebHealth: ReturnType<typeof ExportWebWebHealth>;
      WebMsg: ReturnType<typeof ExportWebWebMsg>;
      WebPercent: ReturnType<typeof ExportWebWebPercent>;
      WebPerf: ReturnType<typeof ExportWebWebPerf>;
      WebPromise: ReturnType<typeof ExportWebWebPromise>;
      WebPv: ReturnType<typeof ExportWebWebPv>;
      WebReport: ReturnType<typeof ExportWebWebReport>;
      WebRes: ReturnType<typeof ExportWebWebRes>;
      WebResource: ReturnType<typeof ExportWebWebResource>;
      WebSum: ReturnType<typeof ExportWebWebSum>;
    }
  }
}
