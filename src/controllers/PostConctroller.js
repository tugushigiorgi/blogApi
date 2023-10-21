const { Post, category} = require("../models");




exports.createpost=async (req,res)=>{


    const { title, description,categoryId } = req.body;

  const getcategory = await category.findOne({ categoryId });


  if (!getcategory)
  return res.status(401).send({ message: "Category Not Found" });
try{
  const post = new Post({
    title,
    description,
    category: getcategory,
  });


  await post.save();


  return res.status(200).send({ message: "Post add succesfully" });

}catch (err){
  res.status(500).json({ message: 'An error occurred' });

}

 


};
