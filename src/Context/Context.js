import React, { createContext } from "react";
export const StoreContext = createContext();

class Provider extends React.Component{
    render(){
        const {store} = this.props;
        return(
            <StoreContext.Provider value  = {store}>
                {this.props.children}
            </StoreContext.Provider>
        )
    }
}

export default Provider;