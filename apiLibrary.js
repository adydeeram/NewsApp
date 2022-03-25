class HttpRequest{

   async getNews(url){
        const respose = await fetch(url);
        const data = await respose.json()


        return data
    }

}