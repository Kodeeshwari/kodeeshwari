 // Fetch data.json and process it
 fetch('../data/data.json')
     .then(response => response.json())
     .then(data => {
         // Display work items
         displayWork(data.work);

         // Display skills
         displaySkills(data.skill);
     })
     .catch(error => console.error('Error fetching data:', error));

 function displayWork(workData) {
     const workContainer = document.getElementById('works-list');

     if (workContainer != null) {


         workData.forEach(workItem => {
             const workHTML = `
     <div class="col-md-4">
       <div class="article animate-box fadeInUp animated">
         <a href="${workItem.link}" class="blog-img">
           <img class="img-responsive" src="${workItem.imageSrc}" alt="html5 bootstrap by colorlib.com">
           <div class="overlay"></div>
           <div class="link">
             <span class="read">Read more</span>
           </div>
         </a>
         <div class="desc">
           <span class="meta">${workItem.date}</span>
           <h2><a href="${workItem.link}">${workItem.title}</a></h2>
           <p>${workItem.description}</p>
         </div>
       </div>
     </div>
   `;

             workContainer.insertAdjacentHTML('beforeend', workHTML);
         });
     }

 }

 function displaySkills(skillsData) {
     const skillsContainer = document.getElementById('skills-list');

     if (skillsContainer != null) {

         skillsData.forEach(skill => {
                     const skillHTML = `
        <div class="col-md-6">
          <div class="services animate-box fadeInUp animated">
            <h3>${skill.category}</h3>
            <ul>
              ${skill.subskills.map(subskill => `<li>${subskill}</li>`).join('')}
            </ul>
          </div>
        </div>
      `;
  
      skillsContainer.insertAdjacentHTML('beforeend', skillHTML);
    });
}

}