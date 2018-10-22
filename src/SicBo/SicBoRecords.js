import React, { Component } from 'react';
import { Table } from 'antd';
import Eos from 'eosjs';

const network = {
    blockchain: 'eos',
    protocol: 'http',
    host: 'junglehistory.cryptolions.io',  // filter-on = *
    port: 18888,
    chainId: '038f4b0fc8ff18a4f0842a8f0564611f6e96e8535901dd45e43ac8691a1c4dca'  // jungle net
}
const contract_account = 'dicecontract';

class SicBoRecords extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data_reveals: [],
        }

        this.eosjs = null;
        this.fetchRecord = this.fetchRecord.bind(this);
    }

    fetchRecord = () => {
        this.eosjs.getActions(contract_account, -1, -90).then(({ actions }) => {
            let limit = 20;
            const _data_reveals = [];
            for ( let i = actions.length - 1; i >= 0 && limit > 0; i-- ) {
                if ( actions[i].action_trace
                    && actions[i].action_trace.act
                    && actions[i].action_trace.act.account === contract_account
                    && actions[i].action_trace.act.name === 'result'
                    && actions[i].action_trace.act.data
                    && actions[i].action_trace.act.data.res
                    && actions[i].action_trace.receipt
                    && actions[i].action_trace.receipt.receiver === contract_account ) {

                    _data_reveals.push({
                        key: i,
                        player: actions[i].action_trace.act.data.res.player,
                        payin: actions[i].action_trace.act.data.res.payin,
                        payout: actions[i].action_trace.act.data.res.payout,
                        payed: actions[i].action_trace.act.data.res.payed ? 'true' : 'false',
                        dices: actions[i].action_trace.act.data.res.dice.dice1 + '、' + actions[i].action_trace.act.data.res.dice.dice2 + '、' + actions[i].action_trace.act.data.res.dice.dice3,
                        detail: actions[i].action_trace.act.data.res.detail,
                    });

                    limit--;
                }
            }
            this.setState({ data_reveals: _data_reveals });
            setTimeout(this.fetchRecord, 2000);
        }).catch(err => {
            console.error( err );
            this.fetchRecord();
        });
    }

    componentDidMount = () => {
        this.eosjs = Eos({
            httpEndpoint: `${network.protocol}://${network.host}:${network.port}`,
            chainId: network.chainId
        });
        this.fetchRecord();
    }

    render() {

        const columns = [{
            key: 'player',
            dataIndex: 'player',
            title: 'Player',
            align: 'center',
            width: '20%',
        }, {
            key: 'payin',
            dataIndex: 'payin',
            title: 'Payin',
            align: 'center',
            width: '15%',
        }, {
            key: 'payout',
            dataIndex: 'payout',
            title: 'Payout',
            align: 'center',
            width: '15%',
        }, {
            key: 'payed',
            dataIndex: 'payed',
            title: 'Payed',
            align: 'center',
            width: '10%',
        }, {
            key: 'dices',
            dataIndex: 'dices',
            title: 'Dices',
            align: 'center',
            width: '15%',
        }, {
            key: 'detail',
            dataIndex: 'detail',
            title: 'Detail',
            align: 'center',
            width: '25%',
        }];

        return (
            <div>
                <Table
                    loading={this.state.data_reveals.length <= 0 ? true : false}
                    columns={columns}
                    dataSource={this.state.data_reveals}
                    pagination={false}
                    style={{ maxHeight: "720px", width: "1080px", margin: "auto", backgroundColor: "#efefef" }}
                />
            </div>
        );
    }
}

export default SicBoRecords;