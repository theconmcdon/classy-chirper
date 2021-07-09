import React from 'react';
import DumpsterRouter from '../components/DumpsterRouter'

class DumpsterLogin2 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            nickName: '',
            username: '',
            login: false
        };
    }

    handleLogin() {
        this.setState({ login: true });
    }

    render() {
        if (!this.state.login) {
            return (
                <div>
                    <div class='row justify-content-center d-flex flex-row'>
                        <h1 class='display-1 text-center text-danger pt-5 mt-5'>dive in</h1>
                    </div>
                    <div class='row d-flex flex-row pt-5'></div>
                    <div class='row d-flex flex-row justify-content-center'>
                        <div class="form-row align-items-center">
                            <div class="col-sm-4 my-1">
                                <label class="sr-only" for="inlineFormInputName">Name</label>
                                <input type="text" class="form-control" id="inlineFormInputName" placeholder="Nickname" value={this.state.nickName} onChange={e => this.setState({ nickName: e.target.value })} />
                            </div>
                            <div class="col-sm-4 my-1">
                                <label class="sr-only" for="inlineFormInputGroupUsername">Username</label>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">@</div>
                                    </div>
                                    <input type="text" class="form-control" id="inlineFormInputGroupUsername" placeholder="Username" value={this.state.username} onChange={e => this.setState({ username: e.target.value })} />
                                </div>
                            </div>
                            <div class="col-4 my-1">
                                <input style={{width: "15em"}} type="submit" class="btn btn-danger" onClick={() => this.handleLogin()} value='Join' />
                            </div>
                        </div>
                    </div>
                    <div class='mt-3 row justify-content-center d-flex flew-row'>
                        <p id='avail' class=''></p>
                    </div>
                    <div class='row justify-content-center d-flex flew-row'>
                        <p id='help' class=''></p>
                    </div>
                </div>
            );
        } else if (this.state.login) {
            return (
                <DumpsterRouter username={this.state.username} nickName={this.state.nickName}/>
            )
        }
    }
}

export default DumpsterLogin2;

