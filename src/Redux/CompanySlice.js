


    
export function CompanySlice(
    
    state=[],
    action
    ){
        switch (action.type){
            case "COMPANY":
                return action.payload;
                
                default:
                    return state
                }
            }