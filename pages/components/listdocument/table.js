import React, { Component } from 'react';
import ReactTable           from 'react-table';
import axios                from 'axios';
// import 'react-table/react-table.css';
import './table.less'

const TableColumns = [{
    Header: "STT",
    width: 50,
    Cell: (row) => {
        return <div>{row.index + 1}</div>;
    }
},{
    Header: "Tên biểu mẫu",
    accessor: "name",
},{
    Header: "Tải về",
    id: "file",
    Cell: (row) => {
        const { filename } = row.original.file
        let url = `/static/assets/${filename}`
        return <a href={url} style={{color: "#13a0b2", textDecoration: "underline"}}>{filename}</a>
    }
}]

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            files: []
        }
    }
    componentDidMount() {
        axios.get("/api/form-files")
        .then(res => this.setState({files: res.data}))
        .catch(err => console.log(err))
    }
    render() {
        return (
            <ReactTable
                previousText="Trang trước"
                nextText="Trang kế"
                rowsText='hàng'
                ofText='trên'
                pageText='Trang'
                noDataText='Không có dữ liệu'
                loadingText='Đang tải...'
                pageJumpText='Chọn trang'
                rowsSelectorText='hàng trên trang'
                columns={TableColumns}
                data={this.state.files}
                defaultPageSize={10}
            />
        );
    }
}

export default Table;
