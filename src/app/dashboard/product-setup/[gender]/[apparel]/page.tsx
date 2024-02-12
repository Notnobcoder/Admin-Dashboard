import React from "react";
import SetupRoot from "./SetupRoot";

export default function page({
  params,
}: {
  params: { gender: string; apparel: string };
}) {
  return <SetupRoot gender={params.gender} apparel={params.apparel} />;
}
