const http = new HttpRequest;


// getting elements 

const sideBarBtn = document.getElementById('sideBarBtn');
const sideBar = document.getElementById('sidebar');
const displaySection = document.getElementById('display');
const businesBtn = document.getElementById('business');
const sportsBtn = document.getElementById('sports');
const heathBtn = document.getElementById('health');
const technologyBtn = document.getElementById('technology');
const headingTop = document.getElementById('heading');



// Defult funtion for event lisners 


const callUrl = (catergory,heading) =>{
    http.getNews(`https://newsapi.org/v2/top-headlines?country=gb&category=${catergory}&apiKey=778bfc6640114916b4f2b2fcb5bc002a`)
    .then((data) => {
        console.log(data);
        let author = '';
    
        if(data.status === 'ok'){

            headingTop.innerText = heading
            
            const articles = data.articles
            console.log(data.articles);
            articles.forEach((e) => {
            //   author = e.title
    
               
    
    
                var check = e.title
    
                if(check.length > 10){
                    check = check.substring(0,50)
                }
                  let newUrl = ''
                if(e.urlToImage == null){
                    newUrl = 'https://www.kentonline.co.uk/_media/img/HIF6IRM8XRCMC41WFXE7.jpg'
                }else{
                    newUrl = e.urlToImage
                }
    
                
              author += `
                          <div
                                  class="max-w-sm mb-8 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                                  <a href="#">
                                      <img class="rounded-t-lg" src="${newUrl}" alt="">
                                  </a>
                                  <div class="p-5">
                                      <a href="#">
                                          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white overflow-hidden">${check}</h5>
                                      </a>
                                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${e.content}</p>
                                      <a href="${e.url}"
                                          class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-amber-500 rounded-lg hover:bg-amber-500 focus:ring-4 focus:outline-none focus:ring-amber-500 dark:bg-amber-500 dark:hover:bg-amber-500 ">
                                          Read more
                                          <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20"
                                              >
                                              <path fill-rule="evenodd"
                                                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                                  clip-rule="evenodd"></path>
                                          </svg>
                                      </a>
                                  </div>
                              </div>`
            })
    
            displaySection.innerHTML = author
            const sideBarDisplay = sideBar.style.display
            sideBarDisplay = 'none'
    
    
    
            }
    })
    .catch((err) => {
      console.log(err);
    })

}




// event listners

// side bar 

sideBarBtn.addEventListener('click',(e) => {
    
    const sideBarDisplay = sideBar.style.display
    // sideBar.style.display = 'flex'

    if(sideBarDisplay == 'none'){
        sideBar.style.display = 'flex'
    }else if(sideBarDisplay == 'flex'){
        sideBar.style.display = "none"
    }

    setTimeout(() => {
        
        sideBar.style.display = "none"
        
    }, 4000);
        

})

// Defualt api calls to show news on load 

http.getNews(`https://newsapi.org/v2/top-headlines?country=gb&apiKey=778bfc6640114916b4f2b2fcb5bc002a`)
.then((data) => {
    // console.log(data);
    let author = '';

    if(data.status === 'ok'){
        
        const articles = data.articles
        // console.log(data.articles);
        articles.forEach((e) => {
        //   author = e.title

           


            var check = e.title

            if(check.length > 10){
                check = check.substring(0,50)
            }
            let newUrl = ''
            if(e.urlToImage == null){
                newUrl = 'https://www.kentonline.co.uk/_media/img/HIF6IRM8XRCMC41WFXE7.jpg'
            }else{
                newUrl = e.urlToImage
            }

            
          author += `
                      <div
                              class="max-w-sm mb-8 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                              <a href="#">
                                  <img class="rounded-t-lg" src="${newUrl}" alt="">
                              </a>
                              <div class="p-5">
                                  <a href="#">
                                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white overflow-hidden">${check}</h5>
                                  </a>
                                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${e.content}</p>
                                  <a href="${e.url}"
                                      class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-amber-500 rounded-lg hover:bg-amber-500 focus:ring-4 focus:outline-none focus:ring-amber-500 dark:bg-amber-500 dark:hover:bg-amber-500 ">
                                      Read more
                                      <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20"
                                          >
                                          <path fill-rule="evenodd"
                                              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                              clip-rule="evenodd"></path>
                                      </svg>
                                  </a>
                              </div>
                          </div>`
        })

        displaySection.innerHTML = author



        }
})
.catch((err) => {
  console.log(err);
})



// event listners for categories 




businesBtn.addEventListener('click', () =>callUrl("business","Business News"))


sportsBtn.addEventListener('click', () =>callUrl("sports", "Sports News"));

heathBtn.addEventListener('click',() =>callUrl("health", "Health News"));

technologyBtn.addEventListener('click',()=>callUrl("technology","Tech News"));




