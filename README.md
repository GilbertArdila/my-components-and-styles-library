# libreria-ui-componentes-estilos-react
 - to install it you can use npm install libreria-ui-componentes-estilos-react

## this is a ui react library where you can find multyiple components and provide them your own styles

 ### ContainerFlex component:
  * this component receive the following props
   width, heigth, bgColor, flexDirection, alignContent, justifyContent, alignItems, gap
  * the default value for each prop are
     width: 100%
     heigth: 100%
     display: flex;
     background-color: white
     flex-direction:row
     align-content: center
     justify-content: center
    align-items: center
    gap:2
  * the value each prop receive are
     width:string,
     heigth:string,
     bgColor:string,
     className:string,
     gap:string,
     flexDirection:column,column-reverse,row,row-reverse
     alignContent: center,flex-start,flex-end,space-around,space-between,stretch
     alignItems: center,flex-start,flex-end,stretch
     justifyContent: center,flex-start,flex-end,space-around,space-between,space-evenly

   ### MediaImg component:
     * this component receive the following props
      width, height, borderRadius, margin
     * the default value for each prop are 
       width:200px
       height: 200px
       border-radius:16px
       margin: 0 auto
     * the value each prop receive are  
         width:string,
         height:string,
         margin:string,
         borderRadius:string,
         src: string this prop is required,
         alt:string this prop is required,
         className:string,

     ### Button component: 
      * this component receive the following props
        bgColor,color,width,height,bgColorHover,colorHover,borderRadius
      * the default value for each prop are 
          background-colorblue
          color:white
          width:150px
          height: 40px
          border-radius: 8px
          text-align: center;
         hover:
           background-color:yellow
           color: black
      * the value each prop receive are
              className: string,
              bgColor: string,
              color: string,
              width: string,
              height: string,
              bgColorHover:string,
              colorHover: string,
              borderRadius:string,
              type:string

     ### Text component: 
      * this component receive the following props
        fontWeight,fontSize,fontFamily,textAlign, lineHeight
      * the default value for each prop are
          component:p
          font-weight:500
          font-size:16px
          font-family:monoto
          text-align:center
          line-height:25px
      * the value each prop receive are
            className:string,
            component:h1,h2,h3,h4,h5,h6,p,span, textarea
            fontWeight:number,
            fontSize:string,
            fontFamily:string,
            textAlign:string,
            lineHeight:string  

            

     