import * as React from 'react';
import { ListGroupItem } from 'react-bootstrap';
import ItemContainer from '../containers/ItemContainer';
import '../css/Category.css';

export interface ICategoryProps {
    name: string;
    items: JSX.Element[];
    total: number;
    handleDelete: any;
}

const mapItems = (items: any, category: string, handleDelete: any) => {
    const handleDeleteClick = (index: number) => { handleDelete(index, category)};
    return items.map((item: any, index: number) => {
        return (<ItemContainer key={index} id={index} name={item.name} value={item.value} handleDeleteClick={handleDeleteClick} />)
    })
}

export const Category = ({name, total, items, handleDelete}: ICategoryProps) =>
    <ListGroupItem className="category">
        <div className="category-header">
            <div className="category-name">{name}</div>
            <div className="category-total">{`$${total}`}</div>
        </div>
        <div className="items">
            {mapItems(items, name, handleDelete)}
        </div>
    </ListGroupItem>;

export default Category;
