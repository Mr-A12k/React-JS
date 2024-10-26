import React from "react";

const Hello = () => {
    return React.createElement('div',
         {id:'hello',
          className:'hello_class'},
         React.createElement ('h1',null,'Hello world Now im learning React!'))

}

export default Hello;