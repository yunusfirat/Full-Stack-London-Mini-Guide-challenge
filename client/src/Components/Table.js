import React from "react";
import { useGlobalContext } from "./Context";

const Table = () => {
    const { category } = useGlobalContext();
    console.log(category);
    return (
        <div className="mt-4">
            <table className="table table-striped">
                <thead>
                <tr>
                    <th scope="col" style={{ width: "10%" }}>#</th>
                    <th scope="col" style={{ width: "25%" }}>Name</th>
                    <th scope="col" style={{ width: "20%" }}>Phone</th>
                    <th scope="col" style={{ width: "20%" }}>Address</th>
                    <th scope="col" style={{ width: "25%" }}>website</th></tr>
                </thead>
                <tbody>
                    {category.map((element,index) => {
                        const { name, website, address, phone } =element;
                        return(
                        <tr key={index}>
                            <th scope="row">{index +1}</th>
                            <td>{name}</td>
                            <td>{phone}</td>
                            <td>{address}</td>
                            <td><a href={website} rel="noreferrer" target="_blank" >{name}</a></td>
                        </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Table;