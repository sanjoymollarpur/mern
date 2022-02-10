function Contact() {
    return (
      <>
       <div className="contact-info">
         <div className="container-fluid">
           <div className="row">
             <div className="box-1">
               Phone: 8145542317
             </div>
             <div className="box-2">
               Email: sanjoymlp2014@gmail.com
             </div>
             <div className="box-3">
               Address: Birbhum, West Bengal 
             </div>
            
             </div> 
          </div> 
        </div> 
        <div className="contact-form">
         <h2>
           Submit your details</h2>
           <form  id="contact_form">
               <div className="contact">
                <input type="text" id="conatct_form_name" placeholder="your name"/>
               </div>
               <div className="contact">
                <input type="email" id="conatct_form_email" placeholder="your email"/>
               </div>
               <div className="contact">
                <input type="number" id="conatct_form_number" placeholder="your phone number"/>
               </div>
                 <textarea name="message" placeholder="message" id="" cols="23" rows="6"></textarea>
               
                 <div>
                 <button type="submit" className="btn btn-primary">Send Message</button>
                 </div>
               
            </form>               
        </div>
      </>
    );
  }
  
  export default Contact;