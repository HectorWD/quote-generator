import Link from 'next/link';
import { AiOutlineDoubleRight } from 'react-icons/ai';

export default function Home({data}) {
  const {quoteAuthor,quoteText,_id}= data.data[0]
  return (
    
    <div className="flex flex-col items-start mt-9 ml-9">
      <div>
      <p className='
      border-l-4 border-l-yellow-400 
      pl-2 text-xl w-2/4 min-w-fit'> 
      {quoteText}
      </p>
      </div>
      <div>
        <Link href={`${quoteAuthor}/`}>
        <button className="
        bg-white text-black
        hover:bg-zinc-500 hover:text-white 
        border rounded-xl p-2">
          {quoteAuthor} 
          <AiOutlineDoubleRight/>
        </button>
        </Link>
      </div>
    </div>
    
  )
}

export async function getServerSideProps(){
  try {
    const res= await fetch('https://quote-garden.herokuapp.com/api/v3/quotes/random');
    const data= await res.json();
    return {props:{data}};
  } catch (error) {
    console.log(error)
  }
}