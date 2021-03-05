import React, { useEffect, useState } from 'react';

const FilterEmployees = ({ employees, updateEmployees }) => {
    const [inputValue, updateInput] = useState("");

    useEffect(() => {
        const filteredEmployees =
            inputValue === "" ? employees : employees.filter(
                ({ name: { first } }) =>
                    first.toLowerCase().indexOf(inputValue.toLowerCase()) >= 0
            );

        updateEmployees(filteredEmployees);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inputValue, employees]);

    return (
        <div className="filter-data">
            <p className='sub-header'>
                To filter by first name, please begin your search in the user input!
            </p>
            <input className='input-box' value={inputValue} onChange={e => updateInput(e.target.value)} />
        </div>
    );
};

export default FilterEmployees;