import ProductCard, { ProductImage,ProductTitle,ProductButtons } from "../components"



const product = {
    id:'1',
    title:'Coffe mug - card',
    img:'./coffee-mug.png'
}


export const ShoppingPage = () => {


  


  return (
    <div>

        <h1>Shoping store</h1>
        <hr/>


        <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap' }} >

          <ProductCard product={product} >

            <ProductCard.Image />
            <ProductCard.Title  />
            <ProductCard.Buttons />
              {/* <ProductImage/>
              <ProductTitle title={''} /> */}

          </ProductCard>

          <ProductCard product={product} >

            <ProductImage />
            <ProductTitle title={'Cafe'} />
            <ProductButtons />
           

          </ProductCard>


          

        </div>



    </div>
  )
}
