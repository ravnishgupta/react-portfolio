import React, {useEffect} from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";


function Nav (props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory
      } = props;
    
      useEffect(() => {
        document.title = capitalizeFirstLetter(currentCategory.description);
      }, [currentCategory]);
    

      return (
        <header className="flex py-2 bg-primary">
          <nav>
              <div className="container-sm">
              <div className="row">
                <div className="col fw-bold fst-italic">Ravnish Gupta</div>
                
                {categories.map((category) => (
                  <div
                    className={`col mx-2 ${ 
                      currentCategory.name === category.name && 'navActive' 
                      }`}
                      key={category.name}
                  >
                      <span
                        onClick={() => {
                          setCurrentCategory(category);
                        }}
                      >
                        {capitalizeFirstLetter(category.name)}
                      </span>
                  </div>
                ))
               }
                </div>               
               </div>
          </nav>
        </header>
      );
}

export default Nav;