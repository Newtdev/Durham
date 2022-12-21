import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { supabase } from "../../../lib/supabase";
import { addNewProject } from "../add-project/projectSlice";
import ProjectDashboard from "../project-dashboard";

const ProjectDetails = () => {
    const path = useLocation();
    const pathID = (path.pathname.split('/')[3])
    const dispatch = useDispatch();
    
    
    useEffect(() => {
        (async function getById() {
            let { data: durham_projects, error } = await supabase
                .from('durham_projects')
                .select('*').eq('id', pathID).single();
          
            dispatch(addNewProject(durham_projects));

            // dispatch(sav)
        }())
    },[pathID,dispatch])
   return <ProjectDashboard/> 
}


export default ProjectDetails;