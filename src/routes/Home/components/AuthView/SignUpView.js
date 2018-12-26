import React, { Component } from 'react';
import * as Http from 'utils/http.helper';

class SignUpView extends Component {

    constructor(){
        super();

        this.state = {
            username: "",
            fullname: "",
            email: "",
            password: ""
        }
    }

    userNameChanged(e) {
        this.setState({
            username: e.target.value
        })
    }

    fullNameChanged(e) {
        this.setState({
            fullname: e.target.value
        })
    }

    emailChanged(e) {
        this.setState({
            email: e.target.value
        })
    }

    passwordChanged(e) {
        this.setState({
            password: e.target.value
        })
    }

    onSignUp(e) {
        e.preventDefault();

        Http.post("auth/sign-up", this.state).then( res => { console.log(res) });
    }

    render() {
        const { changeView } = this.props;
        return(
            <div>
                <form className="form-signin" onSubmit={this.onSignUp.bind(this)}>
                    <div className="text-center mb-4">
                        <img className="mb-4" src="" alt="" width="72" height="72"/>
                        <h1 className="h3 mb-3 font-weight-normal">Kayıt Olun</h1>
                    </div>
                    <div className="form-label-group mb-3">
                        <label for="inputEmail" className="sr-only">Kullanıcı Adı</label>
                        <input type="text" id="inputEmail" className="form-control" placeholder="Kullanıcı adınız" value={this.state.username} onChange={this.userNameChanged.bind(this)} required/>
                    </div>
                    <div className="form-label-group mb-3">
                        <label for="inputEmail" className="sr-only">Tam Adınız</label>
                        <input type="text" id="inputEmail" className="form-control" placeholder="Tam adınız" value={this.state.fullname} onChange={this.fullNameChanged.bind(this)} required/>
                    </div>
                    <div className="form-label-group mb-3">
                        <label for="inputEmail" className="sr-only">E-posta</label>
                        <input type="email" id="inputEmail" className="form-control" placeholder="E-posta adresiniz" value={this.state.email} onChange={this.emailChanged.bind(this)} required/>
                    </div>
                    <div className="form-label-group mb-3">
                        <label for="inputPassword" className="sr-only">Şifre</label>
                        <input type="password" id="inputPassword" className="form-control" placeholder="Şifreniz" value={this.state.password} onChange={this.passwordChanged.bind(this)} required />
                    </div>
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Kayıt Ol</button>
                    <p className="mt-3 text-muted">Zaten üye misiniz? <br/> Giriş yapmak için <a href="" onClick={e => {
                        e.preventDefault();
                        changeView(1);
                    }}>tıklayınız!</a></p>
                </form>
            </div>
        );
    }
}
export default SignUpView;

