import { NanostackClient } from "../src";

const client = new NanostackClient({
  projectId: "603b65dbb9540a21983d3fa1",
});

client.getTables().then((response) => {
  console.log(response);
});
