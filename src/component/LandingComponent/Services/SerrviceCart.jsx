
const ServiceCart = (props) => {
    return (
        <div className="hover:transform hover:translate hover:scale-105 flex flex-row md:flex-col justify-around border-2 hover:border-1 dark:border-violet-800 hover:bg-[#3F40EA/30] shadow-slate-300 hover:shadow-2xl dark:shadow-violet-800 border-transparent hover:border-transparent rounded-lg w-[95%] transition-all" >
            <div className='w-24 md:w-24 h-full md:h-1/4'>
                <img className='mr-8 py-6' src={props.image} alt="" />
            </div>
            <div className='text-right md:px-12 py-5 w-3/4 md:w-full h-full'>
                <div className='flex flex-col items-start'>
                    <span className='font-semibold text-[#121242] text-2xl dark:text-violet-200'>{props.title}</span>
                    <span className='bg-blue-700 mt-2 py-[2px] w-6'> </span>
                </div>
                <div className='mt-5'>
                    <p className='text-[#121242] text-lg dark:text-violet-200 text-opacity-70'>
                        {props.description}
                    </p></div>
            </div>
        </div>
    )
}

export default ServiceCart;