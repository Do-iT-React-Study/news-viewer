import { useParams } from "../../node_modules/react-router-dom/dist/index"
import { Categories } from "../components/Categories";
import { NewsList } from "../NewsList";
export const NewsPage = () =>{

    const {category} = useParams();

    const cate = category || "all";

    return(
        <>
            <Categories/>
            <NewsList category={cate}/>
        </>
    )
}