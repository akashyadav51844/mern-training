import { Link } from "react-router-dom"

function Portfolio() {


    return(<>
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to ="#">Portfolio</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav ms-auto" >
        <Link className="nav-link  px-5" aria-current="page" to="/">Home</Link>
        <Link className="nav-link px-5" to ="About">About</Link>
        <Link className="nav-link px-5" to ="Skills">Skills</Link>
        <Link className="nav-link px-5" to ="Projects">Projects</Link>
         <div class="sci">

            <a href="#" class="fa fa-linkedin"></a>
            <a href="#" class ="fa fa-instagram"></a>
            <a href="#" class="fa fa-github"></a>
            <a href="#" class="fa fa-facebook"></a>
            </div>
       


        
      </div>
       
       
    </div>
  </div>
 

</nav>
    
    
    
    
    </>)
}
export default Portfolio

