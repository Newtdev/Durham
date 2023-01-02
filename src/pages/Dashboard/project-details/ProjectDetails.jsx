import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { useFetchSingleProjectQuery } from "../../../features/services/api";
import { supabase } from "../../../lib/supabase";
import { addNewProject } from "../add-project/projectSlice";
import ProjectDashboard from "../project-dashboard";
import { save_profile } from "../Settings/Durhams-settings/ReducerSlice";

const ProjectDetails = () => {
    const path = useLocation();
    const pathID = (path.pathname.split('/')[3])
    const response = useFetchSingleProjectQuery(pathID);
    console.log(response)
    // useDispatch(addNewProject(response.currentData));
    
    
    // useEffect(() => {
    //     let isSubcribed = false;
    //     (async function getById() {
    //         isSubcribed = true;

    //         let { data: durham_projects, error } = await supabase
    //             .from('durham_projects')
    //             .select('*').eq('id', pathID).single();
    //         if (isSubcribed) {
    //             // dispatch(addNewProject(durham_projects));
    //         }
    //         return () => {
    //             isSubcribed = false;
                        
    //         }

    //     }());
    // }, [pathID, dispatch]);
    
    // useEffect(() => {
    //     let isSubcribed = false;
    //     (async function () {
    //         isSubcribed = true;
    //         const response =await supabase.from('Durham_profile').select("*")
    //         if (isSubcribed) {
                
    //             dispatch(save_profile(response.data))
    //         }
    //     }())
    //     return () => {
    // isSubcribed = false;
            
    //     }
    // }, [dispatch])
   return <ProjectDashboard/> 
}


export default ProjectDetails;