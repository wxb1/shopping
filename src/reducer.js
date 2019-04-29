
import { combineReducers } from "redux";

import * as REDUCER_CONSTANTS from "./constants";


const uuidv4 = {};

const inventory = (state = { all:[], preview:[], cart:[], categorized: { }, current: { }, currentCategory: [], 
  carouselInterval: null,
  sortNumber: 0,
  sortAction: [
  { sortName: "None", sortNumber: 0 },
  { sortName: "Price", sortNumber: 1 },
  { sortName: "Alphabetical", sortNumber: 2 },
  { sortName: "Rating", sortNumber: 3 }
],
currentCategoryInfo: {
  category: "", 
  subCategory: "",
},
canShowCheckoutMessage: false,
customer: { 
  name: "", 
  address: "", 
  city: "", 
  phoneNumber: ""
},
orderDetails: { 
  name: "", 
  address: "", 
  city: "", 
  phoneNumber: "",
  totalCost: 0
},
contact: { 
  name: "", 
  email: "", 
  subject: "Technical Support", 
  message: ""
},
canShowContactMessage: false,
contactDetails: { 
  name: "", 
  email: "", 
  subject: "", 
  message: ""
},
 }, action) => {
  let newState = state;
  switch(action.type) {
    case REDUCER_CONSTANTS.ADD_ITEM: {
      newState = [];
      newState = Object.assign(newState,state);
      if (newState[action.index] == null)
        newState[action.index] = [];
      let newList =  newState[action.index].slice();
      let newItem = { };
      newItem = Object.assign(newItem,action.item);
      newItem.id = newList.length;

      if ( newItem.guid == null) {
        newItem.guid = uuidv4();
      }

      newList.push(newItem);
      newList.selected = newItem.id;
      newState[action.index] = newList;
    }
    break;
    case REDUCER_CONSTANTS.ADD_INVENTORY_ITEMS: {
        
        newState = { };
        newState = Object.assign(newState,state);
        //newState = [...action.inventory];
        let all = [];
        let preview = [];
        let categorized = { };
        let inventory = action.inventory;

      for(let i=0; i < inventory.length; i++) {

        let category = inventory[i];
        let subcategories = category.subcategories;
        for(let j=0; j < subcategories.length; j++) {

            let items = subcategories[j].items;
            for(let k=0; k < items.length; k++) {

                let item = items[k];

                item.isPreview = (k === 0);
                item.id = all.length;

                all.push(item);
                
                if ( item.isPreview ) {
                    preview.push(all.length-1);
                }

                let itemCategory = categorized[item.category];
                if ( itemCategory === undefined) {
                    itemCategory = { };
                }
                let itemSubcategory = itemCategory[item.subcategory];
                if ( itemSubcategory === undefined ) {
                    itemSubcategory = [];
                }
                itemSubcategory.push(all.length-1);
                itemCategory[item.subcategory] = itemSubcategory;
                categorized[item.category] = itemCategory;

            }
        }

      }
      
      newState.all = [...all];
      newState.preview = [...preview];
      newState.categorized = Object.assign({},categorized);

    }
    break;
    case REDUCER_CONSTANTS.SET_CURRENT_ITEM_QUANTITY: {

      newState = {};
      newState = Object.assign(newState,state);
      
      let id = action.id;
      let quantity = parseInt(action.quantity);

      if ( isNaN(quantity) ) {
          quantity = 0;
      }

      let stock = parseInt(state.all[id].stock);

      if ( quantity > stock) {
        quantity = stock
      }

      if ( quantity < 0) {
          quantity = 0;
      }

      stock -= quantity;

      newState.current = { id, stock, quantity };

    }
    break;
    case REDUCER_CONSTANTS.ADD_CURRENT_ITEM_QUANTITY: {

      newState = {};
      newState = Object.assign(newState,state);
      
      let id = action.id;
      let quantity = parseInt(action.quantity);

      if ( isNaN(quantity) ) {
          quantity = 0;
      }

      let previousQuantity = parseInt(newState.current.quantity);

      if (isNaN(previousQuantity)) {
        previousQuantity = 0;
      }

      quantity += previousQuantity;

      let stock = parseInt(state.all[id].stock);

      if ( quantity > stock) {
        quantity = stock
      }

      if ( quantity < 0) {
          quantity = 0;
      }

      stock -= quantity;

      newState.current = { id, stock, quantity };

    }
    break;
    case REDUCER_CONSTANTS.SET_CURRENT_ITEM: {

        newState = {};
        newState = Object.assign(newState,state);
       
        /*
        let id = action.id;
        let item = newState.all[id];
        let stock = item.stock
        let quantity = 0;
        */

        let id = action.id;
        let stock = null;
        let quantity = null;

        //http://localhost:3000/product?id=14
        //if ( id === state.current.id ) {
        if ( id == state.current.id ) {
            stock = state.current.stock;
            quantity = state.current.quantity;
        } else {
            let cartItem = state.cart.find((item)=>{
                return item.id === id;
            });

            let item = state.all[id];

            if (cartItem !== null && cartItem !== undefined && item !== null && item !== undefined) {
              quantity = cartItem ? cartItem.quantity : 0;
              stock = cartItem ? cartItem.stock : item.stock;
             } else if (item !== null && item !== undefined) {
              quantity =  0;
              stock =  item.stock;
             } else {
               id = null;
             }
            
            /*else {
              id = null;
              stock = null;
              quantity = null;
            }*/

        }

        if ( id !== null && id !== undefined) {
          newState.current = { id, stock, quantity };
        }
  
      }
      break;
    case REDUCER_CONSTANTS.ADD_CURRENT_ITEM_TO_CART: {

      newState = [];
      newState = Object.assign(newState,state);

      let id = action.id;

      let cartItem = newState.cart.find((item)=>{
        return item.id === id;
      });

      if ( cartItem != null ) {
          cartItem.quantity = newState.current.quantity;
          cartItem.stock = newState.current.stock;
      } else {

        if ( newState.current.quantity > 0 ) {  
            newState.cart.push(newState.current);
        }

      }

      newState.cart = [...newState.cart];

      //let item = newState.all[id];
      //item.stock = newState.current.stock;
    }
    break;
    case REDUCER_CONSTANTS.SET_CART_ITEM_QUANTITY: {

        newState = {};
        newState = Object.assign(newState,state);
        
        let id = action.id;
        let quantity = parseInt(action.quantity);
  
        if ( isNaN(quantity) ) {
            quantity = 0;
        }
  
        let stock = parseInt(state.all[id].stock);
  
        if ( quantity > stock) {
          quantity = stock
        }
  
        if ( quantity < 0) {
            quantity = 0;
        }
  
        stock -= quantity;
  
        let cartItem = newState.cart.find((item)=>{
            return item.id === id;
        });
    
        cartItem.quantity = quantity;
        cartItem.stock = stock;
        newState.cart = [...newState.cart];

      }
      break;
      case REDUCER_CONSTANTS.REMOVE_CART_ITEM: {

        newState = {};
        newState = Object.assign(newState,state);
        
        let id = action.id;

        newState.cart = newState.cart.filter((item)=>{
            return item.id !== id;
        });
  
      }
      break;
      case REDUCER_CONSTANTS.CUSTOMER_CHECK_OUT: {

        newState = {};
        newState = Object.assign(newState,state);
        
        let id = action.id;
        let canShowCheckoutMessage = false;
        let totalCost = 0;

        newState.cart.forEach((cartItem)=>{
            let item = newState.all[cartItem.id];
            item.stock -= cartItem.quantity;
            //return item.id !== id;
            canShowCheckoutMessage = true;
            totalCost += (item.price * cartItem.quantity);
        });
  
        newState.canShowCheckoutMessage = canShowCheckoutMessage;

        newState.orderDetails = newState.customer;
        newState.orderDetails.totalCost = totalCost;

        newState.customer = { name: "", address: "", city: "", phoneNumber: "" };
        newState.current = { };
        newState.cart = [];
      }
      break;
      case REDUCER_CONSTANTS.SET_CURRENT_CATEGORY:

        newState = {};
        newState = Object.assign(newState,state);

        if ( newState.currentCategoryInfo == null) {
          newState.currentCategoryInfo = { };
        }
        newState.currentCategoryInfo.category = action.category;
        newState.currentCategoryInfo.subCategory = action.subCategory;
        newState.currentCategory = [...newState.categorized[action.category][action.subCategory]];

      break;
      case REDUCER_CONSTANTS.SORT_CURRENT_CATEGORY_ITEMS: 

        newState = {};
        newState = Object.assign(newState,state);        

        newState.currentCategory.sort((a,b)=>{

          let item1 = newState.all[a];
          let item2 = newState.all[b];

          let value1 = 0;
          let value2 = 0;

          switch(action.sortNumber) {
            case 0: 
              value1 = item1.id;
              value2 = item2.id;
            
            break;
            case 1:
              value1 = item1.price;
              value2 = item2.price;
            
            break;
            case 2:
              value1 = item1.name;
              value2 = item2.name;
            
            break;
            case 3: 
              value1 = item1.rating;
              value2 = item2.rating;
            
            break;
            default: {
              value1 = item1.id;
              value2 = item2.id;
            }
          } 

          let result = 0;
          if ( value1 > value2) {
            result = 1;
          } else if (value1 < value2) {
            result = -1;
          } else {
            result = 0;
          }
          
          return result;

        });

        newState.sortNumber = action.sortNumber;
        newState.currentCategory = [...newState.currentCategory];
      
      break;
      case REDUCER_CONSTANTS.FILTER_CURRENT_CATEGORY_ITEMS: 

        newState = {};
        newState = Object.assign(newState,state);        
        newState.currentCategory = newState.currentCategory.filter((id)=>{

          let item = newState.all[id];
          return parseInt(item.stock) > 0;

        });

        newState.currentCategory = [...newState.currentCategory];

      break;
      case REDUCER_CONSTANTS.UNFILTER_CURRENT_CATEGORY_ITEMS: {

      newState = {};
      newState = Object.assign(newState,state);  
      let category = newState.currentCategoryInfo.category;
      let subCategory = newState.currentCategoryInfo.subCategory;      
      newState.currentCategory = [...newState.categorized[category][subCategory]];

      }
      break;
      case REDUCER_CONSTANTS.PAUSE_CAROUSEL: 

        newState = {};
        newState = Object.assign(newState,state); 
        newState.carouselInterval = null; 
  
        break;
        case REDUCER_CONSTANTS.PLAY_CAROUSEL: 

          newState = {};
          newState = Object.assign(newState,state); 
          newState.carouselInterval = 3000; 
    
          break;
          case REDUCER_CONSTANTS.SET_CAN_SHOW_CHECKOUT_MESSAGE: 

            newState = {};
            newState = Object.assign(newState,state);
        
            newState.canShowCheckoutMessage = action.canShowCheckoutMessage;

          
          break;
          case REDUCER_CONSTANTS.SET_CUSTOMER_NAME: 

            newState = {};
            newState = Object.assign(newState,state);
        
            newState.customer = Object.assign({},newState.customer);
            newState.customer.name = action.customerName;
           
          break;       
          case REDUCER_CONSTANTS.SET_CUSTOMER_ADDRESS: 
            
            newState = {};
            newState = Object.assign(newState,state);

            newState.customer = Object.assign({},newState.customer);
            newState.customer.address = action.customerAddress;
           
          break;       
          case REDUCER_CONSTANTS.SET_CUSTOMER_CITY: 

            newState = {};
            newState = Object.assign(newState,state);
        
            newState.customer = Object.assign({},newState.customer);
            newState.customer.city = action.customerCity;
           
          break;         
          case REDUCER_CONSTANTS.SET_CUSTOMER_PHONENUMBER: 

            newState = {};
            newState = Object.assign(newState,state);
        
            newState.customer = Object.assign({},newState.customer);
            newState.customer.phoneNumber = action.customerPhoneNumber;
           
          break;  
          //////////////////////////////////////////////////////////////////
          case REDUCER_CONSTANTS.SET_CONTACT_NAME: 

            newState = {};
            newState = Object.assign(newState,state);
        
            newState.contact = Object.assign({},newState.contact);
            newState.contact.name = action.contactName;
           
          break;       
          case REDUCER_CONSTANTS.SET_CONTACT_EMAIL: 
            
            newState = {};
            newState = Object.assign(newState,state);

            newState.contact = Object.assign({},newState.contact);
            newState.contact.email = action.contactEmail;
           
          break;       
          case REDUCER_CONSTANTS.SET_CONTACT_SUBJECT: 

            newState = {};
            newState = Object.assign(newState,state);
        
            newState.contact = Object.assign({},newState.contact);
            newState.contact.subject = action.contactSubject;
           
          break;         
          case REDUCER_CONSTANTS.SET_CONTACT_MESSAGE: 

            newState = {};
            newState = Object.assign(newState,state);
        
            newState.contact = Object.assign({},newState.contact);
            newState.contact.message = action.contactMessage;
          
          break;
          case REDUCER_CONSTANTS.SEND_CONTACT_INFORMATION: 

            newState = {};
            newState = Object.assign(newState,state);
      
            newState.canShowContactMessage = true;
    
            newState.contactDetails = newState.contact;
            newState.contact = { name: "", email: "", subject: "Technical Support", message: "" };

          
          break;
          case REDUCER_CONSTANTS.SET_CAN_SHOW_CONTACT_MESSAGE: 

            newState = {};
            newState = Object.assign(newState,state);
        
            newState.canShowContactMessage = action.canShowContactMessage;

          
          break;  
    default:
      newState = state;
  }
  return newState;
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//const reducer = combineReducers({
const appReducer = combineReducers({
  inventory,
});

const reducer = (state, action) => {
  if (action.type === REDUCER_CONSTANTS.RESET_APP) {
    state = undefined;
  }

  return appReducer(state, action);
}

export default reducer;