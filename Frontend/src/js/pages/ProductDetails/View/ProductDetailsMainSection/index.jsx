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
              <div key={data.Id} className="p-20 lg:flex ">
                <div className="flex lg:w-1/2 lg:flex-row flex-col-reverse ">
                  <div className="lg:block flex w-1/5 lg:ml-5 lg:mr-5">
                    <img
                      className="w-full m-2 "
                      src={`http://localhost:3001/${data.Image[0]}`}
                      alt="SideImageSection"
                    />
                    <img
                      className="w-full m-2"
                      src={`http://localhost:3001/${data.Image[1]}`}
                      alt="MainImageSection"
                    />
                    <img
                      className="w-full m-2"
                      src={`http://localhost:3001/${data.Image[2]}`}
                      alt="SideImageSection"
                    />
                  </div>
                  <div className="h-full w-4/6">
                    <img
                      className="w-full h-full"
                      src={`http://localhost:3001/${data.Image[3]}`}
                      alt="SideImageSection"
                    />
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <h1 className="text-4xl font-black pb-">{data.Name}</h1>

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
                    <div className="mt-4   mb-4">
                      {data.Size.map((size, index) => {
                        return size == "NotAvilable" ? (
                          <button
                            key={index}
                            disabled
                            name="small"
                            className="mr-5 text-sm p-2  w-1/6 rounded-full bg-[#F2F0F1] text-gray-500"
                          >
                            {state.sizeArray[index]}
                          </button>
                        ) : (
                          <button
                            onClick={() => {
                              handlers.setSizeSelector(state.sizeArray[index]);
                              console.log(state.sizeSelector);
                            }}
                            key={index}
                            name="small"
                            className="mr-5 text-sm p-2 w-1/6 rounded-full bg-black text-white"
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
                    <div className="flex border items-center justify-around w-1/4 rounded-full bg-Background-color">
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
                        onClick={() =>
                          handlers.dispatch(
                            handlers.setCartData({
                              "product-Id": id,
                              name: data.Name,
                              size: state.sizeSelector,
                              price: data.offerPrice,
                            })
                          )
                        }
                        className="mr-5 text-sm p-2 w-3/5 rounded-full bg-black text-white"
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
