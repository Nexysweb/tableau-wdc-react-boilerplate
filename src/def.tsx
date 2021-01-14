import React from "react";

import { T, Init } from "@nexys/tableau-wdc-react";

const plans: T.ColumnDef[] = [
  { name: "Plan Id" },
  { name: "Geo" },
  { name: "Market" },
  { name: "Country" },
  { name: "BP" },
  { name: "Ceid" },
  { name: "Question 5" },
  { name: "Marketing Plan" },
  { name: "revenue" },
  { name: "ownInvestment" },
];

const activities: T.ColumnDef[] = [
  { name: "mkt section id" },
  { name: "start" },
  { name: "end" },
  { name: "n leads" },
  { name: "channel" },
  { name: "n people" },
  { name: "description" },
  { name: "lead value" },
  { name: "tactic" },
  { name: "budget" },
  { name: "revenue" },
];

const milestones: T.ColumnDef[] = [
  { name: "mkt activity id" },
  { name: "owner" },
  { name: "title" },
  { name: "date" },
];

const participants: T.ColumnDef[] = [
  { name: "plan id" },
  { name: "firstName" },
  { name: "lastName" },
  { name: "email" },
  { name: "phone" },
];

// get query params
const urlParams = new URLSearchParams(window.location.search);

// year
const yearParam = Number(urlParams.get("year"));

if (
  isNaN(yearParam) ||
  yearParam < 2016 ||
  yearParam > new Date().getFullYear()
) {
  throw Error("date not in acceptable range");
}

// key
const keyParam = urlParams.get("key");
const key = process.env.REACT_APP_KEY || "defaultKey";

console.log({ key, keyParam });

if (keyParam !== key) {
  throw Error("key wrong");
}

// end query params

// start parameters definition

const url = "/business-plan/report/byYear?year=" + yearParam;

const reports: T.Report[] = Object.entries({
  plans,
  activities,
  milestones,
  participants,
}).map(([id, columns]) => {
  return {
    id,
    alias: id,
    url,
    method: "GET",
    columns,
    mapping: (x: any) => {
      const [head, ...content]: [string[], T.Value[]] = x[id];

      const s: T.ServiceResponse = [head as string[], content];
      return s;
    },
  };
});

const config: T.Config = { name: "BPMS", reports };
// end parameters defintion

export default () => <Init config={config} />;
