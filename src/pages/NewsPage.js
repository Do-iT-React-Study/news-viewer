import { useParams } from "../../node_modules/react-router-dom/dist/index";
import { NewsList } from "../NewsList";
import { Categories } from "../components/Categories";

export const NewsPage = () => {

    const {category} = useParams();

    const cate = category || "all";

    return (
        <>
            <Categories />
            <NewsList category={cate} />
        </>
    );
};