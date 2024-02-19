import Container from './container'

export default function Advantages({ data }) {
    return (
        <Container {...data.meta}>
            <div className='grid w-full grid-cols-2 gap-8 '>
                {data.content.map(advantage => (
                    <div
                        key={advantage.title}
                        className='use-shadow hover:use-shadow-lg group flex cursor-default flex-col gap-2 rounded bg-white p-md transition-shadow duration-300'
                    >
                        <h3 className='use-underlineAnim self-baseline bg-[length:0_3px] text-xl font-bold text-minor transition-all duration-500 group-hover:bg-[length:100%_3px]'>
                            {advantage.title}
                        </h3>
                        <p className='text-md text-shadow'>{advantage.description}</p>
                    </div>
                ))}
            </div>
        </Container>
    )
}
