import photo from '../images/photo.jpg'
function App() {
  return (
    <>

      <div className="container">
        <form action="" method="">
          <img src={photo} height="150px" alt="" />
          <h5>Sanjoy Mondal</h5>
          <h6>Web Developer</h6>
          <p>RANKINGS: <span>1/10</span> </p>
          <ul className="nav nav-tabs" role="tablist">
            <li className="nav-item">
              <a className="nav-link active" id="home-tab" data-toggle="tab" role="tab" aria-current="page" href="/">About</a>
            </li>
            <li className="nav-item">
            <a className="nav-link " id="profile-tab" data-toggle="tab" role="tab" aria-current="page" href="/">Timeline</a>
            </li>
           
          </ul>
          <div className="btn">
            <input type="submit" name="btnAddMore" value="Edit Profile" />
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="profile-work">
                <p>WORK LINK</p>
                 <a href="youtubelink" target="_blank">Youtube</a>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;