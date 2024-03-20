import React from 'react'

const Vision = () => {
  return (
    <div className="md:mx-20 mx-4">
      <div
        className=" bg-cover bg-center  bg-no-repeat"
       
      >
                <h1 className="text-center text-3xl pt-10 pb-5 text-red-500">Vision </h1>
                <div className='md:flex flex-row'>
                 <div className="flex basis-1/2 justify-between  md:ml-40 items-center">
                    <img src="https://alumnitdgp.in/images/vision.png "/>
                 </div>
                 <p className='basis-1/2 md:-ml-40' style={{"font-size": "18px", "font-family":" 'Comic Sans MS', cursive,sans-serif", "color": "#333"}}> 
	               			
		             { `	"To facilitate engagement between the Institute and
						the alumni to promote all-round development of
						the Institute, initiate collaborative activities with
						universities/organizations in India and abroad,
						and foster outreach activities with the community".`}
				    </p>
                </div>
         </div></div>
  )
}

export default Vision