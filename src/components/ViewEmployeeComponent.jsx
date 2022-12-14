import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'

class ViewEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            employee: {}
        }
    }

    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then( res => {
            this.setState({employee: res.data});
        })
    }

    homeRedirect(){
        this.props.history.push(`/employees`);
    }
    

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3" style={{width: '26rem'}}>
                    <h3 className = "text-center" style={{marginTop:'15px'}}> View Employee Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label ><b> Employee First Name: </b></label>
                            <div className='ml-1'> { this.state.employee.firstName }</div>
                        </div>
                        <div className = "row">
                            <label><b> Employee Last Name: </b></label>
                            <div className='ml-1'> { this.state.employee.lastName }</div>
                        </div>
                        <div className = "row">
                            <label><b> Employee Email ID: </b></label>
                            <div className='ml-1'> { this.state.employee.emailId }</div>
                        </div>
                        <div className = "row">
                            <label><b> Employee Phone number: </b></label>
                            <div className='ml-1'> { this.state.employee.phoneNumber }</div>
                        </div>
                        <div className = "row">
                            <button style={{marginTop:'10px'}} onClick={() => this.homeRedirect() } className="btn btn-sm btn-success">Home</button>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewEmployeeComponent
