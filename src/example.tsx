import React from "react";

import { T, Init } from "@nexys/tableau-wdc-react";

// start parameters definition
const columns: T.ColumnDef[] = [
  { name: "one" },
  { name: "two" },
  { name: "three" },
  { name: "four" },
  { name: "five" },
  { name: "six" },
  { name: "seven" },
];

const prefix = "/tableau-wdc-react-boilerplate"; // note this is required for GH pages
const url = prefix + "/data.json";

const report1: T.Report = {
  id: "dataFeed",
  alias: "dataFeedAlias",
  url,
  method: "GET",
  columns,
};

const reports: T.Report[] = [report1];
const config: T.Config = { name: "My Data Feed", reports };
// end parameters defintion

export default () => <Init config={config} />;
