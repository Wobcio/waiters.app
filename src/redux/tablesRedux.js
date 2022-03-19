

// selectors
export const getAllTables = state => state.tables;
export const getTableById = (state, tableId) => {

    console.log(state.tables, tableId);
    return state.tables.find(table => table.id === tableId)

}

// action names
const UPDATE_TABLES = 'app/tables/UPDATE_TABLES'

// action creators
export const updateTables = payload => ({ type: UPDATE_TABLES, payload });

export const sendTables = payload => {
    return (dispatch) => {
    const options = {
        method: 'PUT',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload),
    };
    
    fetch(`http://localhost:3131/tables/${payload.id}`, options)
        .then(res => res.json())
        .then(alert("Table updated"))
    }
};

export const fetchTables = callbackFunction => {
    return (dispatch) => {
        fetch('http://localhost:3131/tables')
            .then(res => res.json())
            .then(tables =>{
                dispatch(updateTables(tables));
                callbackFunction();
            })
            
    }
};

const tablesReducer = (statePart = [], action) => {
    switch (action.type) {
        case UPDATE_TABLES:
            return [...action.payload];
        default:
            return statePart;
    }
}

export default tablesReducer;