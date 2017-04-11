import React from 'react';
import Select, { Option } from 'rc-select';
import 'rc-select/assets/index.css';

export default class ReTeamSelect extends React.Component { //eslint-disable-line
    constructor(props) {
        super(props);
        this.state = {
            value: [],
        };
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        const { stateData } = this.props;
        let value;
        if (e && e.target) {
            value = e.target.value;
        } else {
            value = e;
        }
        this.props.reOrder({...stateData, team:value});
    }

    render() {
        const { stateData } = this.props;
        const select = this.props.stateTeamList && this.props.stateTeamList.map((team) => (
                <Option key={team._id}  text={team.name}>{team.name}</Option>
            ));
        return (
            <Select
                value={stateData.team ? stateData.team : ''}
                allowClear
                placeholder="Select Team"
                style={{ width: '100%' }}
                animation="slide-up"
                showSearch={true}
                optionLabelProp="children"
                optionFilterProp="text"
                onChange={this.onChange}
            >
                {select}
            </Select>
        );
    }
}
