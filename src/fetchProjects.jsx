import { createClient } from "contentful";
import { useState, useEffect } from "react";

const client = createClient({
  space: "kde8ej8pevlq",
  environment: "master", // defaults to 'master' if not set
  accessToken: import.meta.env.VITE_API_KEY,
});



export const useFetchProject = () => {

const [isLoading , setIsloading] = useState(true)
const [projects, setProjects] = useState([])

const getData = async() => {

    try{
        const response = await client.getEntries({ content_type: "projects" })

        const projects = response.items.map( (item) => {

            const {title, url , image} =  item.fields
            const id= item.sys.id
            const img = image?.fields?.file?.url

            return {id, title, url ,img }

        })

        setProjects(projects)
        setIsloading(false)
    }
    catch(error){
        console.log(error)
        setIsloading(false);
    }


  
}

useEffect( () => {
    getData()

}, [])


  return { projects, isLoading };

}



