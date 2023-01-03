
import ProjectDashboard from "../project-dashboard";

const ProjectDetails = () => {
   
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