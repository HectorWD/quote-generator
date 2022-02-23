import Link from "next/link";

const QuotePersonal = ({ data }) => {
    return (
        <div className='flex flex-col justify-center w-2/4 min-w-fit'>
            <div className="mt-4 ml-12">
                <Link href={'/'}>
                <button className="border p-2 rounded-md hover:bg-zinc-400 hover:text-white">
                    Volver
                </button>
                </Link>
                <p className='mt-4 ml-12'> {data.data[0].quoteAuthor} </p>
            </div>
            {data.data.map(quote => (
                <div key={quote._id}
                    className='m-12 border-l-yellow-400 border-l-4 pl-6'>
                    {quote.quoteText}"
                </div>
            ))}
        </div>
    )
}
export async function getServerSideProps({ params }) {
    try {
        const res = await fetch(`https://quote-garden.herokuapp.com/api/v3/quotes?author=${params.id}`)
        const data = await res.json();
        return { props: { data } }
    } catch (error) {
        console.log(error)
    }
}
export default QuotePersonal