import React from 'react';
 
export default class Link extends React.Component {
 constructor() {
   super();
 
   this.state = {
     class: "normal",
     welcomeMessage: "Hi there!"
   };
 }
 
 render() {
   return (
       <div>
           <a
               className={this.state.class}
               href={this.props.site || '#'}>
               {this.props.site}
           </a>
           {this.state.welcomeMessage}
       </div>
   );
 }
}