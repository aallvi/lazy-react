import ProductCard, { ProductImage,ProductTitle,ProductButtons } from "../components"
import '../styles/custom-styles.css'


const product = {
    id:'1',
    title:'Coffe mug - card',
    img:'./coffee-mug.png'
}


export const ShoppingPage = () => {


  


  return (
    <div >

        <h1>Shoping store</h1>
        <hr/>


        <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap' }} >

          <ProductCard className="bg-dark text-white" product={product} >

            <ProductCard.Image className="custom-image" />
            <ProductCard.Title className="text-white text-bold" />
            <ProductCard.Buttons   className="custom-buttons"/>
              {/* <ProductImage/>
              <ProductTitle title={''} /> */}

          </ProductCard>

          <ProductCard  className="bg-dark text-white" product={product} >

            <ProductImage className="custom-image" style={{boxShadow:'10px 10px 10px rgba(0,0,0,0.2)'}} />
            <ProductTitle className="text-white text-bold" activeClass="" title={''} />
            <ProductButtons  className="custom-buttons" />
           

          </ProductCard>


          {/* ------------------------------------------------------------------------ */}


          <ProductCard  style={{backgroundColor:'green'}}  product={product} >

            <ProductImage style={{boxShadow:'10px 10px 10px rgba(0,0,0,0.2)'}} className="custom-image" />
            <ProductTitle style={{fontWeight:'bold'}}  activeClass="" title={''} />
            <ProductButtons  style={{display:'flex', justifyContent:'end'}} className="custom-buttons" />
           

          </ProductCard>


          

        </div>



    </div>
  )
}
