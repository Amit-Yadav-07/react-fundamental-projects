import { useState } from "react";
import { Data } from "../data";
console.log(Data);

let Birthday = () => {

    let [value, setValue] = useState(Data);

    let ClearHandler = () => {
        setValue([]);
    }

    let SingleBtnHandler = (id) => {
        let newFilteredValue = value.filter((person) => {
            return person.id !== id
        })
        setValue(newFilteredValue)
    }


    return (
        <div className="Container">
            <h1>{value.length} Birthdays Today </h1>
            {
                value.map((person) => {

                    let { id, name, img, DOB } = person

                    return (
                        <article className="card-container" key={id}>
                            <div className="img">
                                <img src={img} alt={name} />
                            </div>
                            <div className="card-details">
                                <h2>{name}</h2>
                                <h5>{DOB} Years</h5>
                            </div>
                            <button style={{ border: 'none', padding: '3px 6px', backgroundColor: 'rgb(231, 72, 72)', fontSize: '1rem', cursor: 'pointer', color: '#fff' }} onClick={() => SingleBtnHandler(id)}>remove</button>
                        </article>
                    )
                })}

            <button type="button" onClick={ClearHandler} className="btn">Clear All</button>

        </div>
    )
}


export default Birthday;