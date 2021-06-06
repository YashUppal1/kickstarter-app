import React, { Component } from "react";
<<<<<<< HEAD
import { Button } from "semantic-ui-react";
import { Link } from "../../../routes";
import Layout from "../../../components/Layout";
import Campaign from "../../../ethereum/campaign";

class RequestIndex extends Component {
  static async getInitialProps(props) {
    const { address } = props.query;
    const campaign = Campaign(address);
    const requestCount = await campaign.methods.getRequestsCount().call();

    const requests = await Promise.all(
      Array(parseInt(requestCount))
        .fill()
        .map((element, index) => {
          return campaign.methods.requests(index).call();
        })
    );
    return { address, requests, requestCount };
  }
  render() {
    return (
      <Layout>
        <h3>Requests</h3>
        <Link route={`/campaigns/${this.props.address}/requests/new`}>
          <a>
            <Button primary>Add Request</Button>
          </a>
        </Link>
      </Layout>
    );
=======

class RequestIndex extends Component {
  render() {
    return <h3>Request List</h3>;
>>>>>>> c2fb56591abbd9722a8892de64cbb247a528ebb8
  }
}

export default RequestIndex;
