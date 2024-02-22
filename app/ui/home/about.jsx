import Container from './container'

export default function About({ data }) {
    return (
        <>
            <div className='h-px w-full bg-divider'></div>
            <Container {...data.meta} className='bg-white'>
                <p className=' text-xl text-font'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga repellat voluptatibus veniam minima nulla qui
                    ad commodi error facere nihil voluptate ex illum dicta, libero vero consequatur perferendis mollitia
                    similique! Veniam cumque amet voluptate rerum dolorum optio laboriosam repellendus quos iusto excepturi, eum
                    dicta obcaecati incidunt consectetur nihil beatae sunt saepe unde error non et quisquam sint. Error,
                    aspernatur similique? Neque dignissimos libero dolorem asperiores, veritatis veniam aspernatur commodi
                    doloribus sunt cupiditate quasi praesentium ullam a dolor provident reiciendis magnam mollitia cum sapiente
                    iste similique est accusamus nulla. Dolorem, architecto! Est libero eum necessitatibus itaque, delectus iste
                    officia voluptatibus veritatis ducimus temporibus laboriosam, vel iusto sed quae qui? Iusto iste est dolore
                    asperiores, nihil ullam maxime necessitatibus a enim? Soluta? Rerum excepturi deleniti cum, eius pariatur
                    laborum sed dolor neque vitae magni minus aut maiores numquam nostrum dignissimos optio id ea inventore
                    blanditiis! Laudantium fuga necessitatibus praesentium facere iure dignissimos.
                </p>
            </Container>
        </>
    )
}
