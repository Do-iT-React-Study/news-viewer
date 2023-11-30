import styled, { css } from "styled-components";
import { NavLink } from "../../node_modules/react-router-dom/dist/index";

const categories = [
    {
        name: "all",
        text: "전체보기",
    },
    {
        name: "business",
        text: "비즈니스",
      },
      {
        name: "entertainment",
        text: "엔터테인먼트",
      },
      {
        name: "health",
        text: "건강",
      },
      {
        name: "science",
        text: "과학",
      },
      {
        name: "sports",
        text: "스포츠",
      },
      {
        name: "technology",
        text: "기술",
      },
];

export const Categories = ({ category, onSelect }) => {
    return (
        <CategoryContainer>
            {categories.map((data) => {
                return (<CategoryItem
                    key={data.name}
                    // onClick={() => onSelect(data.name)}
                    // active={category == data.name}
                    activeClassName="active"
                    to={data.name == "all" ? "/" : `/${data.name}`}
                    >
                    {data.text} </CategoryItem>
                );
            })
            }
        </CategoryContainer>
    );
};

export const CategoryContainer = styled.div`
    display: flex;
    gap: 20px;
    font-family: Pretendard;
    font-size: 1.5rem;
    margin: 20px auto;
    width: 80%; //fluid

    @media (max-width: 1080px) {

    }
`;

export const CategoryItem = styled(NavLink)`
    cursor: pointer;
    text-decoration:none;
    color:black;

    ${(props) => props.active &&
    
    css`
        font-weight: 700;
        border-bottom: 2px solid #22b8cf;
        color: #22b8cf;

        &:hover {
            color:#3bc9db;
        }
    `}

    &:active {
        font-weight: 700;
        border-bottom: 2px solid #22b8cf;
        color: #22b8cf;
    

        &:hover {
            color:#3bc9db;
        }

        &:focus {
            
        }
    }
`;