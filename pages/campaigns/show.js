import React, {Component} from 'react';
import Layout from '../../components/Layout';
import Campaign from '../../ethereum/campaign'
import { Card, Grid, Button } from 'semantic-ui-react'
import web3 from '../../ethereum/web3';
import ContributeForm from '../../components/ContributeForm';
import { Link } from '../../routes';

class CampaignShow extends Component {
    static async getInitialProps(props) {
        const campaign = Campaign(props.query.address);
        const summary = await campaign.methods.getSummary().call();
        return {
            address: props.query.address,
            minimumContribution: summary[0],
            balance: summary[1],
            requestsCount: summary[2],
            approversCount: summary[3],
            manager: summary[4]
        };
    }

    renderCards() {
        const {
            balance, manager, minimumContribution, requestsCount, approversCount
        } = this.props;
        const items = [
            {
                header: manager,
                meta: 'Address of Manager',
                description: 'The manager created this campaign and can create withdraw requests.',
                style: {overflowWrap: 'break-word' }
            },
            {
                header: web3.utils.fromWei(balance, 'ether'),
                meta: 'Campaign Balance (ether)',
                description: 'This is the current balance of the campaign.',
                style: {overflowWrap: 'break-word' }
            },
            {
                header: minimumContribution,
                meta: 'Minimum Contribution',
                description: 'This is the minimum amount of wei required to become a backer.',
                style: {overflowWrap: 'break-word' }
            },
            {
                header: approversCount,
                meta: 'Number of Approvers',
                description: 'Number of approvers',
                style: {overflowWrap: 'break-word' }
            },
            {
                header: requestsCount,
                meta: 'Number of Requests',
                description: 'The number of withdraw requests created by the manager.',
                style: {overflowWrap: 'break-word' }
            }
            
        ];
        return <Card.Group items={items} />
    }
    
    render() {
       return (
        <Layout>
        <h3> Campaign Show</h3>
            <Grid>
                <Grid.Column width={10}>
                        {this.renderCards()}
                        <Link route={`/campaigns/${this.props.address}/requests`}>
                            <a>
                                <Button primary>View Requests</Button>
                            </a>
                        </Link>
                </Grid.Column>
                
                <Grid.Column width={6}>
                        <ContributeForm address={this.props.address} />         
                </Grid.Column>
            </Grid>
        </Layout>
        )
    }
}

export default CampaignShow;