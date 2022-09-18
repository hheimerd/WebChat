import styled from 'styled-components';
import type {Category} from '../../models/Category';
import {styles} from '../../styles/mixins';


export type CategoriesProps = {
    categories: Category[],
    onSelect(category: Category): void,
    selectedCategory: Category | null
}

export function Categories({categories, selectedCategory, onSelect}: CategoriesProps) {
    return (
        <Wrapper>

            {selectedCategory && <CategoryItemSelection
                style={{transform: `translateY(${40 * categories.indexOf(selectedCategory)}px)`}}/>}

            {
                categories.map(category => (
                    <CategoryItem
                        key={category.id}
                        onClick={() => onSelect(category)}
                    >
                        <CategoryItemIco src={category.icon}/>
                        <CategoryItemName>
                            {category.name}
                        </CategoryItemName>
                    </CategoryItem>
                ))
            }

        </Wrapper>
    );
}

const Wrapper = styled.div`
  background: rgba(var(--background-300-rgb), 0.5);
  height: 100%;
  padding: 1rem;

  gap: 2px;

  ${styles.fluent}
`;


const CategoryItem = styled.div`
  & * {
    z-index: 20;
  }

  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 1rem;

  width: 212px;
  height: 40px;
  border-radius: 5px;
  padding: 0.5rem;

  cursor: pointer;

  transition: 0.2s;

  &:hover {
    color: var(--primary)
  }
`;

const CategoryItemSelection = styled.div`
  z-index: 10;
  width: 212px;
  height: 40px;
  border-radius: 5px;

  background: rgba(0, 0, 0, 0.3);
  position: absolute;
  transition: 0.5s;
`;

const CategoryItemIco = styled.img`
  height: 1.5rem;
  width: 1.5rem;
`;

const CategoryItemName = styled.span`
  font-size: var(--text-h3);
`;