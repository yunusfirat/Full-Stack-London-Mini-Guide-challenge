import React from "react";


const Table = () => {
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
                    <tr>
                        <th scope="row">1</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><a href="/" target="_blank" >sds</a></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Table;