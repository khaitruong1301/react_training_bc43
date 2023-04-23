import { configureStore } from '@reduxjs/toolkit';
import nhanVienReducer from './reducers/nhanVienReducer';



export const store = configureStore({
    reducer: {
        number: (state = 15, action) => {
            if (action.type === 'TANG_GIAM_SOLUONG') {
                state = state + action.payload;
            }


            return state; // 16
        },
        color: (state = 'red', action) => {
            return state;
        },
        imgCar: (state = './img/products/red-car.jpg', action) => {
            if (action.type === 'CHANGE_COLOR') {
                state = action.payload;
            }
            return state;
        },

        //state = 000xxx
        nhanVienReducer: nhanVienReducer
    }
});
