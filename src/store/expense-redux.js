import { configureStore, createSlice } from "@reduxjs/toolkit";
import { createStore } from "redux";

const DUMP_EXPENSES = [
    { id: "e1", title: 'Sony TV', amount: 800.49, date: new Date(2021, 2, 12) },
    { id: "e2", title: 'Car Insurance', amount: 500.49, date: new Date(2023, 2, 12) },
    { id: "e3", title: 'New Wooden Desk', amount: 400.49, date: new Date(2023, 2, 12) },
    { id: "e4", title: 'New Bike', amount: 900.49, date: new Date(2024, 2, 12) }
];

const initialSate = {items: DUMP_EXPENSES}


const expenseSlice = createSlice({
    name: 'expense',
    initialState: initialSate,
    reducers: {
        addExpense(state, action) {
            const expenseData = {
                ...action.payload,
                id: Math.random().toString()
            };
            state.items.push(expenseData);
        },

        removeExpense(state, action) {

        }
    }

});

const expenseStore = configureStore({
    reducer: expenseSlice.reducer
})

export const expenseActions = expenseSlice.actions;
export default expenseStore;