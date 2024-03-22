import React from "react";
import ReactStars from "react-rating-stars-component";

function ProductDetailsMainSectionView({ id, state, handlers }) {
  return (
    <div key={id}>
      {state.data
        .filter((data) => data.Id === id)
        .map((data) => {
          return (
            <>
              <div key={data.Id} className="lg:p-20 p-8 lg:flex ">
                <div className="flex w-full lg:w-1/2 lg:flex-row flex-col-reverse ">
                  <div className="lg:block flex lg:w-1/5 w-1/3 lg:ml-5 lg:mr-5">
                    <img
                      className="w-full mr-2 mt-2 "
                      src={`http://localhost:3001/${data.Image[0]}`}
                      alt="SideImageSection"
                    />
                    <img
                      className="w-full mr-2 mt-2"
                      src={`http://localhost:3001/${data.Image[1]}`}
                      alt="MainImageSection"
                    />
                    <img
                      className="w-full mr-2 mt-2"
                      src={`http://localhost:3001/${data.Image[2]}`}
                      alt="SideImageSection"
                    />
                  </div>
                  <div className="h-full lg:w-4/6 w-full">
                    <img
                      className="w-full h-full"
                      src={`http://localhost:3001/${data.Image[3]}`}
                      alt="SideImageSection"
                    />
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <h1 className="lg:text-4xl text-2xl font-black pb-">
                    {data.Name}
                  </h1>

                  <div className="flex items-center pb-3">
                    <ReactStars
                      size={20}
                      emptyIcon={<i className="far fa-star"></i>}
                      readonly={true}
                      allowFraction={true}
                      count={5}
                      isHalf={true}
                      value={Number(data.Rating)}
                    />
                    {data.Rating}/5
                  </div>
                  <div className="flex pb-2">
                    <p className=" text-3xl pr-2">${data.offerPrice}</p>
                    <p className=" text-3xl text-gray-400 line-through pr-2">
                      ${data.Price}
                    </p>
                  </div>
                  <div className="text-sm text-gray-500 pb-3">
                    <p>Discription</p>
                  </div>
                  <hr />
                  <div className="pb-3 pt-3">
                    <p className=" text-sm text-gray-500">Choose Size</p>
                    <div className="mt-4 flex lg:justify-start justify-center   mb-4">
                      {data.Size.map((size, index) => {
                        return size == "NotAvilable" ? (
                          <button
                            key={index}
                            disabled
                            name="small"
                            className="lg:mr-5 mr-2text-sm p-2  lg:w-1/6 w-1/5 rounded-full bg-[#F2F0F1] text-gray-500"
                          >
                            {state.sizeArray[index]}
                          </button>
                        ) : (
                          <button
                            onClick={() => {
                              handlers.setSizeSelector(state.sizeArray[index]);
                            }}
                            key={index}
                            name="small"
                            className="lg:mr-5  mr-2 text-sm p-2 lg:w-1/6 w-1/5 rounded-full bg-black text-white"
                          >
                            {state.sizeArray[index]}
                          </button>
                        );
                      })}

                      {/* {data.Size[0] == null ? (
                        <button
                          disabled
                          name="small"
                          className="mr-5 text-sm p-2  w-1/6 rounded-full bg-[#F2F0F1] text-gray-500"
                        >
                          Small
                        </button>
                      ) : (
                        <button
                          name="small"
                          className="mr-5 text-sm p-2 w-1/6 rounded-full bg-black text-white"
                        >
                          Small
                        </button>
                      )}
                      {data.Size[1] == null ? (
                        <button
                          disabled
                          className="mr-5 text-sm p-2  w-1/6 rounded-full bg-[#F2F0F1] text-gray-500"
                          name="Medium"
                        >
                          Medium
                        </button>
                      ) : (
                        <button
                          name="Medium"
                          className="mr-5 text-sm p-2 w-1/6 rounded-full bg-black text-white"
                        >
                          Medium
                        </button>
                      )}
                      {data.Size[2] == null ? (
                        <button
                          disabled
                          className="mr-5 text-sm p-2  w-1/6 rounded-full bg-[#F2F0F1] text-gray-500"
                          name="Large"
                        >
                          Large
                        </button>
                      ) : (
                        <button
                          name="Large"
                          className="mr-5 text-sm p-2 w-1/6 rounded-full bg-black text-white"
                        >
                          Large
                        </button>
                      )}
                      {data.Size[3] == null ? (
                        <button
                          disabled
                          className="mr-5 text-sm p-2 w-1/6 rounded-full bg-[#F2F0F1] text-gray-500"
                          name="XLarge"
                        >
                          XLarge
                        </button>
                      ) : (
                        <button
                          name="XLarge"
                          className="mr-5 text-sm p-2 w-1/6 rounded-full bg-black text-white"
                        >
                          XLarge
                        </button>
                      )} */}
                    </div>
                  </div>
                  <hr />
                  <div className="flex w-full pt-5">
                    <div className="flex border items-center justify-around lg:w-1/4 w-1/2 rounded-full bg-Background-color">
                      <button
                        className="w-1/3"
                        onClick={handlers.cartProductsNumberDecrementer}
                      >
                        -
                      </button>
                      <p className="pl-2 pr-2">{state.count}</p>
                      <button
                        className="w-1/3"
                        onClick={handlers.cartProductsNumberIncrementer}
                      >
                        +
                      </button>
                    </div>
                    <div className="w-full pl-4">
                      <button
                        onClick={() => {
                          if (state.sizeSelector == " ") {
                            alert("select size first");
                          } else {
                            handlers.dispatch(
                              handlers.setCartData({
                                "product-Id": id,
                                name: data.Name,
                                size: state.sizeSelector,
                                price: data.offerPrice,
                              })
                            );
                            handlers.setSizeSelector(" ");
                            alert("Added");
                          }
                        }}
                        className="lg:mr-5 text-sm p-2 lg:w-3/5 w-full rounded-full bg-black text-white"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
    </div>
  );
}

export default ProductDetailsMainSectionView;
