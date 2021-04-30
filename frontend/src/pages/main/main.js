import React from "react";
import Config from "../../config/config";
import Table from "../../components/table/table";
import "./main.css";

class Main extends React.Component {

    state = {
        data: [],
        f_name_query: null,
        l_name_query: null,
        dept_query: null
    }

    style = {
        paddingLeft: '0'
    }

    componentDidMount() {
        this.getData();
    }

    getData() {
        return fetch(
            Config.API.ADDRESS, {
                method: "GET",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }
            }).then(response => {
            response.json().then(responseJson => {
                this.setState({
                    data: responseJson
                });
            });
        });
    };

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleFilterRequest(e){

        let query = "?";

        if (this.state.f_name_query != null){
            query = query + `&f_name=${this.state.f_name_query}`;
        }

        if (this.state.l_name_query != null){
            query = query + `&l_name=${this.state.l_name_query}`;
        }

        if (this.state.dept_query != null){
            query = query + `&dept=${this.state.dept_query}`;
        }

        return fetch(
            Config.API.ADDRESS + query, {
                method: "GET",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }
            }).then(response => {
            response.json().then(responseJson => {
                this.setState({
                    data: responseJson
                });
            });
        });
    }

    handleAddRequest(e){
        let path = "add";
        this.props.history.push(path);
    }

    render(){

        let data = this.state.data;

        return(
        <div className={'main'}>
            <label>First Name </label>
            <input
                name={'f_name_query'}
                placeholder={'First name'}
                onChange={(e) => this.handleChange(e)}
                />

            <br/>
            <br/>

            <label>Last Name </label>
            <input
                name={'l_name_query'}
                placeholder={'Last name'}
                onChange={(e) => this.handleChange(e)}
            />

            <br/>
            <br/>

            <label>Department </label>
            <input
                name={'dept_query'}
                placeholder={'Department'}
                onChange={(e) => this.handleChange(e)}
            />

            <br/>
            <br/>

            <button onClick={(e) => this.handleFilterRequest(e)}>Filter</button>

            <br/>

            <Table columns={Config.COL} data={data} propertyAsKey='name'/>
            <button onClick={(e) => this.handleAddRequest(e)}>Add</button>
        </div>
        );
    }
}

export default Main;