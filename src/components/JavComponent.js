import React from "react";
import { useState } from "react";
import javList from "../service/jav";

export default function JavComponent() {
    const [jav, setJav] = useState(javList);

    const handleDeleteJav = (id) => {
        const stateJavNews = jav.filter((javItem) => javItem.id != id);
        setJav(stateJavNews);
    }

    if (jav.length == 0) {
        return (
            <h2>Không có diễn viên JAV nào để chọn</h2>
        )
    }

    return (
        <main className="container">
            <h2>Có {jav.length} diễn viên JAV để chọn</h2>
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Image</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    {jav.map((javItem) => {
                        return (
                            <tr key={javItem.id}>
                                <th scope="row">{javItem.id}</th>
                                <td>{javItem.name}</td>
                                <td><img src={javItem.image} style={{width: 100}}/></td>
                                <td>
                                    <button 
                                        onClick={() => handleDeleteJav(javItem.id)}
                                        className="btn btn-danger btn-sm">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </main>
    );
}
