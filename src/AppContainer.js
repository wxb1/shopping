import { connect } from "react-redux";
import { App } from "./App";
import { addInventoryItemsAsync } from "./addInventoryItemsAsync";


const getPreview = (all,preview) => {

    let previewList =  preview.map((item)=>{
        return all[item];
    });
    return previewList;

}

  const mapStateToProps = (state) => {

    return {
        preview: getPreview(state.inventory.all, state.inventory.preview),
        carouselInterval: state.inventory.carouselInterval,
    };

  };


  const mapDispatchToProps = dispatch => {
    return {
        onAddInventoryItems: () => {
            //dispatch(addInventoryItems());
            dispatch(addInventoryItemsAsync());
        },
    };
  };

const AppContainer = connect(mapStateToProps,mapDispatchToProps) 
(
    App
);

export default AppContainer;