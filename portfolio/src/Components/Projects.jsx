import React from 'react'



// const projects = [
//   {
//     id: 1,
//     title: "Portfolio Website",
//     desc: "A responsive personal portfolio built with React and Bootstrap"
//   },
//   {
//     id: 2,
//     title: "Image Gallery",
//     desc: "Image Gallery using HTML and CSS"
//   },
//   {
//     id: 3,
//     title: "Web Page",
//     desc: "Web Page using HTML and CSS"
//   }
// ];
//  const Projects = () => {
//   return (
//     <div className="containers mt-4">
//       <h2 className="text-center">My Projects</h2>

//       <div className="rows">
//         {projects.map((item) => (
//           <div className="col-md-4" key={item.id}>
//             <div className="cards p-3 mb-3">
//               <h4>{item.title}</h4>
//               <p>{item.desc}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };



const Projects = () => {
  return (
    <>
      <section class="projects" id="projects">
    <h2> My <span style={{color:"greenyellow",borderBottom:'2px groove yellowgreen'}}> Projects </span> </h2>
    <div class="project-container">
        <div class="project-cards">
            <h3> Portfolio Website </h3>
            <p> <pre> A responsive personal portfolio build using HTML and CSS. </pre></p>
        </div>
    

   <div class="project-cards">
    <h3> Image Gallery </h3>
    <p> <pre> Modern image  gallery with hover effects and grid layout   </pre></p>
   </div>

   <div class=" project-cards">
    <h3> Login Form </h3>
    <p> <pre> User-friendly login page with attractive UI design.</pre></p>
   
   </div>


    </div>
 </section> 
 </>)
}

export default Projects






