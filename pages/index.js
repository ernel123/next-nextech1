import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <h1 className="text-2xl text-center mt-6 font-semibold my-6">Welcome to Nextech CREATORS API</h1>
      <p className="mb-10 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam consequat leo sit amet quam dictum vulputate. Duis quis erat molestie ligula vehicula molestie ut vestibulum sapien. Donec sollicitudin neque vitae erat rutrum, vitae condimentum augue imperdiet. Proin dignissim velit a nisi lacinia, a consectetur lacus molestie. Fusce luctus auctor eros sed molestie. Cras purus leo, aliquam eget eros sed, malesuada facilisis mauris. In lacinia congue turpis quis dignissim. Donec lobortis congue felis eget consequat.</p>

      <p className="mb-2">Professional website design for businesses and shops makes branding and selling online more manageable. Website is optimized with search engines, compatible with mobile devices, elegant interface, convenient, and easy to change according to your own style.</p>
      <p className="py-1 text-1xl text-align-left font-bold my-6 ">At Nextech Creators, we use professional web design technology, fast web design with only four necessary steps.</p>


      <h1 className="py-1 px-20 text-5xl mt-6 font-semibold   ">Think In Motion</h1>
      <p className="mb-2 px-20 underline ...">We Create.We Develop.We Inspire</p>
      <div class="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500"></div>
     

      <button id="object-1" class="bg-blue-400 hover:bg-blue-300 text-black font-bold py-4 px-8 border-b-4 border-blue-700 hover:border-blue-500 rounded">
  Learn More
</button>

<h1 className="text-2xl text-center mt-6 font-semibold my-6 ">
// At Nextech Creators</h1> 
<h1 className="py-1 px-20 text-5xl mt-6 font-semibold text-center  ">All That You Need, We Have</h1>
 
<img id="web" src="/Images/web-design.jpg"   
        width={300}
        height={200} 
 
        alt="Your Name"/>
<h1 id="simpleM" className="text-2xl text-center mt-6 font-semibold my-6  ">Simple Management</h1>


<img id="cost" object-center src="/Images/cost.png "   
        width={300}
        height={200} 
 
        alt="Your Name"/>

<style jsx>{`
#object-1 {
  object-position: center top;
}

#web{
 
  border: 1px solid black;
  background-color: silver;
  object-position: 30px;
 
}

#cost {
  object-position: center;
  padding: 10px
  border: 1px solid red;
  background-color: silver;
}

#simpleM {
  object-position: 50% 50%;
 

}


`}</style>

    </div>
  )
}
