function Signup() {
    return (
      <>
        <section className="signup">
            <div className="container mt-5">
                <div className="sigup-container">
                    <div className="signup-form">
                        <h2 className="form-title">
                            Sign up
                        </h2>
                        <form action="/" className="register-form" id="register">
                           <div className="form-group">
                               <label htmlFor="name">Name: </label>
                               <br />
                               <input type="text" name="name" id="name" autoComplete="off" placeholder="Enter your name" />
                           </div>


                           <div className="form-group">
                               <label htmlFor="email">Email: </label>
                               <br />
                               <input type="text" name="email" id="email" autoComplete="off" placeholder="Enter your email" />
                           </div>
                           <div className="form-group">
                               <label htmlFor="phone">Phone: </label>
                             <br />
                               <input type="number" name="phone" id="phone" autoComplete="off" placeholder="Enter your phone number" />
                           </div>
                           <div className="form-group">
                               <label htmlFor="work">Work: </label>
                               <br />
                               <input type="text" name="work" id="work" autoComplete="off" placeholder="Enter your position" />
                           </div>
                           <div className="form-group">
                               <label htmlFor="password">Password: </label>
                               <br />
                               <input type="password" name="password" id="name" autoComplete="off" placeholder="Enter password" />
                           </div>
                           <div className="form-group">
                               <label htmlFor="cpassword">Conform Password: </label>
                               <br />
                               <input type="password" name="cpassword" id="name" autoComplete="off" placeholder="Enter conform password" />
                           </div>
                           <div className="form-group form-button">
                               <input type="submit" value="Register" name="signup" id="signup" />
                           </div>
                        </form>
                    </div>

                </div>
            </div>

        </section>
      </>
    );
  }
  
  export default Signup;