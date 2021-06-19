export default async function addData(
  productTitle,
  productImage,
  productPrize,
  productDetails
){
  const response = await fetch(
    "https://e-mart-717ba-default-rtdb.firebaseio.com/productArray.json",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        productTitle:productTitle,
        productImage:productImage,
        productDetails:productDetails,
        productPrize:productPrize,
      }),
    }
  );

  const data = await response.json();
  console.log(data);
}
