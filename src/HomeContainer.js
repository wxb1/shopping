import { connect } from "react-redux";
import { Home } from "./Home";
//import { addInventoryItems } from "./addInventoryItems";
import { addInventoryItemsAsync } from "./addInventoryItemsAsync";
import { pauseCarousel } from "./pauseCarousel";
import { playCarousel } from "./playCarousel";


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
        onPauseCarousel: () => {
          dispatch(pauseCarousel());
        },
        onPlayCarousel: () => {
          dispatch(playCarousel());
        },
    };
  };

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(
    Home
  );

  //export { HomeContainer };
  export default HomeContainer;