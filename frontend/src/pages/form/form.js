import React from "react";
import Config from "../../config/config";
import "./form.css";

class Form extends React.Component {

    state = {
        f_name: null,
        l_name: null,
        phone_num: null,
        dept: null,
        msg: null
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    handleAddRequest(e) {

        const body = {
            "f_name": this.state.f_name,
            "l_name": this.state.l_name,
            "phone_num": this.state.phone_num,
            "department": this.state.dept
        }

        return fetch(
            Config.API.ADDRESS, {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            }).then(response => {
            response.json().then(() => {
                this.props.history.push("/");
            });
        });
    }


    goBack() {
        this.props.history.goBack();
    }

    render() {
        return (
            <div className={'form'}>
                <h1>Add Entry</h1>
                <label>First Name</label>
                <input
                    name={'f_name'}
                    placeholder={'John'}
                    onChange={(e) => this.handleChange(e)}
                    required
                />
                <br/>
                <br/>
                <label>Last Name</label>
                <input
                    name={'l_name'}
                    placeholder={'Doe'}
                    onChange={(e) => this.handleChange(e)}
                    required
                />
                <br/>
                <br/>
                <label>Phone Number</label>
                <input
                    name={'phone_num'}
                    placeholder={'+1234567'}
                    onChange={(e) => this.handleChange(e)}
                    required
                />
                <br/>
                <br/>
                <label>Department</label>
                <input
                    name={'dept'}
                    placeholder={'Admin'}
                    onChange={(e) => this.handleChange(e)}
                    required
                />
                <br/>
                <br/>
                <button onClick={(e) => this.handleAddRequest(e)}>Add</button>
                <button onClick={(e) => this.goBack()}>Return</button>
            </div>
        );
    }
}

export default Form;