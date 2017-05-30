
export const defaultThemeCss = `

:host {
  background: white;
  border-color: lightgray;
}

:host-context(.custom-md-theme) {
  border-width:0px 0px 1px 0px;
  border-style: solid;
  padding: 1px 0;
  display: inline-block;
 
}
:host-context(.custom-md-theme).input-focus {
   -webkit-box-shadow: 0px 1px 0px 0px  navy;
    box-shadow: 0px 1px 0px  0px navy;
}


:host(.input-focus) {
  border-color: #4D90FE;
  -webkit-box-shadow: 0px 0px 5px  #4D90FE;
  box-shadow: 0px 0px 5px  #4D90FE;
}

`;

