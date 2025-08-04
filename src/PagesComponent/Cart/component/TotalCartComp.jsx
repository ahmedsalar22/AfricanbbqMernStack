import CartReuseable from "./CartReuseable";

const   TotalCartComp = () => {
  return (
    <>
      <div className="w-full py-8 totalCartContainer">
        <div className="flex flex-col w-full gap-4 mx-auto md:flex-row md:gap-2 md:w-4/5">
          <div className="image w-full md:w-[60%] flex justify-center items-center">
            <img 
              src="/assets/images/cartBeef.png" 
              alt="Cart Image" 
              className="object-contain h-auto max-w-full"
            />
          </div>

          <div className="w-full md:w-1/2">
            <CartReuseable />
          </div>
        </div>
      </div>
    </>
  );
};

export default TotalCartComp;
