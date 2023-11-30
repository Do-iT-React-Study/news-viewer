import { useParams } from 'react-router-dom'
import { NewsList } from "../NewsList";
import { Categories } from "../components/Categories";


export const NewsPage = () => {
    const { category } = useParams();

    const cate = category || "all";

    //route path

    return (
        <>
            <Categories />
            <NewsList category={cate} />
        
        </>
    );
};