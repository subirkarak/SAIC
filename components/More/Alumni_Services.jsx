import React from 'react'

const Alumni_Services = () => {
  return (
    <div>
        <div className="mx-8 md:mx-40 ">
      <div className="">
        <div
          className=" bg-cover bg-center  bg-no-repeat"
          style={{
            "background-image":
              " url('https://alumnitdgp.in/images/home/alumni_services.jpg')",
          }}
        >
          <h1 className="text-3xl tracking-wider pt-5 pb-5 mb-5 border-b-2 text-green-500 text-center">
            Alumni Services
          </h1>
          <p className="py-10 md:px-20 tracking-wider leading-6 border-b-2  text-sm">
          <ol>
                                <li>1.The Alumni cell is keen to help you connect with your alma mater, batchmates and other Alumni in every possible manner.</li>
                                <li>2.The Alumni cell maintains a large database of the alumni spread across the globe. If you wish to seek help to connect to anyone in particular or a group, mail us at <a href="">alumni@admin.nitdgp.ac.in</a>.</li>
                                <li>3.If you are working or run your own company, then you can be a part of yearly Placement and Summer Internship program run by the institute and provide an opportunity to students to be a part of your work culture.</li>
                                <li>4.Your knowledge and skills can have a huge impact in building a vibrant and intellectual atmosphere at the institute.</li>
                                <li>5.You can contribute towards it either by working as an adjunct faculty or giving guest lectures on topics of general interests.</li>
                            </ol>
          </p>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Alumni_Services