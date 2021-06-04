import bodyParser from 'body-parser';
import express from 'express';
import {MongoClient} from 'mongodb';

//data

const products = [{
    id: '123',
    name: 'Running Shoes',
    price: '60.00',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel enim quam. Mauris nisl tellus, fringilla sed cursus eu, convallis non diam. Mauris quis fringilla nunc. Aenean leo lacus, lobortis sit amet venenatis a, aliquet tristique erat. Etiam laoreet mauris ut dapibus tincidunt. Pellentesque non ex at nisl ornare aliquam sed non ante. Nam lobortis magna id massa cursus, sit amet condimentum metus facilisis. Donec eu tortor at est tempor cursus et sed velit. Morbi rutrum elementum est vitae fringilla. Phasellus dignissim purus turpis, ac varius enim auctor vulputate. In ullamcorper vestibulum mauris. Nulla malesuada pretium mauris, lobortis eleifend dolor iaculis vitae.',
    imageUrl: '/images/shoes-1.jpg',
    averageRating: '5.0',
  }, {
    id: '234',
    name: 'Basketball Shoes',
    price: '120.00',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel enim quam. Mauris nisl tellus, fringilla sed cursus eu, convallis non diam. Mauris quis fringilla nunc. Aenean leo lacus, lobortis sit amet venenatis a, aliquet tristique erat. Etiam laoreet mauris ut dapibus tincidunt. Pellentesque non ex at nisl ornare aliquam sed non ante. Nam lobortis magna id massa cursus, sit amet condimentum metus facilisis. Donec eu tortor at est tempor cursus et sed velit. Morbi rutrum elementum est vitae fringilla. Phasellus dignissim purus turpis, ac varius enim auctor vulputate. In ullamcorper vestibulum mauris. Nulla malesuada pretium mauris, lobortis eleifend dolor iaculis vitae.',
    imageUrl: '/images/shoes-2.jpg',
    averageRating: '5.0',
  }, {
    id: '345',
    name: 'Bright Red Shoes',
    price: '90.00',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel enim quam. Mauris nisl tellus, fringilla sed cursus eu, convallis non diam. Mauris quis fringilla nunc. Aenean leo lacus, lobortis sit amet venenatis a, aliquet tristique erat. Etiam laoreet mauris ut dapibus tincidunt. Pellentesque non ex at nisl ornare aliquam sed non ante. Nam lobortis magna id massa cursus, sit amet condimentum metus facilisis. Donec eu tortor at est tempor cursus et sed velit. Morbi rutrum elementum est vitae fringilla. Phasellus dignissim purus turpis, ac varius enim auctor vulputate. In ullamcorper vestibulum mauris. Nulla malesuada pretium mauris, lobortis eleifend dolor iaculis vitae.',
    imageUrl: '/images/shoes-3.jpg',
    averageRating: '5.0',
  }, {
    id: '456',
    name: 'Fancy Shoes',
    price: '190.00',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel enim quam. Mauris nisl tellus, fringilla sed cursus eu, convallis non diam. Mauris quis fringilla nunc. Aenean leo lacus, lobortis sit amet venenatis a, aliquet tristique erat. Etiam laoreet mauris ut dapibus tincidunt. Pellentesque non ex at nisl ornare aliquam sed non ante. Nam lobortis magna id massa cursus, sit amet condimentum metus facilisis. Donec eu tortor at est tempor cursus et sed velit. Morbi rutrum elementum est vitae fringilla. Phasellus dignissim purus turpis, ac varius enim auctor vulputate. In ullamcorper vestibulum mauris. Nulla malesuada pretium mauris, lobortis eleifend dolor iaculis vitae.',
    imageUrl: '/images/shoes-4.jpg',
    averageRating: '5.0',
  }, {
    id: '567',
    name: 'Skateboard Shoes',
    price: '75.00',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel enim quam. Mauris nisl tellus, fringilla sed cursus eu, convallis non diam. Mauris quis fringilla nunc. Aenean leo lacus, lobortis sit amet venenatis a, aliquet tristique erat. Etiam laoreet mauris ut dapibus tincidunt. Pellentesque non ex at nisl ornare aliquam sed non ante. Nam lobortis magna id massa cursus, sit amet condimentum metus facilisis. Donec eu tortor at est tempor cursus et sed velit. Morbi rutrum elementum est vitae fringilla. Phasellus dignissim purus turpis, ac varius enim auctor vulputate. In ullamcorper vestibulum mauris. Nulla malesuada pretium mauris, lobortis eleifend dolor iaculis vitae.',
    imageUrl: '/images/shoes-5.jpg',
    averageRating: '5.0',
  }, {
    id: '678',
    name: 'High Heels',
    price: '200.00',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel enim quam. Mauris nisl tellus, fringilla sed cursus eu, convallis non diam. Mauris quis fringilla nunc. Aenean leo lacus, lobortis sit amet venenatis a, aliquet tristique erat. Etiam laoreet mauris ut dapibus tincidunt. Pellentesque non ex at nisl ornare aliquam sed non ante. Nam lobortis magna id massa cursus, sit amet condimentum metus facilisis. Donec eu tortor at est tempor cursus et sed velit. Morbi rutrum elementum est vitae fringilla. Phasellus dignissim purus turpis, ac varius enim auctor vulputate. In ullamcorper vestibulum mauris. Nulla malesuada pretium mauris, lobortis eleifend dolor iaculis vitae.',
    imageUrl: '/images/shoes-6.jpg',
    averageRating: '5.0',
  }, {
    id: '789',
    name: 'Dark Shoes',
    price: '100.00',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel enim quam. Mauris nisl tellus, fringilla sed cursus eu, convallis non diam. Mauris quis fringilla nunc. Aenean leo lacus, lobortis sit amet venenatis a, aliquet tristique erat. Etiam laoreet mauris ut dapibus tincidunt. Pellentesque non ex at nisl ornare aliquam sed non ante. Nam lobortis magna id massa cursus, sit amet condimentum metus facilisis. Donec eu tortor at est tempor cursus et sed velit. Morbi rutrum elementum est vitae fringilla. Phasellus dignissim purus turpis, ac varius enim auctor vulputate. In ullamcorper vestibulum mauris. Nulla malesuada pretium mauris, lobortis eleifend dolor iaculis vitae.',
    imageUrl: '/images/shoes-7.jpg',
    averageRating: '5.0',
  }, {
    id: '890',
    name: 'Classic Shoes',
    price: '40.00',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel enim quam. Mauris nisl tellus, fringilla sed cursus eu, convallis non diam. Mauris quis fringilla nunc. Aenean leo lacus, lobortis sit amet venenatis a, aliquet tristique erat. Etiam laoreet mauris ut dapibus tincidunt. Pellentesque non ex at nisl ornare aliquam sed non ante. Nam lobortis magna id massa cursus, sit amet condimentum metus facilisis. Donec eu tortor at est tempor cursus et sed velit. Morbi rutrum elementum est vitae fringilla. Phasellus dignissim purus turpis, ac varius enim auctor vulputate. In ullamcorper vestibulum mauris. Nulla malesuada pretium mauris, lobortis eleifend dolor iaculis vitae.',
    imageUrl: '/images/shoes-8.jpg',
    averageRating: '5.0',
  }, {
    id: '906',
    name: 'Plain Shoes',
    price: '54.00',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel enim quam. Mauris nisl tellus, fringilla sed cursus eu, convallis non diam. Mauris quis fringilla nunc. Aenean leo lacus, lobortis sit amet venenatis a, aliquet tristique erat. Etiam laoreet mauris ut dapibus tincidunt. Pellentesque non ex at nisl ornare aliquam sed non ante. Nam lobortis magna id massa cursus, sit amet condimentum metus facilisis. Donec eu tortor at est tempor cursus et sed velit. Morbi rutrum elementum est vitae fringilla. Phasellus dignissim purus turpis, ac varius enim auctor vulputate. In ullamcorper vestibulum mauris. Nulla malesuada pretium mauris, lobortis eleifend dolor iaculis vitae.',
    imageUrl: '/images/shoes-9.jpg',
    averageRating: '5.0',
  },
  {
    id: '901',
    name: 'Teal Dress Shoes',
    price: '330.00',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel enim quam. Mauris nisl tellus, fringilla sed cursus eu, convallis non diam. Mauris quis fringilla nunc. Aenean leo lacus, lobortis sit amet venenatis a, aliquet tristique erat. Etiam laoreet mauris ut dapibus tincidunt. Pellentesque non ex at nisl ornare aliquam sed non ante. Nam lobortis magna id massa cursus, sit amet condimentum metus facilisis. Donec eu tortor at est tempor cursus et sed velit. Morbi rutrum elementum est vitae fringilla. Phasellus dignissim purus turpis, ac varius enim auctor vulputate. In ullamcorper vestibulum mauris. Nulla malesuada pretium mauris, lobortis eleifend dolor iaculis vitae.',
    imageUrl: '/images/shoes-10.jpg',
    averageRating: '5.0',
  },
  {
    id: '789',
    name: 'Fancy Boots',
    price: '230.00',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel enim quam. Mauris nisl tellus, fringilla sed cursus eu, convallis non diam. Mauris quis fringilla nunc. Aenean leo lacus, lobortis sit amet venenatis a, aliquet tristique erat. Etiam laoreet mauris ut dapibus tincidunt. Pellentesque non ex at nisl ornare aliquam sed non ante. Nam lobortis magna id massa cursus, sit amet condimentum metus facilisis. Donec eu tortor at est tempor cursus et sed velit. Morbi rutrum elementum est vitae fringilla. Phasellus dignissim purus turpis, ac varius enim auctor vulputate. In ullamcorper vestibulum mauris. Nulla malesuada pretium mauris, lobortis eleifend dolor iaculis vitae.',
    imageUrl: '/images/shoes-11.jpg',
    averageRating: '5.0',
  }, {
    id: '890',
    name: 'Gold Shoes',
    price: '180.00',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel enim quam. Mauris nisl tellus, fringilla sed cursus eu, convallis non diam. Mauris quis fringilla nunc. Aenean leo lacus, lobortis sit amet venenatis a, aliquet tristique erat. Etiam laoreet mauris ut dapibus tincidunt. Pellentesque non ex at nisl ornare aliquam sed non ante. Nam lobortis magna id massa cursus, sit amet condimentum metus facilisis. Donec eu tortor at est tempor cursus et sed velit. Morbi rutrum elementum est vitae fringilla. Phasellus dignissim purus turpis, ac varius enim auctor vulputate. In ullamcorper vestibulum mauris. Nulla malesuada pretium mauris, lobortis eleifend dolor iaculis vitae.',
    imageUrl: '/images/shoes-12.jpg',
    averageRating: '5.0',
  }];
  
  export let cartItems = [
    products[0],
    products[2],
    products[3],
  ];


const app = express();
app.use(bodyParser.json());


//end point for all products
app.get('/api/products',async (req,res)=>{
  const client=await MongoClient.connect(
    'mongodb://localhost:27017',
    {useNewUrlParser:true,useUnifiedTopology:true}
  );
  const db=client.db('vue-db');
  const products=await db.collection('products').find({}).toArray();
    res.status(200).json(products);
    client.close();
});

//end point for users cart items 
app.get('/api/users/:userId/cart',async (req,res)=>{
  const {userId}=req.params;
  const client=await MongoClient.connect(
    'mongodb://localhost:27017',
    {useNewUrlParser:true,useUnifiedTopology:true}
  );
  const db=client.db('vue-db');
  const user= await db.collection('users').findOne({id:userId});
  if(!user) return res.status(404).json('Could not find the user');
  const products=await db.collection('products').find({}).toArray();
  const cartItemIds=user.cartItems;
  const cartItems=cartItemIds.map(id=> products.find(product=>product.id===id));
  
    res.status(200).json(cartItems);
    client.close();
});

//end point for product details page
app.get('/api/products/:productId',async (req,res)=>{
    const { productId } = req.params;
    const client=await MongoClient.connect(
      'mongodb://localhost:27017',
      {useNewUrlParser:true,useUnifiedTopology:true}
    );
    const db=client.db('vue-db');
    const product=await db.collection('products').findOne({id:productId});

    if(product){
      res.status(200).json(product);
    }else{
      res(404).json('Could not find product');
    }
    client.close();

    //404 for not availavble products
    if(product){
        res.status(200).json(product);
    }else{
        res.status(404).json('could not find the product')
    }
});


//end point to post data to cart items

app.post('/api/users/:userId/cart',(req,res)=>{
    const {productId}= req.body;
    const product=products.find((product)=>product.id===productId);
    if (product){
        cartItems.push(product);
        res.status(200).json(cartItems);
    }
    else{
        res.status(404).json('Could not find the product');
    }
});

//end point for removing data from the cart items
app.delete('/api/users/:userId/cart/:productId',(req,res)=>{
    //take the url product id parameter
    const {productId}=req.params;
    //filter out product items except the id that we want to delete
    cartItems=cartItems.filter((product)=>product.id!==productId);
    //return the new cartItems
    res.status(200).json(cartItems);
});



app.get('/hello', (req, res) => {
    res.send('Hello!');
});

//create a post route for /hello end point
app.post('/hello',(req,res)=>{
    res.send(`hello ${req.body.name} from /hello end point post route`);

});

//url parameter for get
app.get('/hello/:name',(req,res)=>{
    res.send(`hello ${req.params.name}`);
})


app.listen(8000, () => {
    console.log('Server is listening on port 8000!!! on node backend by Amila');
});