const API_ADDR = process.env.REACT_APP_API_ADDR;

export default{
    API: {
        ENDPOINT: `http://${API_ADDR}:8000/sample/api/`,
        get ADDRESS(){
            return this.ENDPOINT + "address/";
        }
    },
    COL: [{
        header: "ID",
        accessor: "id"
    },{
        header: "First Name",
        accessor: "f_name"
    },{
        header: "Last Name",
        accessor: "l_name"
    },{
        header: "Phone Number",
        accessor: "phone_num"
    },{
        header: "Department",
        accessor: "department"
    }
    ]
};