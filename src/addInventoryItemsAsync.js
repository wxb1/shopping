//import { addExecutor } from "./addExecutor";
//import { fmiApi } from "./StartFmiApi";
import { setInventoryItems} from './setInventoryItems';

  const addInventoryItemsAsync = () => {

    return function(dispatch) {

            fetch("https://webmppcapstone.blob.core.windows.net/data/itemsdata.json", {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-Type" : "application/json",
            },
            }).then((response)=>{

                return response.json();
                
            }).then((inventory)=>{

                dispatch(setInventoryItems(inventory));

            });

    };

  }

  export { addInventoryItemsAsync };