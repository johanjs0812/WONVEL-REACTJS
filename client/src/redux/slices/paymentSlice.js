import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  guets: [],
  method: '',
  contact: [],
  pm_status: "Đã thanh toán",
  booking: "",
  invoices: "",
  guets2:[],
  tour: ""
};

const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {

    addItem: (state, action) => {
      state.guets = action.payload;
    },
    
    addMethod: (state, action) => {
      state.method = action.payload;
    }, 

    addContact: (state, action) => {
      state.contact = action.payload;
    },

    addbooking: (state, action) => {
      state.booking = action.payload;
    },

    addinvoices: (state, action) => {
      state.invoices = action.payload;
    },

    addguets2: (state, action) => {
      state.guets2 = action.payload;
    },

    addstatus: (state, action) => {
      state.pm_status = action.payload;
    },

    addtour: (state, action) => {
      state.tour = action.payload;
    },

    removeItem: (state, action) => {
      const id = action.payload;
      state.guets = state.guets.filter(item => item.id !== id);
    },

    removeAllItems: (state) => {
      state.guets = [];
    },

  }
});

export const { 
  addItem, updateItem, removeItem, addMethod, removeAllItems, 
  addContact, addbooking, addinvoices, addguets2, addstatus, addtour
} = paymentSlice.actions;
export default paymentSlice.reducer;
