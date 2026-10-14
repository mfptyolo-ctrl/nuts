import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.resend.com",
  description: "Send transactional emails from your apps.",
  auth: connect("mcp.resend.com/prj_rULxQYYutakNY6wAFw222pOVSF7Q"),
});
