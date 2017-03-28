import React from 'react';
import Select, { Option } from 'rc-select';
import 'rc-select/assets/index.css';


function onDeselect() {
    console.log(arguments);
}
export default class FranchiseSelect extends React.Component { //eslint-disable-line
    constructor(props) {
        super(props);
        this.state = {
            useAnim: 0,
            value: [],
        }
        this.onChange = this.onChange.bind(this);
        this.useAnim = this.useAnim.bind(this);
        this.emitChanges = this.emitChanges.bind(this);
        this.onSelect = this.onSelect.bind(this);
    }

    componentDidMount() {
        this.props.getFranchise();
    }

    onSelect(arg) {
        console.log(arguments);
    }

    onChange(value) {
        const { userInfo } = this.props;
        this.emitChanges({ ...userInfo, franchise: value });
    }
    emitChanges(data) {
        this.props.onUserFormChange(data);
    }
    useAnim(e) {
        this.setState({
            useAnim: e.target.checked,
        });
    }
    render() {
        const { stateFranchiseList } = this.props;
        const { franchise } = this.props.userInfo;
        const dropdownMenuStyle = {
            maxHeight: 200,
            overflow: 'auto',
            borderRadius: 0,
            fontSize: '0.8rem',
        };
        const franchiseList = stateFranchiseList && stateFranchiseList.map((list) => (
                <Option key={list._id} title={list.name}>{list.name}</Option>
            ));
        console.log(franchiseList);
        return (
            <Select
                value={franchise}
                allowClear
                placeholder="Select Franchise"
                dropdownMenuStyle={dropdownMenuStyle}
                style={{ width: '100%' }}
                animation="slide-up"
                showSearch={false}
                optionLabelProp="children"
                optionFilterProp="text"
                onChange={this.onChange}
            >
                {franchiseList}
            </Select>
        );
    }
}

