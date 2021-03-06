﻿/// <reference path="../_ref.ts" />
module Messaging {
  "use strict";

  export interface ILogEvent {
    Id?: string;
    Date?: string;
    Level?: string;
    Logger?: string;
    Message?: string;
    Source?: string;
    Correlation?: string;
    Exception?: ILogError;
    Properties?: any;

    Expanded?: boolean;
  }
}
