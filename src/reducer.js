
import { combineReducers } from "redux";

import * as REDUCER_CONSTANTS from "./constants";

//const uuidv4 = require('uuid/v4');
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

/*
const messageList = (state = [], action) => {
  let newState = state;

  switch (action.type) {
    case REDUCER_CONSTANTS.ADD_MESSAGE: {
      newState = state.slice();
      let newMessage = { };
      newMessage = Object.assign(newMessage,action.message);
      newState.push(newMessage);
    }
    break;
    default:
        newState = state;
  }

  return newState;
};

/*
  const messageNameReducer = (state = { }, action) => {
    let newState = state;
  
    switch (action.type) {
        case ADD_MESSAGE_NAME: {
            newState = { };
            newState.messageName = action.messageName;
          }
          break;
      default:
          newState = state;
    }
  
    return newState;
  };

  const securityQuestionReducer = (state = { }, action) => {
    let newState = state;
  
    switch (action.type) {
        case ADD_MESSAGE_QUESTION: {
            newState = { };
            newState.securityQuestion = action.securityQuestion;
          }
          break;
      default:
          newState = state;
    }
  
    return newState;
  };

  const securityAnswerReducer = (state = { }, action) => {
    let newState = state;
  
    switch (action.type) {
        case ADD_MESSAGE_QUESTION: {
            newState = { };
            newState.securityQuestion = action.securityQuestion;
          }
          break;
      default:
          newState = state;
    }
  
    return newState;
  };
*/

/*
  //let messageName = "@@@@@@";
  let messageName = null;
  let securityQuestion = "";
  let securityAnswer = "";
  let video = null;

  const message = (state = {messageName, securityQuestion, securityAnswer, video}, action) => {
  //const message = (state = {messageName:"1122222", securityQuestion: "2", securityAnswer:"3"}, action) => {
    let newState = state;

    switch (action.type) {
        case REDUCER_CONSTANTS.ADD_MESSAGE_NAME:
            newState = {};
            newState = Object.assign(newState,state);
            newState.messageName = action.messageName;
          break;
      case REDUCER_CONSTANTS.ADD_MESSAGE_QUESTION: 
        newState = {};
        newState = Object.assign(newState,state);
          newState.securityQuestion = action.securityQuestion;
        break;
          case REDUCER_CONSTANTS.ADD_MESSAGE_ANSWER: 
            newState = {};
            newState = Object.assign(newState,state);
              newState.securityAnswer = action.securityAnswer;
            break;
          case REDUCER_CONSTANTS.ADD_MESSAGE_VIDEO: 
              newState = {};
              newState = Object.assign(newState,state);
              newState.video = action.video;
            break;  
        case REDUCER_CONSTANTS.SET_MESSAGE: 
          //newState = Object.assign(newState,action.message);
          newState = {};
          newState = Object.assign(newState,state);
          newState.guid = action.message.guid;
          newState.messageName = action.message.messageName;
          newState.securityQuestion = action.message.securityQuestion;
          newState.securityAnswer = action.message.securityAnswer;
          newState.video = action.message.video;
          break;
          case REDUCER_CONSTANTS.NEW_MESSAGE: 
            newState = {};
            newState = Object.assign(newState,state);
            newState.guid = null;
            newState.messageName = null;
            newState.securityQuestion = null;
            newState.securityAnswer = null;
            newState.video = null;
            break;        
    default:
        newState = state;
          }

          return newState;
  }

  const mediaControlType  = (state = {mediaControlType: 'Camera'}, action) => {
    
    let newState = state;

    switch (action.type) {
      case REDUCER_CONSTANTS.SET_MEDIA_CONTROL_TYPE: {

        newState = { };
        newState = Object.assign(newState,state);
        newState.mediaControlType = action.mediaControlType;

      }
      break;
      default:
        newState = state;
    }

    return newState;

  };

  const mediaControlState  = (state = {mediaState: 'Dormant'}, action) => {
    
    let newState = state;

    switch (action.type) {
      case REDUCER_CONSTANTS.SET_MEDIA_CONTROL_STATE: {

        newState = { };
        newState = Object.assign(newState,state);
        //newState.mediaState = action.mediaState;

      }
      break;
      default:
        newState = state;
    }

    return newState;

  };

  const mediaVideo  = (state = {mediaVideo: null}, action) => {
    
    let newState = state;

    switch (action.type) {
      case REDUCER_CONSTANTS.SET_MEDIA_VIDEO: {

        newState = { };
        newState = Object.assign(newState,state);
        //newState.mediaVideo = action.mediaVideo;

      }
      break;
      default:
        newState = state;
    }

    return newState;

  };

  
  const recepient = (state = {
    firstName: null, lastName: null, 
    emailAddress: null, 
    mobileNumber: null, 
    securityQuestion: null, 
    securityAnswer: null,
    messageList: [],
  }, 
  action) => {
      let newState = state;
  
      switch (action.type) {
          case REDUCER_CONSTANTS.ADD_RECEPIENT_FIRSTNAME: {
              newState = {};
              newState = Object.assign(newState,state);
              newState.firstName = action.firstName;
            }
            break;
            case REDUCER_CONSTANTS.ADD_RECEPIENT_LASTNAME: {
              newState = {};
              newState = Object.assign(newState,state);
              newState.lastName = action.lastName;
            }
            break;
        case REDUCER_CONSTANTS.ADD_RECEPIENT_EMAIL: {
          newState = {};
          newState = Object.assign(newState,state);
            newState.emailAddress = action.emailAddress;
          }
          break;
            case REDUCER_CONSTANTS.ADD_RECEPIENT_MOBILE: {
              newState = {};
              newState = Object.assign(newState,state);
                newState.mobileNumber = action.mobileNumber;
              }
              break;
            case REDUCER_CONSTANTS.ADD_RECEPIENT_QUESTION: {
                newState = {};
                newState = Object.assign(newState,state);
                newState.securityQuestion = action.securityQuestion;
              }
              break;
              case REDUCER_CONSTANTS.ADD_RECEPIENT_ANSWER: {
                newState = {};
                newState = Object.assign(newState,state);
                newState.securityAnswer = action.securityAnswer;
              }
              break;  
              case REDUCER_CONSTANTS.ADD_RECEPIENT_MESSAGE_LIST: {
                  newState = {};
                  newState = Object.assign(newState,state);
                  newState.messageList = action.messageList.slice();
              }
              break;    
          case REDUCER_CONSTANTS.SET_RECEPIENT: {
            //newState = Object.assign(newState,action.message);
            newState = {};
            newState = Object.assign(newState,state);
            newState.guid = action.recepient.guid;
            newState.firstName = action.recepient.firstName;
            newState.lastName = action.recepient.lastName;
            newState.emailAddress = action.recepient.emailAddress;
            newState.mobileNumber = action.recepient.mobileNumber;
            newState.securityQuestion = action.recepient.securityQuestion;
            newState.securityAnswer = action.recepient.securityAnswer;
            newState.messageList = action.recepient.messageList.slice();
            }
            break;
            case REDUCER_CONSTANTS.NEW_RECEPIENT: 
            newState = {};
            newState = Object.assign(newState,state);
            newState.guid = null;
            newState.firstName = null;
            newState.lastName = null;
            newState.emailAddress = null;
            newState.mobileNumber = null;
            newState.securityQuestion = null;
            newState.securityAnswer = null;
            newState.messageList = [];
            break;             
      default:
          newState = state;
            }
            return newState;
    }
  
    /*
    const transferList = (state = { source:[], target: []}, action) => {

      let newState = state;
  
      switch (action.type) {

/*         case SET_TRANSFER: {
              newState = {};
              newState = Object.assign(newState,state);

              let mapSource = new Map();
              for(let i=0; i < action.transfer.source.length; i++) {
                mapSource.set(action.transfer.source[i].guid,action.transfer.source[i]);
              }
              let mapTarget = new Map();
              for(let i=0; i < action.transfer.target.length; i++) {
                mapTarget.set(action.transfer.target[i].guid,action.transfer.target[i]);
              }

              //elimate target that no longer exists in source
              mapTarget.forEach((item)=>{

                  if ( mapSource.has(item.guid)) {
                    mapSource.delete(item.guid);
                  } else {
                    mapTarget.delete(item.guid);   
                  }

              });

              newState.source = [];

              mapSource.forEach((item) => {
                newState.source.push(item);
              });

              newState.target = [];

              mapTarget.forEach((item) => {
                newState.target.push(item);
              });

            }
            break; */
      /*      
            case SET_TRANSFER: {
              newState = {};
              newState = Object.assign(newState,state);

              //use state as the source
              let mapSource = new Map();
              for(let i=0; i < state.source.length; i++) {
                mapSource.set(state.source[i].guid,state.source[i]);
              }
              let mapTarget = new Map();
              for(let i=0; i < state.target.length; i++) {
                mapTarget.set(state.target[i].guid,state.target[i]);
              }
              
              for(let i=0; i < action.transfer.source.length; i++) {
                if ( !mapSource.has(action.transfer.source[i].guid)) {
                  mapSource.set(action.transfer.source[i].guid,action.transfer.source[i]);
                }
              }

              for(let i=0; i < action.transfer.target.length; i++) {
                if (!mapTarget.has(action.transfer.target[i].guid)) {
                  mapTarget.set(action.transfer.target[i].guid,action.transfer.target[i]);
                }
              }

              //elimate target that no longer exists in source
              mapTarget.forEach((item)=>{

                  if ( mapSource.has(item.guid)) {
                    mapSource.delete(item.guid);
                  } else {
                    mapTarget.delete(item.guid);   
                  }

              });

              newState.source = [];

              mapSource.forEach((item) => {
                newState.source.push(item);
              });

              newState.target = [];

              mapTarget.forEach((item) => {
                newState.target.push(item);
              });

            }
            break;

          case DO_TRANSFER: {

              newState = {};
              newState = Object.assign(newState,state);

              let mapSource = new Map();
              for(let i=0; i < action.transfer.source.length; i++) {
                mapSource.set(action.transfer.source[i].guid,action.transfer.source[i]);
              }
              let mapTarget = new Map();
              for(let i=0; i < action.transfer.target.length; i++) {
                mapTarget.set(action.transfer.target[i].guid,action.transfer.target[i]);
              }

              //process target...
              for(let i=0; i < action.transfer.source.length; i++) {
                if ( action.transfer.source[i].selected ) {
                  mapTarget.set(action.transfer.source[i].guid,action.transfer.source[i]);  
                }          
              }

              for(let i=0; i < action.transfer.target.length; i++) {
                if ( action.transfer.target[i].selected ) {
                  mapTarget.delete(action.transfer.target[i].guid);
                }            
              }

              //process source...
              for(let i=0; i < action.transfer.target.length; i++) {
                if ( action.transfer.target[i].selected ) {
                  mapSource.set(action.transfer.target[i].guid,action.transfer.target[i]);
                }            
              }

              for(let i=0; i < action.transfer.source.length; i++) {
                if ( action.transfer.source[i].selected ) {
                  mapSource.delete(action.transfer.source[i].guid);
                }            
              }
              
              newState.source = [];

              mapSource.forEach((item) => {
                newState.source.push(item);
              });

              newState.target = [];

              mapTarget.forEach((item) => {
                newState.target.push(item);
              });

            }
            break;
            case SELECT_TRANSFER_SOURCE_ITEM: {
              newState = {};
              newState = Object.assign(newState,state);
              newState.source = state.source.slice();
              let selected = newState.source[action.selected].selected;
              selected = selected == null ? true : !selected;
              newState.source[action.selected].selected = selected;
            }
            break;

      default:
          newState = state;
      }

      return newState;
    };
*/

/*
    const managerControlType  = (state = {managerControlType: 'Message'}, action) => {
    
      let newState = state;
  
      switch (action.type) {
        case REDUCER_CONSTANTS.SET_MANAGER_CONTROL_TYPE: {
  
          newState = { };
          newState = Object.assign(newState,state);
          newState.managerControlType = action.managerControlType;
  
        }
        break;
        default:
          newState = state;
      }
  
      return newState;
  
    };

    /////////////////////////////////////////////////////////////////////////////////////////////////

    const executor = (state = {
      firstName: null, 
      lastName: null, 
      emailAddress: null, 
      mobileNumber: null, 
      recepientList: [],
    }, 
    action) => {
        let newState = state;
    
        switch (action.type) {
            case REDUCER_CONSTANTS.ADD_EXECUTOR_FIRSTNAME: {
                newState = {};
                newState = Object.assign(newState,state);
                newState.firstName = action.firstName;
              }
              break;
              case REDUCER_CONSTANTS.ADD_EXECUTOR_LASTNAME: {
                newState = {};
                newState = Object.assign(newState,state);
                newState.lastName = action.lastName;
              }
              break;
          case REDUCER_CONSTANTS.ADD_EXECUTOR_EMAIL: {
            newState = {};
            newState = Object.assign(newState,state);
              newState.emailAddress = action.emailAddress;
            }
            break;
              case REDUCER_CONSTANTS.ADD_EXECUTOR_MOBILE: {
                newState = {};
                newState = Object.assign(newState,state);
                  newState.mobileNumber = action.mobileNumber;
                }
                break;  
                case REDUCER_CONSTANTS.ADD_EXECUTOR_RECEPIENT_LIST: {
                    newState = {};
                    newState = Object.assign(newState,state);
                    newState.recepientList = action.recepientList.slice();
                }
                break;    
            case REDUCER_CONSTANTS.SET_EXECUTOR: {
              //newState = Object.assign(newState,action.message);
              newState = {};
              newState = Object.assign(newState,state);
              newState.guid = action.executor.guid;
              newState.firstName = action.executor.firstName;
              newState.lastName = action.executor.lastName;
              newState.emailAddress = action.executor.emailAddress;
              newState.mobileNumber = action.executor.mobileNumber;
              newState.recepientList  = action.executor.recepientList.slice();
              }
              break;
            case REDUCER_CONSTANTS.NEW_EXECUTOR: 
              newState = {};
              newState = Object.assign(newState,state);
              newState.guid = null;
              newState.firstName = null;
              newState.lastName = null;
              newState.emailAddress = null;
              newState.mobileNumber = null;
              newState.recepientList  = [];
              break;                    
        default:
            newState = state;
              }
              return newState;
      }

      //////////////////////////////////////////////////////////////////////////

      function createTransferList(id = 0) {
        
        return function transferList (state = { source:[], target: []}, action)  {

        if ( action.id !== id) return state;

        let newState = state;
    
        switch (action.type) {
                
              case REDUCER_CONSTANTS.SET_TRANSFER: {
                newState = {};
                newState = Object.assign(newState,state);
  
                //use state as the source
                let mapSource = new Map();
                let mapTarget = new Map();

                /*
                //if the target is empty then ignore the existing state...
                if ( action.transfer.target.length > 0) {

                  for(let i=0; i < state.source.length; i++) {
                    mapSource.set(state.source[i].guid,state.source[i]);
                  }

                  //let mapTarget = new Map();

                  for(let i=0; i < state.target.length; i++) {
                    mapTarget.set(state.target[i].guid,state.target[i]);
                  }

                }
                */
/*
                for(let i=0; i < action.transfer.source.length; i++) {
                  if ( !mapSource.has(action.transfer.source[i].guid)) {
                    mapSource.set(action.transfer.source[i].guid,action.transfer.source[i]);
                  }
                }
  
                for(let i=0; i < action.transfer.target.length; i++) {
                  if (!mapTarget.has(action.transfer.target[i].guid)) {
                    mapTarget.set(action.transfer.target[i].guid,action.transfer.target[i]);
                  }
                }
  
                //elimate target that no longer exists in source
                mapTarget.forEach((item)=>{
  
                    if ( mapSource.has(item.guid)) {
                      mapSource.delete(item.guid);
                    } else {
                      mapTarget.delete(item.guid);   
                    }
  
                });
  
                newState.source = [];
  
                let id = -1;

                id = 0;
                mapSource.forEach((item) => {
                  item.id = id++;
                  newState.source.push(item);
                });
  
                newState.target = [];
  
                id = 0;
                mapTarget.forEach((item) => {
                  item.id = id++;
                  newState.target.push(item);
                });
  
              }
              break;
  
            case REDUCER_CONSTANTS.DO_TRANSFER: {
  
                newState = {};
                newState = Object.assign(newState,state);
  
                let mapSource = new Map();
                for(let i=0; i < action.transfer.source.length; i++) {
                  mapSource.set(action.transfer.source[i].guid,action.transfer.source[i]);
                }
                let mapTarget = new Map();
                for(let i=0; i < action.transfer.target.length; i++) {
                  mapTarget.set(action.transfer.target[i].guid,action.transfer.target[i]);
                }
  
                //process target...
                for(let i=0; i < action.transfer.source.length; i++) {
                  if ( action.transfer.source[i].selected ) {
                    mapTarget.set(action.transfer.source[i].guid,action.transfer.source[i]);  
                  }          
                }
  
                for(let i=0; i < action.transfer.target.length; i++) {
                  if ( action.transfer.target[i].selected ) {
                    mapTarget.delete(action.transfer.target[i].guid);
                  }            
                }
  
                //process source...
                for(let i=0; i < action.transfer.target.length; i++) {
                  if ( action.transfer.target[i].selected ) {
                    mapSource.set(action.transfer.target[i].guid,action.transfer.target[i]);
                  }            
                }
  
                for(let i=0; i < action.transfer.source.length; i++) {
                  if ( action.transfer.source[i].selected ) {
                    mapSource.delete(action.transfer.source[i].guid);
                  }            
                }
                
                newState.source = [];
  
                let id = -1

                id = 0;
                mapSource.forEach((item) => {
                  item.id = id++;
                  newState.source.push(item);
                });
  
                newState.target = [];
                
                id =0;
                mapTarget.forEach((item) => {
                  item.id = id++;
                  newState.target.push(item);
                });
  
              }
              break;
              case REDUCER_CONSTANTS.SELECT_TRANSFER_SOURCE_ITEM: {
                newState = {};
                newState = Object.assign(newState,state);
                newState.source = state.source.slice();
                let selected = newState.source[action.selected].selected;
                selected = selected == null ? true : !selected;
                newState.source[action.selected].selected = selected;
              }
              break;
              case REDUCER_CONSTANTS.SELECT_TRANSFER_TARGET_ITEM: {
                newState = {};
                newState = Object.assign(newState,state);
                newState.target = state.target.slice();
                let selected = newState.target[action.selected].selected;
                selected = selected == null ? true : !selected;
                newState.target[action.selected].selected = selected;
              }
              break;
        default:
            newState = state;
        }
  
        return newState;
      }

    };

      /////////////////////////////////////////////////////////////////////////


      const signUp = (state = {
        firstName: null, 
        lastName: null, 
        emailAddress: null,
        userId: null, 
        password: null,
        confirmPassword: null, 
        birthday: null,
        extraBirthday:null, 
      }, 
      action) => {
          let newState = state;
      
          switch (action.type) {
              case REDUCER_CONSTANTS.ADD_SIGNUP_FIRSTNAME: {
                  newState = {};
                  newState = Object.assign(newState,state);
                  newState.firstName = action.firstName;
                }
                break;
                case REDUCER_CONSTANTS.ADD_SIGNUP_LASTNAME: {
                  newState = {};
                  newState = Object.assign(newState,state);
                  newState.lastName = action.lastName;
                }
                break;
            case REDUCER_CONSTANTS.ADD_SIGNUP_EMAIL:
              newState = {};
              newState = Object.assign(newState,state);
                newState.emailAddress = action.emailAddress;
              break;         
              case REDUCER_CONSTANTS.ADD_SIGNUP_USERID:
                newState = {};
                newState = Object.assign(newState,state);
                  newState.userId = action.userId;
                break;
                case REDUCER_CONSTANTS.ADD_SIGNUP_PASSWORD: 
                  newState = {};
                  newState = Object.assign(newState,state);
                    newState.password = action.password;
                  break;
                  case REDUCER_CONSTANTS.ADD_SIGNUP_CONFIRM_PASSWORD:
                    newState = {};
                    newState = Object.assign(newState,state);
                    newState.confirmPassword = action.confirmPassword;
                    break;  
                case REDUCER_CONSTANTS.ADD_SIGNUP_BIRTHDAY: 
                    newState = {};
                    newState = Object.assign(newState,state);
                    newState.birthday = action.birthday;
                    break;               
          default:
              newState = state;
                }
                return newState;
        }

      /////////////////////////////////////////////////////////////////////////

      const masterSignUp = (state = {status: null, loginStatus: null, signupList:[]}, action) => {
        let newState = state;
        switch(action.type) {
          case REDUCER_CONSTANTS.ADD_SIGNUP: 
            newState = {};
            newState = Object.assign(newState,state);
            newState.signupList =  state.signupList.slice();

            do {
              
                newState.status = "The password and confirm password does not match!";
                if ( action.signUp.password !== action.signUp.confirmPassword) break;

                let signupEmailAddress = new Map();
                let signupUserPassword = new Map();
                newState.signupList.forEach((signup)=>{
                  signupEmailAddress.set(signup.emailAddress.toLowerCase(),signup.emailAddress.toLowerCase());
                  signupUserPassword.set(signup.userId.toLowerCase() + signup.password.toLowerCase(),signup.userId.toLowerCase() + signup.password.toLowerCase());
                })
  
                newState.status = "Another user already has that email address!";
                if ( signupEmailAddress.has(action.signUp.emailAddress.toLowerCase())) break;

                newState.status = "Another user already has that user/password!";
                if ( signupUserPassword.has(action.signUp.userId.toLowerCase() + action.signUp.password.toLowerCase())) break;
 
                newState.status ="Success";

                newState.signupList.push(action.signUp);

            } while(false);
            
          break;
          case REDUCER_CONSTANTS.LOGIN_SIGNUP: {
            newState = {};
            newState = Object.assign(newState,state);
            newState.signupList =  state.signupList.slice();

            let signupUserPassword = new Map();
            newState.signupList.forEach((signup)=>{
              signupUserPassword.set(signup.userId.toLowerCase() + signup.password.toLowerCase(),signup.userId.toLowerCase() + signup.password.toLowerCase());
            })

            newState.loginStatus = "You entered an invalid user id and password!";
            if ( action.userId == null ) action.userId = "";
            if ( action.password == null ) action.password = "";
            if ( !signupUserPassword.has(action.userId.toLowerCase() + action.password.toLowerCase())) break;

            newState.loginStatus ="Success";        
          }
          break;
          case REDUCER_CONSTANTS.CLEAR_STATUS_SIGNUP:
            newState = {};
            newState = Object.assign(newState,state);
            newState.signupList =  state.signupList.slice();
            newState.loginStatus = null;        
          break;
          case REDUCER_CONSTANTS.SET_LOGIN_SIGNUP: {
            newState = {};
            newState = Object.assign(newState,state);
            newState.loginStatus = action.loginStatus;       
          }
          break;
          case REDUCER_CONSTANTS.SET_ADD_SIGNUP: {
          newState = {};
          newState = Object.assign(newState,state);
          newState.status = action.status;
          }
        break;
          default:
            newState = state;
        }
        return newState;
      }

      //ADD_LOGIN_USERID
      const login = (state = { userId: null, password: null }, action) => {
        let newState = state;
        switch(action.type) {
          case REDUCER_CONSTANTS.ADD_LOGIN_USERID:
            newState = {};
            newState = Object.assign(newState,state);
            newState.userId = action.userId;
          break;
          case REDUCER_CONSTANTS.ADD_LOGIN_PASSWORD:
            newState = {};
            newState = Object.assign(newState,state);
            newState.password = action.password;
          break;
          default:
          newState = state;    
        }
        return newState;
      }

      const contact = (state = {
        firstName: null, 
        lastName: null, 
        emailAddress: null,
        emailMessage: null, 
      }, 
      action) => {
          let newState = state;
      
          switch (action.type) {
              case REDUCER_CONSTANTS.ADD_CONTACT_FIRSTNAME: {
                  newState = {};
                  newState = Object.assign(newState,state);
                  newState.firstName = action.firstName;
                }
                break;
                case REDUCER_CONSTANTS.ADD_CONTACT_LASTNAME: {
                  newState = {};
                  newState = Object.assign(newState,state);
                  newState.lastName = action.lastName;
                }
                break;
            case REDUCER_CONSTANTS.ADD_CONTACT_EMAIL:
              newState = {};
              newState = Object.assign(newState,state);
                newState.emailAddress = action.emailAddress;
              break;         
              case REDUCER_CONSTANTS.ADD_CONTACT_EMAIL_MESSAGE:
                newState = {};
                newState = Object.assign(newState,state);
                  newState.emailMessage = action.emailMessage;
                break;               
          default:
              newState = state;
                }
                return newState;
        }



        const masterContactUs = (state = {contactUsStatus: null, contactUsList:[]}, action) => {
          let newState = state;
          switch(action.type) {
            case REDUCER_CONSTANTS.ADD_CONTACT: 
              newState = {};
              newState = Object.assign(newState,state);
              newState.contactUsList =  state.contactUsList.slice();
  
              do {
     
                  newState.contactUsStatus ="Thanks for contacting us. We will in touch with you soon.";
                  newState.contactUsList.push(action.contact);
  
              } while(false);
    /*          
            break;
            case REDUCER_CONSTANTS.CLEAR_CONTACT_SIGNUP:
              newState = {};
              newState = Object.assign(newState,state);
              newState.contactUsList =  state.contactUsList.slice();
              newState.contactUsStatus = null;        
            break;
            default:
              newState = state;
          }
          return newState;
        }
         

        const sessionData = (state = {guid: null }, action) => {
          let newState = state;
          switch(action.type) {
            case REDUCER_CONSTANTS.ADD_SESSION_DATA: 
              newState = {};
              newState = Object.assign(newState,state);
              newState.guid =  action.guid;
            break;
            default:
              newState = state;
          }
          return newState;
        }
*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//const reducer = combineReducers({
const appReducer = combineReducers({
  inventory,
 /* message,
  mediaControlType,
  mediaControlState,
  mediaVideo,
  recepient,
  transferList: createTransferList(1),
  managerControlType,
  executor,
  executorTransferList: createTransferList(0),
  signUp,
  masterSignUp,
  login,
  contact,
  masterContactUs,
  sessionData,*/
});

const reducer = (state, action) => {
  if (action.type === REDUCER_CONSTANTS.RESET_APP) {
    state = undefined;
  }

  return appReducer(state, action);
}

export default reducer;