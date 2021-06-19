import dummyData from "../../data/dummy-data";
import { LOAD_PRODUCT } from "../actionCreator/product";

const inisialStata={
    avableProduct:[],
    notAvableProduct:[]
}

export default (state=inisialStata,action)=>{
    switch(action.type){
        case LOAD_PRODUCT:
            return {...state,avableProduct:action.payload}
        default:
            return state
    }
}