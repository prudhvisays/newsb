import React from 'react';
import Select, { Option } from 'rc-select';
import './selectStyle.css';

export default class RePilotSelect extends React.Component { //eslint-disable-line
    constructor(props) {
        super(props);
        this.state = {
            useAnim: 0,
            value: [],
        }
        this.onChange = this.onChange.bind(this);
        this.useAnim = this.useAnim.bind(this);
    }

    onChange(value) {
        const { stateData } = this.props;
        this.props.reOrder({...stateData, pilot: value});
    }
    useAnim(e) {
        this.setState({
            useAnim: e.target.checked,
        });
    }
    render() {
        const { stateData } = this.props;
        const filteredPilots = this.props.reSelectedPilots && this.props.reSelectedPilots.map((pilot) => (
                <Option key={pilot._id} text={pilot.user.firstName.toLowerCase()}>{pilot.user.firstName}</Option>
            ));
        return (
            <Select
                value={stateData.pilot ? stateData.pilot : ''}
                allowClear
                placeholder="Select Pilot"
                style={{ width: '100%' }}
                animation="slide-up"
                showSearch={true}
                optionLabelProp="children"
                optionFilterProp="text"
                onChange={this.onChange}
                defaultActiveFirstOption={false}
                notFoundContent=""
            >
                {filteredPilots}
            </Select>
        );
    }
}
