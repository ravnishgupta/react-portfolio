import React, {useEffect} from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";


function Nav (props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
        contactSelected,
        setContactSelected
      } = props;
    
      useEffect(() => {
        document.title = capitalizeFirstLetter(currentCategory.name);
      }, [currentCategory]);
    

      return (
        <header className="flex-row px-1">
          <nav>
              <div className="container-sm">
              <div className="row">
                <div className="col">Ravnish Gupta</div>
                
                {categories.map((category) => (
                  <div
                    className={`col mx-1 ${
                      currentCategory.name === category.name && !contactSelected && 'navActive' 
                      }`}
                    key={category.name}
                  >
                      <span
                        onClick={() => {
                          setCurrentCategory(category);
                          setContactSelected(false);
                        }}
                      >
                        {capitalizeFirstLetter(category.name)}
                      </span>
                  </div>
                 
                ))
               }
                 <div className={`col mx-2 ${contactSelected && 'navActive'}`}>
                   <span onClick={() => setContactSelected(true)}>Contact</span>
                 </div>
                </div>               
               </div>
          </nav>
        </header>
      );
}

export default Nav;