import React from 'react'
import Layout from '../../component/Layout'
import Footer from '../../component/Footer'

const Login = () => {
  return (
    <Layout>

<form id="loginforrm1">
    <div className="login_div" data-aos="fade-up">
        <div className="mt-5 mx-5 py-3 px-2">
            <h2 className="text-center my-2 text-warning"><u><b>Sign In..!</b></u></h2>
            <div className="container">
                <div className="mb-3">
                    <label className="block text-sm font-medium leading-6">User Name</label> <br/>
                    <input type="text" className='inputBoxCSS'/>
                </div>
                <div className="mb-3">
                    <label className="block text-sm font-medium leading-6">Password</label><br/>
                    <input type="password" className='inputBoxCSS'/>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label">Remember me..!</label>
                </div>
                <button type="submit"  className="btnCss mx-4">Login</button>
                <a href="Home.aspx" className="btnCss">Back</a>
            </div>
            <p className="mt-3">You haven't account..! <a href="/sign-up" className="text-green-500">Sign Up</a></p>
        </div>
    </div>
</form>

<Footer/>

    </Layout>
  )
}

export default Login