import React, {Component} from 'react';
import { connect } from 'react-redux';
import { userInit } from '../../../../store/userReducer';
import { post } from '../../../../utils/http.helper';

class LoginView extends Component {
    constructor() {
        super();
        
        this.state = {
            email: "",
            password: ""
        }
    }

    onUserClick() {

        const user = {
            email: this.state.email,
            password: this.state.password
        }

        post('auth/login', user).then(res => {
            
            if(res.state){
                localStorage.setItem("userToken", res.token);
                this.props.userInit({ email: user.email });
            }
        });
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

    render() {
        
        const changeView = this.props.changeView;
        
        return (
            <div>
                <form className="form-signin">
                    <div className="text-center mb-4">
                        <img className="mb-4" src="" alt="" width="72" height="72"/>
                        <h1 className="h3 mb-3 font-weight-normal">Giriş Yapın</h1>
                    </div>
                    <div className="form-label-group mb-3">
                        <label for="inputEmail" className="sr-only">E-posta</label>
                        <input type="email" id="inputEmail" className="form-control" value={this.state.email} placeholder="E-posta adresiniz" required onChange={this.emailChanged.bind(this)}/>
                    </div>
                    <div className="form-label-group mb-3">
                        <label for="inputPassword" className="sr-only">Şifre</label>
                        <input type="password" id="inputPassword" className="form-control" value={this.state.password} placeholder="Şifreniz" required onChange={this.passwordChanged.bind(this)} />
                    </div>
                    <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me" /> Beni Hatırla
                        </label>
                    </div>
                    <button className="btn btn-lg btn-primary btn-block" onClick={this.onUserClick.bind(this)} type="button">Giriş Yap</button>
                    <p className="mt-3 text-muted">Henüz üye olmadınız mı? <br/> Ücretsiz kayıt olmak için <a href="" onClick={e => {
                        e.preventDefault();
                        changeView(2);
                    }}>tıklayınız!</a></p>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userData: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loginUserData: (user) => dispatch(userInit(user))
    }
}
// eğer bir şeyi map edeceksek connect i export etmemiz yeterli 
// export default LoginView;

export default connect(mapStateToProps, mapDispatchToProps)(LoginView);