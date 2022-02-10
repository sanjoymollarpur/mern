function App() {
    return (
      <>
       <section className="signup">
            <div className="container mt-5">
                <div className="sigup-container">
                    <div className="signup-form">
                        <h2 className="form-title">
                            Sign In
                        </h2>
                        <form action="/" className="register-form" id="register">
                           <div className="form-group">
                               <label htmlFor="email">Email: </label>
                               <br />
                               <input type="text" name="email" id="email" autoComplete="off" placeholder="Enter your email" />
                           </div>
                          
                           
                           <div className="form-group">
                               <label htmlFor="password">Password: </label>
                               <br />
                               <input type="password" name="password" id="name" autoComplete="off" placeholder="Enter password" />
                           </div>
                          
                           <div className="form-group form-button">
                               <input type="submit" value="Log In" name="signup" id="signup" />
                           </div>
                        </form>
                    </div>

                </div>
            </div>

        </section> 
      </>
    );
  }
  
  export default App;